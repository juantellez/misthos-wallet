include ViewCommon;

open PrimitiveTypes;

let component = ReasonReact.statelessComponent("Partner");

module Styles = {
  open Css;
  let lenght = Theme.space(6);
  let avatar =
    style([
      backgroundImage(url(Icons.avatar |> Icons.asDataUrl)),
      backgroundSize(`size((px(lenght), px(lenght)))),
      width(px(lenght)),
      height(px(lenght)),
      fontSize(px(24)),
      lineHeight(`abs(1.0)),
      fontWeight(`num(600)),
    ]);
  let primary = ex =>
    style([
      fontFamily(Theme.oswald),
      fontSize(px(16)),
      fontWeight(`num(600)),
      unsafe("letterSpacing", "0.7px"),
      textTransform(uppercase),
      whiteSpace(nowrap),
      overflow(hidden),
      textOverflow(ellipsis),
      color(ex ? Colors.grayedOut : `currentColor),
    ]);
  let secondary = ex =>
    style([
      fontFamily(Theme.sourceSansPro),
      fontSize(px(16)),
      fontWeight(`num(300)),
      unsafe("letterSpacing", "0.5px"),
      color(ex ? Colors.grayedOut : Colors.black),
    ]);
  let secondaryAction = status =>
    switch (status) {
    | Some(_) => style([paddingRight(px(Theme.space(12)))])
    | None => style([paddingRight(px(Theme.space(4)))])
    };
  let exPartnerStatus = style([fontSize(px(12)), color(Colors.black)]);
  let exPartnerPrimary = style([]);
};

let make =
    (
      ~partnerId: userId,
      ~name=?,
      ~button=?,
      ~status=?,
      ~onClick=?,
      ~ex=false,
      _children,
    ) => {
  ...component,
  render: _self => {
    let userId = partnerId |> UserId.toString;
    let (primary, secondary) =
      switch (name) {
      | Some(name) => (name |> text, Some(userId |> text))
      | None => (userId |> text, None)
      };
    MaterialUi.(
      <ListItem
        dense=true
        classes=[SecondaryAction(Styles.secondaryAction(status))]
        disableGutters=true
        button={onClick != None}
        ?onClick>
        <Avatar className=Styles.avatar>
          {userId.[0] |> String.make(1) |> String.uppercase |> text}
        </Avatar>
        <ListItemText
          classes=[
            Primary(Styles.primary(ex)),
            Secondary(Styles.secondary(ex)),
          ]
          primary
          ?secondary
        />
        {
          switch (button, status, ex) {
          | (None, None, false) => ReasonReact.null
          | (None, Some(action), _) =>
            <ListItemSecondaryAction> action </ListItemSecondaryAction>
          | (_, _, true) =>
            <MTypography variant=`Body2 className=Styles.exPartnerStatus>
              {"EX-PARTNER" |> text}
            </MTypography>
          | (Some(action), _, _) =>
            <ListItemSecondaryAction> action </ListItemSecondaryAction>
          }
        }
      </ListItem>
    );
  },
};
