open Event;

open PrimitiveTypes;

open WalletTypes;

type balance = {
  income: BTC.t,
  spent: BTC.t,
  reserved: BTC.t,
};

type t = {
  network: Network.t,
  accountKeyChains:
    list((accountIdx, list((accountKeyChainIdx, AccountKeyChain.t)))),
  balance: list((accountIdx, balance)),
  exposedCoordinates: list((accountIdx, list(Address.Coordinates.t))),
  payoutProcesses: list((ProcessId.t, (accountIdx, PayoutTransaction.t))),
};

let make = () => {
  network: Network.Testnet,
  accountKeyChains: [],
  balance: [],
  exposedCoordinates: [],
  payoutProcesses: [],
};

let getAccountIndexOfAddress =
    (address, {accountKeyChains, exposedCoordinates}) =>
  exposedCoordinates
  |> List.map(((idx, coordinates)) =>
       (
         idx,
         coordinates
         |> List.map(c => accountKeyChains |> Address.find(c))
         |> List.map((a: Address.t) => a.address),
       )
     )
  |> List.find(((_idx, addresses)) => addresses |> List.mem(address))
  |> fst;

let apply = (event: Event.t, state) =>
  switch (event) {
  | VentureCreated({network}) => {...state, network}
  | AccountCreationAccepted({data}) => {
      ...state,
      exposedCoordinates: [
        (data.accountIdx, []),
        ...state.exposedCoordinates,
      ],
      accountKeyChains: [(data.accountIdx, []), ...state.accountKeyChains],
      balance: [
        (
          data.accountIdx,
          {income: BTC.zero, spent: BTC.zero, reserved: BTC.zero},
        ),
        ...state.balance,
      ],
    }
  | AccountKeyChainUpdated(({keyChain}: AccountKeyChainUpdated.t)) => {
      ...state,
      accountKeyChains: [
        (
          keyChain.accountIdx,
          [
            (keyChain.keyChainIdx, keyChain),
            ...state.accountKeyChains |> List.assoc(keyChain.accountIdx),
          ],
        ),
        ...state.accountKeyChains |> List.remove_assoc(keyChain.accountIdx),
      ],
    }
  | IncomeAddressExposed(({coordinates}: IncomeAddressExposed.t)) =>
    let accountIdx = coordinates |> Address.Coordinates.accountIdx;
    {
      ...state,
      exposedCoordinates: [
        (
          accountIdx,
          [
            coordinates,
            ...state.exposedCoordinates |> List.assoc(accountIdx),
          ],
        ),
        ...state.exposedCoordinates |> List.remove_assoc(accountIdx),
      ],
    };
  | IncomeDetected({amount, address}) =>
    let accountIdx = state |> getAccountIndexOfAddress(address);
    let balance = state.balance |> List.assoc(accountIdx);
    {
      ...state,
      balance: [
        (
          accountIdx,
          {...balance, income: balance.income |> BTC.plus(amount)},
        ),
        ...state.balance |> List.remove_assoc(accountIdx),
      ],
    };
  | PayoutProposed({data, processId}) =>
    let balance = state.balance |> List.assoc(data.accountIdx);
    {
      ...state,
      payoutProcesses: [
        (processId, (data.accountIdx, data.payoutTx)),
        ...state.payoutProcesses,
      ],
      exposedCoordinates:
        switch (data.changeAddressCoordinates) {
        | None => state.exposedCoordinates
        | Some(coordinates) => [
            (
              data.accountIdx,
              [
                coordinates,
                ...state.exposedCoordinates |> List.assoc(data.accountIdx),
              ],
            ),
            ...state.exposedCoordinates |> List.remove_assoc(data.accountIdx),
          ]
        },
      balance: [
        (
          data.accountIdx,
          {
            ...balance,
            reserved:
              balance.reserved
              |> BTC.plus(
                   (data.payoutTx |> PayoutTransaction.summary(state.network)).
                     reserved,
                 ),
          },
        ),
        ...state.balance |> List.remove_assoc(data.accountIdx),
      ],
    };
  | PayoutBroadcast({processId}) =>
    let (accountIdx, payoutTx) =
      state.payoutProcesses |> List.assoc(processId);
    let balance = state.balance |> List.assoc(accountIdx);
    let payoutSummary = payoutTx |> PayoutTransaction.summary(state.network);
    {
      ...state,
      balance: [
        (
          accountIdx,
          {
            ...balance,
            spent: balance.spent |> BTC.plus(payoutSummary.spent),
            reserved: balance.reserved |> BTC.minus(payoutSummary.reserved),
          },
        ),
        ...state.balance |> List.remove_assoc(accountIdx),
      ],
    };
  | PayoutBroadcastFailed({processId}) =>
    let (accountIdx, payoutTx) =
      state.payoutProcesses |> List.assoc(processId);
    let balance = state.balance |> List.assoc(accountIdx);
    let payoutSummary = payoutTx |> PayoutTransaction.summary(state.network);
    {
      ...state,
      balance: [
        (
          accountIdx,
          {
            ...balance,
            reserved: balance.reserved |> BTC.minus(payoutSummary.reserved),
          },
        ),
        ...state.balance |> List.remove_assoc(accountIdx),
      ],
    };
  | _ => state
  };
