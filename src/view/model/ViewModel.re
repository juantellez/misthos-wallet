open PrimitiveTypes;

open WalletTypes;

module ItemsSet = Belt.Set.String;

module PartnersCollector = ViewModel__PartnersCollector;

module TransactionCollector = ViewModel__TransactionCollector;

module TxDetailsCollector = ViewModel__TxDetailsCollector;

module OldInputCollector = ViewModel__OldTxInputCollector;

type t = {
  localUser: userId,
  ventureId,
  lastResponse:
    option((WebWorker.correlationId, VentureWorkerMessage.cmdResponse)),
  ventureName: string,
  processedItems: ItemsSet.t,
  metaPolicy: Policy.t,
  partnersCollector: PartnersCollector.t,
  transactionCollector: TransactionCollector.t,
  txDetailsCollector: TxDetailsCollector.t,
  oldInputCollector: OldInputCollector.t,
  walletInfoCollector: WalletInfoCollector.t,
};

let readOnly = ({localUser, partnersCollector}) =>
  partnersCollector |> PartnersCollector.isPartner(localUser) == false;

let captureResponse = (correlationId, response, state) => {
  ...state,
  lastResponse: Some((correlationId, response)),
};

let lastResponse = ({lastResponse}) => lastResponse;

module AddressesView = {
  open Belt;
  type addressType = WalletInfoCollector.addressType;
  type addressStatus = WalletInfoCollector.addressStatus;
  type addressInfo = WalletInfoCollector.addressInfo;
  type incomeStatus = TxDetailsCollector.incomeStatus;
  type income = {
    status: incomeStatus,
    unlocked: bool,
    date: option(Js.Date.t),
    txId: string,
    amount: BTC.t,
  };
  type addressDetails = {
    custodians: UserId.set,
    nCoSigners: int,
    nCustodians: int,
    addressType,
    addressStatus,
    unspentIncome: list(income),
    spentIncome: list(income),
    isPartner: UserId.t => bool,
  };
  type t = {
    infos: list(addressInfo),
    ventureId,
    atRiskWarning: bool,
    addressDetails: addressInfo => addressDetails,
  };
  let fromViewModelState =
      (
        {
          walletInfoCollector,
          oldInputCollector,
          partnersCollector,
          txDetailsCollector,
          ventureId,
        },
      ) => {
    let infos =
      walletInfoCollector
      |> WalletInfoCollector.addressInfos(AccountIndex.default);

    {
      infos,
      ventureId,
      atRiskWarning:
        infos
        |. List.reduceU(
             false, (. res, {addressStatus, balance}: addressInfo) =>
             switch (addressStatus) {
             | AtRisk => res || balance |> BTC.gt(BTC.zero)
             | _ => res
             }
           ),
      addressDetails: addressInfo => {
        isPartner: id => partnersCollector |> PartnersCollector.isPartner(id),
        custodians: addressInfo.custodians,
        nCustodians: addressInfo.custodians |> Belt.Set.size,
        nCoSigners: addressInfo.nCoSigners,
        addressType: addressInfo.addressType,
        addressStatus: addressInfo.addressStatus,
        unspentIncome:
          WalletInfoCollector.inputsFor(
            AccountIndex.default,
            addressInfo,
            walletInfoCollector,
          )
          |. Belt.List.mapU((. {txId, value, unlocked}: Network.txInput) => {
               let {status, date}: TxDetailsCollector.income =
                 txDetailsCollector
                 |> TxDetailsCollector.getIncome(txId)
                 |> Js.Option.getExn;
               {txId, amount: value, status, date, unlocked};
             }),
        spentIncome:
          oldInputCollector
          |> OldInputCollector.inputsFor(addressInfo.address)
          |. Belt.List.mapU((. {txId, value, unlocked}: Network.txInput) => {
               let {status, date}: TxDetailsCollector.income =
                 txDetailsCollector
                 |> TxDetailsCollector.getIncome(txId)
                 |> Js.Option.getExn;
               {txId, amount: value, status, date, unlocked};
             }),
      },
    };
  };
};
let viewAddressesModal = AddressesView.fromViewModelState;

