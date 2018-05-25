// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Body2 = require("./components/Body2.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var MInput = require("./components/MInput.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var MButton = require("./components/MButton.bs.js");
var Partner = require("./components/Partner.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Step = require("@jsiebern/bs-material-ui/src/MaterialUi_Step.bs.js");
var MaterialUi_Stepper = require("@jsiebern/bs-material-ui/src/MaterialUi_Stepper.bs.js");
var MaterialUi_StepLabel = require("@jsiebern/bs-material-ui/src/MaterialUi_StepLabel.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");
var MaterialUi_StepContent = require("@jsiebern/bs-material-ui/src/MaterialUi_StepContent.bs.js");
var RemovePartnerSvg = require("../assets/img/remove-partner.svg");

var component = ReasonReact.reducerComponent("ManagePartners");

var lenght = Css.px(Theme.space(3));

var Styles = /* module */[/* lenght */lenght];

function make(viewData, commands, cmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* viewData */viewData,
                      /* activeStep */state[/* activeStep */1],
                      /* inputs */state[/* inputs */2]
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var match = param[/* state */1];
              var viewData = match[/* viewData */0];
              var partners = $$Array.of_list(Belt_List.keepMapU(viewData[/* partners */0], (function (partner) {
                          var match = partner[/* canProposeRemoval */2];
                          if (match) {
                            return /* Some */[ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](partner[/* userId */0])], /* None */0, Partner.make(partner[/* userId */0], partner[/* name */1], /* Some */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function () {
                                                            return Curry._1(send, /* RemovePartner */Block.__(1, [partner[/* userId */0]]));
                                                          })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("img", {
                                                              alt: "Remove",
                                                              src: RemovePartnerSvg
                                                            })]))], /* array */[]))];
                          } else {
                            return /* None */0;
                          }
                        })));
              var icon = function (index) {
                return React.createElement("svg", {
                            height: "44",
                            width: "44",
                            viewBox: "0 0 44 44"
                          }, React.createElement("defs", undefined, React.createElement("linearGradient", {
                                    id: "a",
                                    x1: "162.467%",
                                    x2: "-41.102%",
                                    y1: "29.557%",
                                    y2: "66.287%"
                                  }, React.createElement("stop", {
                                        offset: "0%",
                                        stopColor: "#05CFDB"
                                      }), React.createElement("stop", {
                                        offset: "100%",
                                        stopColor: "#02A2B4"
                                      }))), React.createElement("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                transform: "translate(1 1)"
                              }, React.createElement("circle", {
                                    cx: "21",
                                    cy: "21",
                                    r: "21",
                                    stroke: "#000"
                                  }), React.createElement("circle", {
                                    cx: "21",
                                    cy: "21",
                                    fill: "url(#a)",
                                    r: "18"
                                  })), React.createElement("text", {
                                textAnchor: "middle",
                                x: "22",
                                y: "27"
                              }, ViewCommon.text(String(index + 1 | 0))));
              };
              var onSuccess = function () {
                return Curry._1(send, /* ProposePartnerSuccess */1);
              };
              return ReasonReact.element(/* None */0, /* None */0, Body2.make(/* Some */[/* :: */[
                                "Add a partner",
                                /* :: */[
                                  "Remove a partner",
                                  /* [] */0
                                ]
                              ]], React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MaterialUi_Stepper.make(/* Some */[/* `Int */[
                                            3654863,
                                            match[/* activeStep */1]
                                          ]], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* Vertical */-1010337642], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                          ReasonReact.element(/* Some */["enter-id"], /* None */0, MaterialUi_Step.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                    ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepLabel.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[icon(0)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("ADD A BLOCKSTACK ID")])),
                                                    ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepContent.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                              ReasonReact.element(/* None */0, /* None */0, MInput.make(/* Some */["Enter a Blockstack ID"], /* Some */[/* `String */[
                                                                          -976970511,
                                                                          match[/* inputs */2][/* prospectId */0]
                                                                        ]], /* Some */[(function (e) {
                                                                            return Curry._1(send, /* ChangeNewPartnerId */Block.__(0, [ViewCommon.extractString(e)]));
                                                                          })], /* Some */[false], /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[])),
                                                              ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                                            return Curry._1(send, /* ProposePartner */0);
                                                                          })], /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("Propose partner addition")])),
                                                              ReasonReact.element(/* None */0, /* None */0, CommandExecutor.Status[/* make */1](cmdStatus, /* Proposal */3, /* None */0, /* Some */[onSuccess], /* None */0, /* array */[]))
                                                            ]))
                                                  ])),
                                          ReasonReact.element(/* None */0, /* None */0, MaterialUi_Step.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                    ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepLabel.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[icon(1)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("SHARE THE VENTURE URL")])),
                                                    ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepContent.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                              ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n               Please send the following URL to the proposed Partner so they can access the Venture:\n               ")])),
                                                              ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text(viewData[/* joinVentureUrl */1])]))
                                                            ]))
                                                  ]))
                                        ]))), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n               To propose the removal of a partner from this venture,\n               select his or her name below and submit your proposal.\n               When enough partners endorse this proposal, the partner will be removed.\n               ")])), ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[partners]))), /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewData */viewData,
                      /* activeStep */0,
                      /* inputs : record */[/* prospectId */""]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                if (action === 0) {
                  var prospectId = $$String.trim(state[/* inputs */2][/* prospectId */0]);
                  if (prospectId === "") {
                    return /* NoUpdate */0;
                  } else {
                    Curry._1(commands[/* proposePartner */0], PrimitiveTypes.UserId[/* fromString */1](prospectId));
                    return /* NoUpdate */0;
                  }
                } else {
                  return /* Update */Block.__(0, [/* record */[
                              /* viewData */state[/* viewData */0],
                              /* activeStep */1,
                              /* inputs : record */[/* prospectId */""]
                            ]]);
                }
              } else if (action.tag) {
                Curry._1(commands[/* proposePartnerRemoval */3], action[0]);
                return /* NoUpdate */0;
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* viewData */state[/* viewData */0],
                            /* activeStep */state[/* activeStep */1],
                            /* inputs : record */[/* prospectId */action[0]]
                          ]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
