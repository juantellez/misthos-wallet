// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var Header = require("./Header.bs.js");
var Router = require("./Router.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BreakPoints = require("./BreakPoints.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var MaterialUi_Modal = require("@jsiebern/bs-material-ui/src/MaterialUi_Modal.bs.js");
var MaterialUi_Paper = require("@jsiebern/bs-material-ui/src/MaterialUi_Paper.bs.js");
var MaterialUi_Drawer = require("@jsiebern/bs-material-ui/src/MaterialUi_Drawer.bs.js");
var MaterialUi_Toolbar = require("@jsiebern/bs-material-ui/src/MaterialUi_Toolbar.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");

var component = ReasonReact.reducerComponent("Layout");

var flex_ = Css.style(/* :: */[
      Css.flex(1),
      /* [] */0
    ]);

var body = Css.style(/* :: */[
      Css.minHeight(Css.px(0)),
      /* :: */[
        Css.unsafe("gridArea", "body"),
        /* [] */0
      ]
    ]);

var header = Css.style(/* :: */[
      Css.unsafe("gridArea", "header"),
      /* [] */0
    ]);

var gap = String(Theme.space(8)) + "px";

var grid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        BreakPoints.sm(/* :: */[
              Css.height(Css.vh(100.0)),
              /* [] */0
            ]),
        /* :: */[
          BreakPoints.xs(/* :: */[
                Css.height(Css.auto),
                /* [] */0
              ]),
          /* :: */[
            Css.unsafe("gridTemplateColumns", "[begin] 1fr [end]"),
            /* :: */[
              Css.unsafe("gridTemplateRows", "[begin] min-content 1fr " + (String(gap) + " [end]")),
              /* :: */[
                Css.unsafe("gridTemplateAreas", "\"header\" \"body\" \".\""),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var drawer = Css.style(/* :: */[
      Css.width(Css.vw(80.0)),
      /* :: */[
        Css.maxWidth(/* `px */[
              25096,
              440
            ]),
        /* :: */[
          Css.height(/* `percent */[
                -119887163,
                100.0
              ]),
          /* [] */0
        ]
      ]
    ]);

var drawerPaper = Css.style(/* :: */[
      Css.height(/* `percent */[
            -119887163,
            100.0
          ]),
      /* [] */0
    ]);

var modalContent = Css.style(/* :: */[
      Css.height(/* `calc */[
            -1044768619,
            /* tuple */[
              /* sub */5745024,
              /* `percent */[
                -119887163,
                100.0
              ],
              /* `px */[
                25096,
                64
              ]
            ]
          ]),
      /* :: */[
        Css.paddingBottom(Css.px(Theme.space(8))),
        /* [] */0
      ]
    ]);

var modal = Css.style(/* :: */[
      BreakPoints.md(/* :: */[
            Css.width(/* `vw */[
                  26433,
                  90.0
                ]),
            /* :: */[
              Css.height(/* `vh */[
                    26418,
                    90.0
                  ]),
              /* :: */[
                Css.margin2(/* `vh */[
                      26418,
                      5.0
                    ], /* `vw */[
                      26433,
                      5.0
                    ]),
                /* [] */0
              ]
            ]
          ]),
      /* :: */[
        Css.width(/* `percent */[
              -119887163,
              100.0
            ]),
        /* :: */[
          Css.height(/* `percent */[
                -119887163,
                100.0
              ]),
          /* :: */[
            Css.focus(/* :: */[
                  Css.outlineStyle(/* none */-922086728),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* flex_ */flex_,
  /* body */body,
  /* header */header,
  /* gap */gap,
  /* grid */grid,
  /* drawer */drawer,
  /* drawerPaper */drawerPaper,
  /* modalContent */modalContent,
  /* modal */modal
];

function make(header$1, drawer$1, modal$1, children) {
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
          /* render */(function (param) {
              var send = param[/* send */3];
              var theme = Theme.toJsUnsafe(Theme.theme(undefined, /* () */0));
              var modalContainer = Js_option.getWithDefault(null, Utils.mapOption((function (param) {
                          var onClose = param[1];
                          var onClick = Utils.mapOption((function (onClose) {
                                  return (function (param) {
                                      return ViewCommon.ignoreEvent(onClose, param);
                                    });
                                }), onClose);
                          var onBackdropClick = Utils.mapOption((function (onClose) {
                                  return (function (param) {
                                      return ViewCommon.ignoreEvent(onClose, param);
                                    });
                                }), onClose);
                          var onEscapeKeyDown = Utils.mapOption((function (onClose) {
                                  return (function (param) {
                                      return ViewCommon.ignoreEvent(onClose, param);
                                    });
                                }), onClose);
                          var inner = React.cloneElement(ReasonReact.element(undefined, undefined, MaterialUi_Paper.make(modal, undefined, undefined, undefined, undefined, undefined, /* array */[
                                        ReasonReact.element(undefined, undefined, MaterialUi_Toolbar.make(undefined, undefined, undefined, undefined, undefined, /* array */[
                                                  React.createElement("div", {
                                                        className: flex_
                                                      }),
                                                  onClick !== undefined ? ReasonReact.element(undefined, undefined, MaterialUi_IconButton.make(undefined, /* Inherit */-72987685, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, onClick, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[Icons.close])) : null
                                                ])),
                                        React.createElement("div", {
                                              className: modalContent
                                            }, param[0])
                                      ])), {
                                id: "modal"
                              });
                          return ReasonReact.element(undefined, undefined, MaterialUi_Modal.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, onBackdropClick, undefined, onEscapeKeyDown, undefined, true, undefined, undefined, /* array */[inner]));
                        }), modal$1));
              var match = header$1 !== undefined ? /* tuple */[
                  React.createElement("div", {
                        className: header
                      }, Js_primitive.valFromOption(header$1)),
                  null
                ] : (
                  drawer$1 !== undefined ? /* tuple */[
                      React.createElement("div", {
                            className: header
                          }, ReasonReact.element(undefined, undefined, Header.make((function (param) {
                                      return Router.clickToRoute(/* Home */0, param);
                                    }), undefined, (function (_e) {
                                      return Curry._1(send, /* OpenDrawer */0);
                                    }), /* array */[]))),
                      ReasonReact.element(undefined, undefined, MaterialUi_Drawer.make(/* Right */-57574468, undefined, undefined, undefined, (function (param) {
                                  return Curry._1(send, /* CloseDrawer */1);
                                }), param[/* state */1][/* drawerOpen */0], undefined, undefined, Js_primitive.some(theme), undefined, /* Temporary */-103274127, /* :: */[
                                /* Paper */Block.__(1, [drawerPaper]),
                                /* [] */0
                              ], undefined, /* array */[React.createElement("div", {
                                      className: drawer,
                                      role: "button",
                                      tabIndex: 0,
                                      onClick: (function (_event) {
                                          return Curry._1(send, /* CloseDrawer */1);
                                        })
                                    }, Js_primitive.valFromOption(drawer$1))]))
                    ] : /* tuple */[
                      null,
                      null
                    ]
                );
              return React.createElement("div", {
                          className: grid
                        }, match[0], match[1], modalContainer, ReactDOMRe.createElementVariadic("div", {
                              className: body
                            }, children));
            }),
          /* initialState */(function (param) {
              return /* record */[/* drawerOpen */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* drawerOpen */false]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* drawerOpen */true]]);
              }
            }),
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
