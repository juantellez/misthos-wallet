open Event;

open PrimitiveTypes;

open WalletTypes;

let defaultAccountName = "default";

type state =
  | ProposePartner
  | PartnerProposed(processId)
  | ProposeAccountCreation
  | AccountCreationProposed(processId)
  | ProposeCustodian
  | CustodianProposed(processId)
  | Complete;

let make =
    (
      {userId, issuerKeyPair}: Session.Data.t,
      {creatorId, creatorPubKey, metaPolicy}: VentureCreated.t,
      log,
    ) => {
  let process = {
    val state =
      ref(UserId.eq(userId, creatorId) ? ProposePartner : Complete);
    val result = ref(None);
    pub receive = ({event}: EventLog.item) => {
      state :=
        (
          switch (state^, event) {
          | (ProposePartner, PartnerProposed(event))
              when UserId.eq(event.data.id, creatorId) =>
            PartnerProposed(event.processId)
          | (PartnerProposed(processId), PartnerAccepted(event))
              when ProcessId.eq(processId, event.processId) =>
            ProposeAccountCreation
          | (ProposeAccountCreation, AccountCreationProposed(event))
              when
                AccountIndex.eq(event.data.accountIdx, AccountIndex.default) =>
            AccountCreationProposed(event.processId)
          | (
              AccountCreationProposed(processId),
              AccountCreationAccepted(event),
            )
              when ProcessId.eq(processId, event.processId) =>
            ProposeCustodian
          | (ProposeCustodian, CustodianProposed(event))
              when UserId.eq(event.data.partnerId, creatorId) =>
            CustodianProposed(event.processId)
          | (CustodianProposed(processId), CustodianAccepted(event))
              when ProcessId.eq(processId, event.processId) =>
            Complete
          | _ => state^
          }
        );
      result :=
        (
          switch (state^) {
          | ProposePartner =>
            Some((
              issuerKeyPair,
              Event.makePartnerProposed(
                ~supporterId=creatorId,
                ~prospectId=creatorId,
                ~prospectPubKey=creatorPubKey,
                ~policy=metaPolicy,
              ),
            ))
          | ProposeAccountCreation =>
            Some((
              issuerKeyPair,
              Event.makeAccountCreationProposed(
                ~supporterId=creatorId,
                ~name=defaultAccountName,
                ~accountIdx=AccountIndex.default,
                ~policy=metaPolicy,
              ),
            ))
          | ProposeCustodian =>
            Some((
              issuerKeyPair,
              Event.makeCustodianProposed(
                ~dependsOn=None,
                ~partnerId=creatorId,
                ~supporterId=creatorId,
                ~accountIdx=AccountIndex.default,
                ~policy=metaPolicy,
              ),
            ))
          | _ => None
          }
        );
    };
    pub processCompleted = () => state^ == Complete;
    pub pendingEvent = () => result^ |> Utils.mapOption(Js.Promise.resolve)
  };
  log |> EventLog.reduce((_, item) => process#receive(item), ());
  process;
};