module ManagePartnersView = {
  type partner = PartnersCollector.partner;
  type t = {
    ventureName: string,
    localUser: UserId.t,
    partners: list(partner),
    joinVentureUrl: string,
  };
  let fromViewModelState =
      ({ventureName, ventureId, localUser, partnersCollector}) => {
    localUser,
    ventureName,
    partners: partnersCollector.partners,
    joinVentureUrl:
      Location.origin
      ++ Router.Config.routeToUrl(JoinVenture(ventureId, localUser)),
  };
};

let managePartnersModal = ManagePartnersView.fromViewModelState;

module ViewPartnerView = {
  type voteStatus = ProcessCollector.voteStatus;
  type voter = ProcessCollector.voter;
  type t = PartnersCollector.partnerProcess;
  let fromViewModelState = (userId, {partnersCollector}) =>
    partnersCollector |> PartnersCollector.getProspect(userId);
};

let viewPartnerModal = ViewPartnerView.fromViewModelState;

module CreatePayoutView = {
  type balance = {
    currentSpendable: BTC.t,
    reserved: BTC.t,
  };
  type t = {
    allowCreation: bool,
    balance,
    ventureId,
    ventureName: string,
    initialSummary: PayoutTransaction.summary,
    isAddressValid: string => bool,
    max: (string, list((string, BTC.t)), BTC.t) => BTC.t,
    summary: (list((string, BTC.t)), BTC.t) => PayoutTransaction.summary,
  };
  let fromViewModelState =
      ({ventureId, localUser, ventureName, walletInfoCollector}) => {
    let reserved =
      walletInfoCollector
      |> WalletInfoCollector.totalReservedBTC(AccountIndex.default);
    let balance = {
      reserved,
      currentSpendable:
        walletInfoCollector
        |> WalletInfoCollector.totalUnusedBTC(AccountIndex.default)
        |> BTC.minus(reserved),
    };
    let network = walletInfoCollector |> WalletInfoCollector.network;
    let optionalInputs =
      walletInfoCollector
      |> WalletInfoCollector.currentSpendableInputs(AccountIndex.default);
    let mandatoryInputs =
      walletInfoCollector
      |> WalletInfoCollector.oldSpendableInputs(AccountIndex.default);
    let unlockedInputs =
      walletInfoCollector
      |> WalletInfoCollector.unlockedInputs(AccountIndex.default);
    let allInputs = optionalInputs |. Belt.Set.union(mandatoryInputs);
    let changeAddress =
      walletInfoCollector
      |> WalletInfoCollector.fakeChangeAddress(
           AccountIndex.default,
           localUser,
         );
    {
      ventureId,
      balance,
      allowCreation: balance.currentSpendable |> BTC.gt(BTC.zero),
      ventureName,
      initialSummary: {
        reserved: BTC.zero,
        destinations: [],
        spentWithFees: BTC.zero,
        misthosFee: BTC.zero,
        networkFee: BTC.zero,
      },
      isAddressValid: address =>
        try (
          {
            Bitcoin.Address.toOutputScript(
              address,
              network |> Network.bitcoinNetwork,
            )
            |> ignore;
            true;
          }
        ) {
        | _ => false
        },
      max: (targetDestination, destinations, fee) =>
        PayoutTransaction.max(
          ~allInputs,
          ~targetDestination,
          ~destinations,
          ~satsPerByte=fee,
          ~network,
        ),
      summary: (destinations, fee) =>
        PayoutTransaction.build(
          ~mandatoryInputs,
          ~unlockedInputs,
          ~optionalInputs,
          ~destinations,
          ~satsPerByte=fee,
          ~changeAddress,
          ~network,
        )
        |> PayoutTransaction.summary(network),
    };
  };
};

let createPayoutModal = CreatePayoutView.fromViewModelState;

module ViewPayoutView = {
  type payoutStatus = TxDetailsCollector.payoutStatus;
  type voteStatus = ProcessCollector.voteStatus;
  type voter = ProcessCollector.voter;
  type payout = TxDetailsCollector.payoutProcess;
  type t = {
    payout,
    collidesWith: ProcessId.set,
  };
  let fromViewModelState =
      (processId, {txDetailsCollector, walletInfoCollector}) =>
    txDetailsCollector
    |> TxDetailsCollector.getPayout(processId)
    |> Utils.mapOption(payout =>
         {
           payout,
           collidesWith:
             walletInfoCollector
             |> WalletInfoCollector.collidingProcesses(
                  AccountIndex.default,
                  processId,
                ),
         }
       );
};

