// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var ViewCommon = require("../ViewCommon.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");

var component = ReasonReact.statelessComponent("Transaction");

var root = Css.style(/* :: */[
      Css.flex(1),
      /* :: */[
        Css.padding2(Css.px(0), Css.px(16)),
        /* :: */[
          Css.minWidth(Css.px(0)),
          /* :: */[
            Css.firstChild(/* :: */[
                  Css.paddingLeft(Css.px(16)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var divider = Css.style(/* :: */[
      Css.borderBottom(Css.px(1), /* solid */12956715, Colors.devider),
      /* [] */0
    ]);

function amount(inOut) {
  return Css.style(/* :: */[
              Css.color(inOut ? Colors.strongPink : Colors.misthosTeal),
              /* :: */[
                Css.$$float(/* right */-379319332),
                /* [] */0
              ]
            ]);
}

var label = Css.style(/* :: */[
      Css.$$float(/* right */-379319332),
      /* [] */0
    ]);

var Styles = /* module */[
  /* root */root,
  /* divider */divider,
  /* amount */amount,
  /* label */label
];

function make(txType, primary, amount$1, date, label, onClick, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, MaterialUi_ListItem.make(onClick !== undefined, undefined, undefined, undefined, undefined, true, undefined, true, true, undefined, undefined, undefined, undefined, onClick, /* :: */[
                              /* Divider */Block.__(6, [divider]),
                              /* [] */0
                            ], undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_ListItemText.make(undefined, undefined, undefined, Caml_option.some(ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                    ViewCommon.text($$String.uppercase(primary)),
                                                    React.createElement("span", {
                                                          className: amount(txType)
                                                        }, ViewCommon.text(BTC.format(amount$1) + " BTC"))
                                                  ]))), undefined, Caml_option.some(date !== undefined ? ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                      ViewCommon.text(Caml_option.valFromOption(date).toDateString()),
                                                      label !== undefined ? Caml_option.valFromOption(label) : null
                                                    ])) : null), undefined, /* :: */[
                                        /* Root */Block.__(0, [root]),
                                        /* [] */0
                                      ], undefined, /* array */[]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
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
