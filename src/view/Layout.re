include ViewCommon;

type action =
  | OpenDrawer
  | CloseDrawer;

type state = {drawerOpen: bool};

let component = ReasonReact.reducerComponent("Layout");

module Styles = {
  open Css;
  open BreakPoints;
  let flex_ = style([flex(1)]);
  let body = style([minHeight(px(0)), unsafe("gridArea", "body")]);
  let header = style([unsafe("gridArea", "header")]);
  let gap = (Theme.space(8) |> string_of_int) ++ "px";
  let grid =
    style([
      display(grid),
      xs([
        height(auto),
        unsafe("gridTemplateRows", {j|[begin] min-content 1fr [end]|j}),
      ]),
      sm([
        height(vh(100.0)),
        unsafe("gridTemplateRows", {j|[begin] min-content 1fr $gap [end]|j}),
      ]),
      unsafe("gridTemplateColumns", "[begin] 1fr [end]"),
      unsafe("gridTemplateAreas", {|"header" "body" "."|}),
    ]);
  let drawer =
    style([
      width(vw(80.0)),
      maxWidth(`px(440)),
      height(`percent(100.0)),
    ]);
  let drawerPaper = style([height(`percent(100.0))]);
  let modalContent =
    style([
      height(`calc((`sub, `percent(100.0), `px(64)))),
      paddingBottom(px(Theme.space(8))),
    ]);
  let modalToolbar =
    style([
      position(sticky),
      top(px(0)),
      backgroundColor(Colors.white),
      zIndex(1100),
    ]);
  let modal =
    style([
      BreakPoints.md([
        width(`vw(90.0)),
        height(`vh(90.0)),
        minHeight(auto),
        margin2(~v=`vh(5.0), ~h=`vw(5.0)),
      ]),
      width(`percent(100.0)),
      height(auto),
      minHeight(`percent(100.0)),
      position(absolute),
      focus([outlineStyle(`none)]),
    ]);
};

let make =
    (
      ~header=?,
      ~drawer: option(ReasonReact.reactElement)=?,
      ~modal=?,
      children,
    ) => {
  ...component,
  initialState: () => {drawerOpen: false},
  reducer: (action, _state) =>
    switch (action) {
    | OpenDrawer => ReasonReact.Update({drawerOpen: true})
    | CloseDrawer => ReasonReact.Update({drawerOpen: false})
    },
  render: ({send, state}) => {
    let theme = Theme.theme() |> Theme.toJsUnsafe;
    let modalContainer =
      MaterialUi.(
        modal
        |> Utils.mapOption(((modal, onClose)) => {
             let onClick =
               onClose |> Utils.mapOption(onClose => ignoreEvent(onClose));
             let onBackdropClick =
               onClose |> Utils.mapOption(onClose => ignoreEvent(onClose));
             let onEscapeKeyDown =
               onClose |> Utils.mapOption(onClose => ignoreEvent(onClose));

             /* We need to add the id #modal to the focused element for the clipboard to work */
             let inner =
               ReasonReact.cloneElement(
                 <Paper className=Styles.modal>
                   <Toolbar className=Styles.modalToolbar>
                     <div className=Styles.flex_ />
                     {
                       switch (onClick) {
                       | Some(onClick) =>
                         <IconButton color=`Inherit onClick>
                           Icons.close
                         </IconButton>

                       | None => ReasonReact.null
                       }
                     }
                   </Toolbar>
                   <div className=Styles.modalContent> modal </div>
                 </Paper>,
                 ~props={"id": "modal"},
                 [||],
               );
             <WithWidth
               breakPoint=`SM
               afterBreak=inner
               beforeBreak={
                 <Modal open_=true ?onBackdropClick ?onEscapeKeyDown>
                   inner
                 </Modal>
               }
             />;
           })
        |> Js.Option.getWithDefault(ReasonReact.null)
      );
    let (header, drawer) =
      switch (header, drawer) {
      | (None, None) => (ReasonReact.null, ReasonReact.null)
      | (Some(header), _) => (
          <div className=Styles.header> header </div>,
          ReasonReact.null,
        )
      | (None, Some(drawer)) =>
        MaterialUi.(
          <div className=Styles.header>
            <Header
              onClickLogo={Router.clickToRoute(Home)}
              onClickMenu=(_e => send(OpenDrawer))
            />
          </div>,
          <Drawer
            theme
            classes=[Paper(Styles.drawerPaper)]
            variant=`Temporary
            anchor=`Right
            onClose=(_ => send(CloseDrawer))
            open_={state.drawerOpen}>
            <div
              className=Styles.drawer
              tabIndex=0
              role="button"
              onClick=(_event => send(CloseDrawer))>
              drawer
            </div>
          </Drawer>,
        )
      };
    <WithWidth
      breakPoint=`SM
      beforeBreak={
        <div className=Styles.grid>
          header
          drawer
          modalContainer
          <div className=Styles.body> ...children </div>
        </div>
      }
      afterBreak={
        switch (modal) {
        | None =>
          <div className=Styles.grid>
            header
            drawer
            <div className=Styles.body> ...children </div>
          </div>
        | Some(_) => modalContainer
        }
      }
    />;
  },
};
