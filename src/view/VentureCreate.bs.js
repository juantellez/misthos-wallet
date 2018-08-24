// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var MInput = require("./components/MInput.bs.js");
var Policy = require("../application/Policy.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var VentureInfoBox = require("./components/VentureInfoBox.bs.js");
var AccountSettings = require("../application/wallet/AccountSettings.bs.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var MaterialUi_Input = require("@jsiebern/bs-material-ui/src/MaterialUi_Input.bs.js");
var MaterialUi_Table = require("@jsiebern/bs-material-ui/src/MaterialUi_Table.bs.js");
var ContactUsShoutOut = require("./components/ContactUsShoutOut.bs.js");
var MaterialUi_Select = require("@jsiebern/bs-material-ui/src/MaterialUi_Select.bs.js");
var MaterialUi_Switch = require("@jsiebern/bs-material-ui/src/MaterialUi_Switch.bs.js");
var SingleActionButton = require("./components/SingleActionButton.bs.js");
var MaterialUi_MenuItem = require("@jsiebern/bs-material-ui/src/MaterialUi_MenuItem.bs.js");
var MaterialUi_TableRow = require("@jsiebern/bs-material-ui/src/MaterialUi_TableRow.bs.js");
var MaterialUi_TableBody = require("@jsiebern/bs-material-ui/src/MaterialUi_TableBody.bs.js");
var MaterialUi_TableCell = require("@jsiebern/bs-material-ui/src/MaterialUi_TableCell.bs.js");
var MaterialUi_TableHead = require("@jsiebern/bs-material-ui/src/MaterialUi_TableHead.bs.js");
var MaterialUi_InputLabel = require("@jsiebern/bs-material-ui/src/MaterialUi_InputLabel.bs.js");
var MaterialUi_FormControl = require("@jsiebern/bs-material-ui/src/MaterialUi_FormControl.bs.js");
var MaterialUi_ExpansionPanel = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanel.bs.js");
var MaterialUi_FormHelperText = require("@jsiebern/bs-material-ui/src/MaterialUi_FormHelperText.bs.js");
var MaterialUi_InputAdornment = require("@jsiebern/bs-material-ui/src/MaterialUi_InputAdornment.bs.js");
var MaterialUi_FormControlLabel = require("@jsiebern/bs-material-ui/src/MaterialUi_FormControlLabel.bs.js");
var MaterialUi_ExpansionPanelDetails = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanelDetails.bs.js");
var MaterialUi_ExpansionPanelSummary = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanelSummary.bs.js");

var component = ReasonReact.reducerComponent("VentureCreate");

var expansionPanelSummary = Css.style(/* :: */[
      Css.paddingLeft(Css.px(0)),
      /* :: */[
        Css.position(Css.sticky),
        /* :: */[
          Css.top(Css.px(0)),
          /* :: */[
            Css.backgroundColor(Colors.white),
            /* :: */[
              Css.zIndex(100),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var expansionPanelDetails = Css.style(/* :: */[
      Css.flexDirection(Css.column),
      /* :: */[
        Css.paddingLeft(Css.px(0)),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* expansionPanelSummary */expansionPanelSummary,
  /* expansionPanelDetails */expansionPanelDetails
];

function make(onCreateVenture, cmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* newVenture */state[/* newVenture */0],
                      /* cmdStatus */cmdStatus,
                      /* accountSettings */state[/* accountSettings */2]
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var onSubmit = function (param) {
                return ViewCommon.ignoreEvent((function () {
                              return Curry._1(send, /* CreateVenture */0);
                            }), param);
              };
              var onClick = function () {
                return Curry._1(send, /* CreateVenture */0);
              };
              var stringOfMultiSig = function (nCoSigners, requiredSigners) {
                return ViewCommon.text(String(requiredSigners) + ("-of-" + String(nCoSigners)));
              };
              var getMenuItems = function (nCoSigners) {
                return Belt_Array.mapU(Belt_Array.range(1, nCoSigners), (function (idx) {
                              return ReasonReact.element(undefined, undefined, MaterialUi_MenuItem.make(undefined, undefined, undefined, undefined, /* `Int */[
                                              3654863,
                                              idx
                                            ], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[stringOfMultiSig(nCoSigners, idx)]));
                            }));
              };
              var nSigs = Belt_Array.slice(Belt_Array.mapWithIndexU(state[/* accountSettings */2][/* coSignerList */0], (function (idx, nCoSigners) {
                          return ReasonReact.element(undefined, undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(String(idx))]))])),
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_Select.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function (e, _) {
                                                                return Curry._1(send, /* ChangeNumberOfCoSinger */Block.__(1, [/* tuple */[
                                                                                idx,
                                                                                ViewCommon.extractString(e)
                                                                              ]]));
                                                              }), undefined, undefined, undefined, undefined, undefined, /* `Int */[
                                                              3654863,
                                                              nCoSigners
                                                            ], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[getMenuItems(idx)]))]))
                                        ]));
                        })), 2, 9);
              var degradingMultiSig = state[/* accountSettings */2][/* sequence */1] !== undefined;
              var sequence = state[/* accountSettings */2][/* sequence */1];
              var value = sequence !== undefined ? /* `Int */[
                  3654863,
                  sequence
                ] : /* `String */[
                  -976970511,
                  ""
                ];
              return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("Create a Venture")), undefined, undefined, undefined, Js_primitive.some(React.createElement("form", {
                                      className: ScrollList.containerStyles,
                                      onSubmit: onSubmit
                                    }, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("\n                 Set up a new Venture with yourself as the initial Partner.\n                 You can add and remove Partners once the Venture is created.\n                 But first, let’s start with a name.\n                ")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, true, undefined, undefined, /* array */[ViewCommon.text("Venture Name")])), ReasonReact.element(undefined, undefined, MInput.make("Enter a Venture Name", /* `String */[
                                              -976970511,
                                              state[/* newVenture */0]
                                            ], (function (e) {
                                                return Curry._1(send, /* ChangeNewVenture */Block.__(0, [ViewCommon.extractString(e)]));
                                              }), true, true, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[])), React.createElement("br", undefined), ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[ReasonReact.element(undefined, undefined, MaterialUi_ExpansionPanel.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                        ReasonReact.element(undefined, undefined, MaterialUi_ExpansionPanelSummary.make(expansionPanelSummary, undefined, undefined, Js_primitive.some(Icons.chevronDown), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Additional Settings")]))])),
                                                        ReasonReact.element(undefined, undefined, MaterialUi_ExpansionPanelDetails.make(expansionPanelDetails, undefined, undefined, /* array */[
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, true, undefined, undefined, undefined, /* array */[ViewCommon.text("Wallet Settings")])),
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, true, undefined, undefined, undefined, /* array */[ViewCommon.text("You may adjust the wallet settings for your Venture\n                       here. Once the Venture is created, these settings may not\n                       be changed, so please choose wisely.")])),
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Subheading */148169314, undefined, true, true, undefined, undefined, /* array */[ViewCommon.text("Degrading Multisig")])),
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, true, true, undefined, undefined, /* array */[ViewCommon.text("The degrading multisig feature adds a time-release\n                           to funds that have been locked due to custodian\n                           changes.")])),
                                                                  ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, /* Baseline */-354838363, undefined, undefined, true, /* Row */4102650, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* V8 */7, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_FormControlLabel.make(undefined, undefined, Js_primitive.some(ReasonReact.element(undefined, undefined, MaterialUi_Switch.make(/* `Bool */[
                                                                                                            737456202,
                                                                                                            degradingMultiSig
                                                                                                          ], undefined, undefined, /* Primary */-791844958, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function (_, _$1) {
                                                                                                              return Curry._1(send, /* ToggleSequence */1);
                                                                                                            }), undefined, undefined, undefined, undefined, /* array */[]))), undefined, undefined, Js_primitive.some(ViewCommon.text("Degrading Multisig")), undefined, undefined, undefined, undefined, undefined, /* array */[]))])),
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* V4 */3, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_FormControl.make(undefined, undefined, !degradingMultiSig, undefined, true, undefined, undefined, undefined, undefined, /* array */[
                                                                                                ReasonReact.element(undefined, undefined, MaterialUi_InputLabel.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Unlock after"])),
                                                                                                ReasonReact.element(undefined, undefined, MaterialUi_Input.make(undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(ReasonReact.element(undefined, undefined, MaterialUi_InputAdornment.make(undefined, undefined, undefined, /* End */3455931, undefined, undefined, /* array */[ViewCommon.text("blocks")]))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function (e) {
                                                                                                            return Curry._1(send, /* ChangeSequence */Block.__(2, [Caml_format.caml_int_of_string(ViewCommon.extractString(e))]));
                                                                                                          }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, /* array */[])),
                                                                                                ReasonReact.element(undefined, undefined, MaterialUi_FormHelperText.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(sequence !== undefined ? "Approx. " + (String(sequence / 144 | 0) + " Days") : "Disabled")]))
                                                                                              ]))]))
                                                                          ])),
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Subheading */148169314, undefined, true, true, undefined, undefined, /* array */[ViewCommon.text("Required Signatures")])),
                                                                  ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, true, true, undefined, undefined, /* array */[ViewCommon.text("Select the number of signatures your Venture will\n                       require for transactions, depending on the number of\n                       Partners:")])),
                                                                  ReasonReact.element(undefined, undefined, MaterialUi_Table.make(undefined, undefined, undefined, undefined, /* array */[
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_TableHead.make(undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                                                ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("NUMBER OF PARTNERS")]))])),
                                                                                                ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("REQUIRED SIGNATURES")]))]))
                                                                                              ]))])),
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_TableBody.make(undefined, undefined, /* array */[nSigs]))
                                                                          ]))
                                                                ]))
                                                      ]))])), ReasonReact.element(undefined, undefined, SingleActionButton.make("create venture", undefined, onClick, undefined, undefined, true, false, /* CreateVenture */0, cmdStatus, /* array */[])), ReasonReact.element(undefined, undefined, ContactUsShoutOut.make(/* array */[])))), Js_primitive.some(ReasonReact.element(undefined, undefined, VentureInfoBox.make(/* array */[]))), undefined, undefined, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* newVenture */"",
                      /* cmdStatus */cmdStatus,
                      /* accountSettings */AccountSettings.$$default
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* cmdStatus */1];
              var exit = 0;
              if (typeof match === "number" || match.tag !== 2) {
                exit = 1;
              } else {
                return /* NoUpdate */0;
              }
              if (exit === 1) {
                if (typeof action === "number") {
                  if (action === 0) {
                    var name = $$String.trim(state[/* newVenture */0]);
                    if (name === "") {
                      return /* NoUpdate */0;
                    } else {
                      Curry._3(onCreateVenture, name, state[/* accountSettings */2], /* record */[
                            /* addPartner */Policy.defaultInitialPolicies[/* addPartner */0],
                            /* addCustodian */Policy.defaultInitialPolicies[/* addCustodian */1],
                            /* removePartner */Policy.defaultInitialPolicies[/* removePartner */2],
                            /* removeCustodian */Policy.defaultInitialPolicies[/* removeCustodian */3],
                            /* payout : UnanimousMinusOne */1
                          ]);
                      return /* NoUpdate */0;
                    }
                  } else {
                    var init = state[/* accountSettings */2];
                    var match$1 = state[/* accountSettings */2][/* sequence */1] === undefined;
                    return /* Update */Block.__(0, [/* record */[
                                /* newVenture */state[/* newVenture */0],
                                /* cmdStatus */state[/* cmdStatus */1],
                                /* accountSettings : record */[
                                  /* coSignerList */init[/* coSignerList */0],
                                  /* sequence */match$1 ? AccountSettings.defaultSequence : undefined
                                ]
                              ]]);
                  }
                } else {
                  switch (action.tag | 0) {
                    case 0 : 
                        return /* Update */Block.__(0, [/* record */[
                                    /* newVenture */action[0],
                                    /* cmdStatus */state[/* cmdStatus */1],
                                    /* accountSettings */state[/* accountSettings */2]
                                  ]]);
                    case 1 : 
                        var match$2 = action[0];
                        var nCoSigners = match$2[1];
                        var idx = match$2[0];
                        var init$1 = state[/* accountSettings */2];
                        return /* Update */Block.__(0, [/* record */[
                                    /* newVenture */state[/* newVenture */0],
                                    /* cmdStatus */state[/* cmdStatus */1],
                                    /* accountSettings : record */[
                                      /* coSignerList */Belt_Array.mapWithIndex(state[/* accountSettings */2][/* coSignerList */0], (function (i, x) {
                                              var match = idx === i;
                                              if (match) {
                                                return nCoSigners;
                                              } else {
                                                return x;
                                              }
                                            })),
                                      /* sequence */init$1[/* sequence */1]
                                    ]
                                  ]]);
                    case 2 : 
                        var sequence = action[0];
                        var init$2 = state[/* accountSettings */2];
                        var match$3 = sequence > 65500;
                        return /* Update */Block.__(0, [/* record */[
                                    /* newVenture */state[/* newVenture */0],
                                    /* cmdStatus */state[/* cmdStatus */1],
                                    /* accountSettings : record */[
                                      /* coSignerList */init$2[/* coSignerList */0],
                                      /* sequence */match$3 ? 65500 : sequence
                                    ]
                                  ]]);
                    
                  }
                }
              }
              
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
