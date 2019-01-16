// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Theme = require("../Theme.bs.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("WarningBanner");

function warning(inline) {
  return Css.style(/* :: */[
              Css.fontFamily(Theme.sourceSansPro),
              /* :: */[
                Css.fontSize(Css.px(14)),
                /* :: */[
                  Css.fontWeight(/* `num */[
                        5496390,
                        700
                      ]),
                  /* :: */[
                    Css.color(Colors.white),
                    /* :: */[
                      Css.textTransform(Css.uppercase),
                      /* :: */[
                        Css.padding2(Css.px(Theme.space(1)), Css.px(inline ? Theme.space(3) : 0)),
                        /* :: */[
                          Css.marginBottom(Css.px(inline ? Theme.space(3) : 0)),
                          /* :: */[
                            Css.zIndex(10),
                            /* :: */[
                              Css.selector("> a", /* :: */[
                                    Css.color(Colors.white),
                                    /* :: */[
                                      Css.unsafe("textDecorationColor", Colors.uWhite),
                                      /* :: */[
                                        Css.hover(/* :: */[
                                              Css.color(Colors.misthosTeal),
                                              /* [] */0
                                            ]),
                                        /* [] */0
                                      ]
                                    ]
                                  ]),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var warningBg = Css.style(/* :: */[
      Css.unsafe("background", Colors.uGradientOrange),
      /* [] */0
    ]);

var Styles = /* module */[
  /* warning */warning,
  /* warningBg */warningBg
];

function make(children) {
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
              return React.createElement("div", {
                          className: warning(true) + (" " + warningBg)
                        }, children);
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
