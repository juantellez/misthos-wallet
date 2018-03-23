open Event;

open PrimitiveTypes;

type state = {
  eligable: list(userId),
  endorsements: list(userId),
  policy: Policy.t,
  systemIssuer: Bitcoin.ECPair.t,
  creatorId: userId
};

let make = (proposal: Partner.Proposal.t, log) => {
  let process = {
    val state =
      ref({
        eligable: [],
        endorsements: [proposal.supporterId],
        policy: Policy.absolute,
        systemIssuer: Bitcoin.ECPair.makeRandom(),
        creatorId: UserId.fromString("")
      });
    val completed = ref(false);
    val result = ref(None);
    pub receive = ({event}: EventLog.item) => {
      state :=
        (
          switch event {
          | VentureCreated(event) => {
              ...state^,
              policy: event.metaPolicy,
              systemIssuer: event.systemIssuer,
              creatorId: event.creatorId
            }
          | PartnerEndorsed(event)
              when ProcessId.eq(event.processId, proposal.processId) => {
              ...state^,
              endorsements: [event.supporterId, ...state^.endorsements]
            }
          | PartnerAccepted(event)
              when ProcessId.eq(event.processId, proposal.processId) =>
            completed := true;
            state^;
          | PartnerAccepted({data}) => {
              ...state^,
              eligable: [data.id, ...state^.eligable]
            }
          | _ => state^
          }
        );
      result := None;
      if (completed^ == false
          && state^.policy
          |> Policy.fulfilled(
               ~eligable=state^.eligable,
               ~endorsed=state^.endorsements
             )) {
        result :=
          Some((
            state^.systemIssuer,
            PartnerAccepted(
              Partner.Acceptance.make(
                ~processId=proposal.processId,
                ~data=proposal.data
              )
            )
          ));
      };
      if (proposal.data.id == state^.creatorId && log |> EventLog.length == 2) {
        result :=
          Some((
            state^.systemIssuer,
            PartnerAccepted(
              Partner.Acceptance.make(
                ~processId=proposal.processId,
                ~data=proposal.data
              )
            )
          ));
      };
    };
    pub processCompleted = () => completed^;
    pub pendingEvent = () => result^
  };
  log |> EventLog.reduce((_, item) => process#receive(item), ());
  process;
};