let viewPayoutModal = ViewPayoutView.fromViewModelState;
module ViewIncomeView = {
  type t = TxDetailsCollector.income;
  let fromViewModelState = (txId, {txDetailsCollector}) =>
    txDetailsCollector |> TxDetailsCollector.getIncome(txId);
};

let viewIncomeModal = ViewIncomeView.fromViewModelState;

module SelectedVentureView = {
  type partner = PartnersCollector.partner;
  type prospect = PartnersCollector.partnerProcess;
  type txType = TransactionCollector.txType;
  type txStatus = TransactionCollector.txStatus;
  type txData = TransactionCollector.txData;
  type payoutStatus = TxDetailsCollector.payoutStatus;
  type payoutProcess = TxDetailsCollector.payoutProcess;
  type balance = {
    currentSpendable: BTC.t,
    reserved: BTC.t,
  };
  type t = {
    ventureId,
    ventureName: string,
    readOnly: bool,
    partners: list(partner),
    prospects: list(prospect),
    unconfirmedTxs: list(txData),
    confirmedTxs: list(txData),
    payoutsPendingApproval: list(payoutProcess),
    balance,
  };
  let fromViewModelState =
      (
        {
          ventureId,
          ventureName,
          localUser,
          partnersCollector,
          transactionCollector,
          txDetailsCollector,
          walletInfoCollector,
        },
      ) => {
    let reserved =
      walletInfoCollector
      |> WalletInfoCollector.totalReservedBTC(AccountIndex.default);
    let balance = {
      reserved,
      currentSpendable:
        walletInfoCollector
        |> WalletInfoCollector.totalUnusedBTC(AccountIndex.default)
        |> BTC.minus(reserved),
    };
    {
      ventureId,
      ventureName,
      readOnly:
        partnersCollector |> PartnersCollector.isPartner(localUser) == false,
      partners: partnersCollector.partners,
      prospects:
        partnersCollector |> PartnersCollector.prospectsPendingApproval,
      payoutsPendingApproval:
        txDetailsCollector |> TxDetailsCollector.payoutsPendingApproval,
      confirmedTxs: transactionCollector.confirmedTxs,
      unconfirmedTxs: transactionCollector.unconfirmedTxs,
      balance,
    };
  };
};

let selectedVenture = SelectedVentureView.fromViewModelState;

let make = localUser => {
  localUser,
  lastResponse: None,
  ventureName: "",
  processedItems: ItemsSet.empty,
  ventureId: VentureId.fromString(""),
  metaPolicy: Policy.unanimous,
  partnersCollector: PartnersCollector.make(localUser),
  transactionCollector: TransactionCollector.make(),
  txDetailsCollector: TxDetailsCollector.make(localUser),
  oldInputCollector: OldInputCollector.make(),
  walletInfoCollector: WalletInfoCollector.make(),
};

let apply = ({event, hash}: EventLog.item, {processedItems} as state) =>
  if (processedItems |. ItemsSet.has(hash)) {
    state;
  } else {
    let state = {
      ...state,
      partnersCollector:
        state.partnersCollector |> PartnersCollector.apply(event),
      transactionCollector:
        state.transactionCollector |> TransactionCollector.apply(event),
      txDetailsCollector:
        state.txDetailsCollector |> TxDetailsCollector.apply(event),
      walletInfoCollector:
        state.walletInfoCollector |> WalletInfoCollector.apply(event),
      oldInputCollector:
        state.oldInputCollector |> OldInputCollector.apply(event),
      processedItems: processedItems |. ItemsSet.add(hash),
    };
    switch (event) {
    | VentureCreated({ventureName, metaPolicy, ventureId}) => {
        ...state,
        ventureId,
        ventureName,
        metaPolicy,
      }
    | _ => state
    };
  };

let init = localUser =>
  EventLog.reduce((m, item) => m |> apply(item), make(localUser));

let applyAll = (events, model) =>
  events |> Array.fold_left((m, item) => m |> apply(item), model);
