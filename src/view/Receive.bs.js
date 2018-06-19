// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var Spinner = require("./components/Spinner.bs.js");
var Clipboard = require("../ffi/Clipboard.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Environment = require("../web/Environment.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var WarningsText = require("./text/WarningsText.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");

var component = ReasonReact.reducerComponent("Receive");

var alignCenter = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.alignItems(/* center */98248149),
          /* [] */0
        ]
      ]
    ]);

var spinner = Css.style(/* :: */[
      Css.height(Css.px(298)),
      /* :: */[
        Css.display(/* flex */-1010954439),
        /* :: */[
          Css.flexDirection(/* column */-963948842),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.justifyContent(/* spaceAround */-485895757),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* alignCenter */alignCenter,
  /* spinner */spinner
];

function make(commands, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (param) {
              return Curry._1(param[/* send */3], /* GetIncomeAddress */0);
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var match = Environment.get(/* () */0)[/* network */5];
              var warning = match !== 1 ? /* None */0 : /* Some */[WarningsText.testnet];
              var copyButton = Js_option.getWithDefault(null, Utils.mapOption((function (address) {
                          return React.cloneElement(ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* Some */["copy-btn"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Icons.copy])), {
                                      "data-clipboard-text": address
                                    });
                        }), state[/* address */0]));
              var match$1 = state[/* address */0];
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Receive BTC")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles + (" " + alignCenter)
                                  }, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[React.createElement("div", {
                                                  className: alignCenter
                                                }, match$1 ? React.createElement("img", {
                                                        height: "250px",
                                                        src: "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + match$1[0]
                                                      }) : ReasonReact.element(/* None */0, /* None */0, Spinner.make("Generating new address", /* Some */[spinner], /* array */[])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                          ViewCommon.text(Js_option.getWithDefault("", state[/* address */0])),
                                                          copyButton
                                                        ])), ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                              return Curry._1(send, /* GetIncomeAddress */0);
                                                            })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Generate new income address")])))])))], /* None */0, warning, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[/* address : None */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* address : Some */[action[0]]]]);
              } else {
                return /* UpdateWithSideEffects */Block.__(2, [
                          /* record */[/* address : None */0],
                          (function (param) {
                              var send = param[/* send */3];
                              Curry._1(commands[/* exposeIncomeAddress */9], WalletTypes.AccountIndex[/* default */9]).then((function (address) {
                                      return Promise.resolve(Curry._1(send, /* UpdateAddress */[address]));
                                    }));
                              return /* () */0;
                            })
                        ]);
              }
            }),
          /* subscriptions */(function () {
              return /* :: */[
                      /* Sub */[
                        (function () {
                            return Clipboard.make(".copy-btn", "modal");
                          }),
                        (function (clipboard) {
                            clipboard.destroy();
                            return /* () */0;
                          })
                      ],
                      /* [] */0
                    ];
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
