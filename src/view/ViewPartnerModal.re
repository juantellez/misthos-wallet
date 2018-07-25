include ViewCommon;

open PrimitiveTypes;

module ViewData = ViewModel.ViewPartnerView;
module Text = ViewPartnerModalText;

type state = {
  viewData: ViewData.t,
  loggedInStatus: option(bool),
};

type action =
  | SetHasLoggedIn(bool);

type onboardingState =
  | SignInRequired
  | PendingApproval
  | SyncRequired
  | FullyOnboarded
  | None;

let component = ReasonReact.reducerComponent("ViewPartner");

module Styles = {
  open Css;
  let sendIcon = style([marginLeft(px(4)), width(px(Theme.space(2)))]);
  let sendButton = style([unsafe("alignSelf", "flex-end")]);
};

let updateLoggedInStatus = (partnerProcess: ViewData.partnerProcess, send) =>
  Js.Promise.(
    partnerProcess.data.hasLoggedIn
    |> then_(known => send(SetHasLoggedIn(known)) |> resolve)
  )
  |> ignore;

let make =
    (
      ~viewData: ViewData.t,
      ~commands: CommandExecutor.commands,
      ~cmdStatus: CommandExecutor.cmdStatus,
      _children,
    ) => {
  ...component,
  initialState: () => {viewData, loggedInStatus: None},
  willReceiveProps: ({state, send}) => {
    updateLoggedInStatus(viewData.partnerProcess, send);
    {viewData, loggedInStatus: state.loggedInStatus};
  },
  reducer: (action, state) =>
    switch (action) {
    | SetHasLoggedIn(known) =>
      ReasonReact.Update({...state, loggedInStatus: Some(known)})
    },
  didMount: ({send}) => updateLoggedInStatus(viewData.partnerProcess, send),
  render: ({state: {viewData, loggedInStatus}}) => {
    let {
      proposedBy,
      processId,
      voters,
      canVote,
      status,
      data: {userId, processType},
    }: ViewData.partnerProcess =
      viewData.partnerProcess;
    let (onEndorse, onReject) =
      switch (processType) {
      | Addition => (
          (() => commands.endorsePartner(~processId)),
          (() => commands.rejectPartner(~processId)),
        )
      | Removal => (
          (() => commands.endorsePartnerRemoval(~processId)),
          (() => commands.rejectPartnerRemoval(~processId)),
        )
      };
    let onboardingState =
      switch (processType) {
      | Addition =>
        switch (
          status,
          viewData.partnerProcess.data.joinedWallet,
          loggedInStatus,
        ) {
        | (Accepted, true, _) => FullyOnboarded
        | (PendingApproval | Accepted, false, Some(false)) => SignInRequired
        | (PendingApproval, _, _) => PendingApproval
        | (Accepted, false, Some(true)) => SyncRequired
        | (Accepted, false, None) => SyncRequired
        | (Aborted | Denied, _, _) => None
        }
      | Removal => None
      };
    let onboardingStatusChip =
      switch (onboardingState) {
      | SignInRequired =>
        <StatusChip status=Pending label="SIGN IN REQUIRED" />
      | PendingApproval =>
        <StatusChip status=Pending label="PENDING APPROVAL" />
      | SyncRequired => <StatusChip status=Pending label="SYNC REQUIRED" />
      | FullyOnboarded => <StatusChip status=Success label="ONBOARDED" />
      | None => ReasonReact.null
      };

    let sendIcon = <span className=Styles.sendIcon> Icons.send </span>;
    let onboardingBody =
      switch (onboardingState) {
      | SignInRequired =>
        <AlertBox>
          <MTypography variant=`Body1>
            (
              (userId |> UserId.toString)
              ++ Text.AlertBox.signInRequired
              |> text
            )
          </MTypography>
          <MButton
            className=Styles.sendButton
            gutterTop=false
            variant=Flat
            href=(
              Text.Email.signInRequired(
                ~userId,
                ~venture=viewData.ventureName,
                ~appDomain=viewData.appDomain,
              )
            )>
            ("SEND A SIGN IN REMINDER" |> text)
            sendIcon
          </MButton>
        </AlertBox>
      | PendingApproval =>
        <MTypography variant=`Body1>
          (
            (viewData.partnerProcess.data.userId |> UserId.toString)
            ++ Text.AlertBox.pendingApproval
            |> text
          )
        </MTypography>
      | SyncRequired =>
        <AlertBox>
          <MTypography variant=`Body1>
            (
              (viewData.partnerProcess.data.userId |> UserId.toString)
              ++ Text.AlertBox.syncRequired
              |> text
            )
          </MTypography>
          <MButton
            className=Styles.sendButton
            gutterTop=false
            variant=Flat
            href=(
              Text.Email.syncRequired(
                ~userId,
                ~venture=viewData.ventureName,
                ~joinUrl=viewData.joinVentureUrl,
              )
            )>
            ("SHARE THE SYNC URL" |> text)
            sendIcon
          </MButton>
        </AlertBox>
      | FullyOnboarded =>
        <MTypography variant=`Body1>
          (
            (viewData.partnerProcess.data.userId |> UserId.toString)
            ++ Text.AlertBox.fullyOnboarded
            |> text
          )
        </MTypography>
      | None => ReasonReact.null
      };
    let onboarding =
      switch (onboardingState) {
      | None => ReasonReact.null
      | _ =>
        [|
          <MTypography gutterTop=true gutterBottom=true variant=`Title>
            ("Partner Onboarding" |> text)
          </MTypography>,
          <MTypography gutterBottom=true variant=`Body2>
            ("Status: " |> text)
            onboardingStatusChip
          </MTypography>,
          onboardingBody,
        |]
        |> ReasonReact.array
      };
    let processTypeString =
      switch (processType) {
      | Addition => "Addition"
      | Removal => "Removal"
      };
    let statusChip = {
      let (label, status: StatusChip.status) =
        switch (status) {
        | PendingApproval => ("Pending Approval", Pending)
        | Accepted => ("Accepted", Success)
        | Aborted => ("Aborted", Failure)
        | Denied => ("Denied", Failure)
        };
      <StatusChip status label />;
    };
    let alertText =
      viewData.atRiskWarning ? WarningsText.partnerRemovalRisk |. Some : None;
    <Grid
      title1=("Proposed Partner " ++ processTypeString |> text)
      area3={
        <div>
          <MTypography variant=`Title>
            ("Proposed Partner " ++ processTypeString |> text)
          </MTypography>
          <Partner key=(userId |> UserId.toString) partnerId=userId />
          <MTypography variant=`Body2 gutterBottom=true>
            ("Proposed by " ++ UserId.toString(proposedBy) |> text)
          </MTypography>
          <MTypography variant=`Body2>
            ("Status: " |> text)
            statusChip
          </MTypography>
          onboarding
        </div>
      }
      area4={
        <div>
          <Voters voters />
          <ProcessApprovalButtons
            endorseText=("Endorse Partner " ++ processTypeString)
            rejectText=("Reject Partner " ++ processTypeString)
            ?alertText
            canVote
            onEndorse
            onReject
            onCancel=(() => commands.reset())
            cmdStatus
          />
        </div>
      }
    />;
  },
};
