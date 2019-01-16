// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BreakPoints = require("./BreakPoints.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ContactUsShoutOut = require("./components/ContactUsShoutOut.bs.js");
var MaterialUi_SvgIcon = require("@jsiebern/bs-material-ui/src/MaterialUi_SvgIcon.bs.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");

var component = ReasonReact.statelessComponent("PublicHome");

var grid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        BreakPoints.xs(/* :: */[
              Css.height(/* auto */-1065951377),
              /* :: */[
                Css.unsafe("gridTemplateColumns", "[begin] 0px 1fr 0px [end]"),
                /* :: */[
                  Css.unsafe("gridTemplateAreas", "\n           \". . .\"\n           \". title .\"\n           \". sub .\"\n           \". button .\"\n           \". . .\"\n           "),
                  /* :: */[
                    Css.unsafe("gridTemplateRows", "[begin] auto min-content [end] min-content min-content auto"),
                    /* :: */[
                      Css.gridGap(Css.px(Theme.space(2))),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]),
        /* :: */[
          BreakPoints.sm(/* :: */[
                Css.height(/* `vh */[
                      26418,
                      90.0
                    ]),
                /* :: */[
                  Css.unsafe("gridTemplateColumns", "[begin] 1fr 6fr 1fr [end]"),
                  /* :: */[
                    Css.gridGap(Css.px(Theme.space(5))),
                    /* [] */0
                  ]
                ]
              ]),
          /* :: */[
            BreakPoints.md(/* :: */[
                  Css.height(/* `vh */[
                        26418,
                        90.0
                      ]),
                  /* :: */[
                    Css.unsafe("gridTemplateAreas", "\n           \". . . .\"\n           \". title title .\"\n           \". sub button .\"\n           \". . . .\"\n           "),
                    /* :: */[
                      Css.unsafe("gridTemplateColumns", "[begin] 1fr 7fr 5fr 1fr [end]"),
                      /* :: */[
                        Css.unsafe("gridTemplateRows", "[begin] auto min-content [end] min-content auto"),
                        /* [] */0
                      ]
                    ]
                  ]
                ]),
            /* :: */[
              Css.width(/* `percent */[
                    -119887163,
                    100.0
                  ]),
              /* :: */[
                Css.alignItems(/* flexEnd */924268066),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var logo = Css.style(/* :: */[
      Css.backgroundImage(Css.url(Icons.asDataUrl(Icons.logoBig))),
      /* :: */[
        Css.backgroundRepeat(Css.noRepeat),
        /* :: */[
          Css.alignSelf(/* stretch */-162316795),
          /* :: */[
            BreakPoints.xs(/* :: */[
                  Css.unsafe("backgroundSize", "auto 50%"),
                  /* [] */0
                ]),
            /* :: */[
              BreakPoints.sm(/* :: */[
                    Css.unsafe("backgroundSize", "auto 100%"),
                    /* [] */0
                  ]),
              /* :: */[
                Css.unsafe("gridColumn", "begin / end"),
                /* :: */[
                  Css.unsafe("gridRow", "begin / end"),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function area(area$1) {
  return Css.style(/* :: */[
              Css.unsafe("gridArea", area$1),
              /* :: */[
                Css.minHeight(Css.px(0)),
                /* [] */0
              ]
            ]);
}

var title = Css.style(/* :: */[
      Css.lineHeight(/* `abs */[
            4845682,
            0.92
          ]),
      /* :: */[
        BreakPoints.xs(/* :: */[
              Css.fontSize(Css.px(60)),
              /* [] */0
            ]),
        /* :: */[
          BreakPoints.sm(/* :: */[
                Css.fontSize(Css.px(72)),
                /* [] */0
              ]),
          /* :: */[
            BreakPoints.lg(/* :: */[
                  Css.fontSize(Css.px(124)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* grid */grid,
  /* logo */logo,
  /* area */area,
  /* title */title
];

function make(onSignIn, _children) {
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
              return React.createElement("div", undefined, React.createElement("div", {
                              className: grid
                            }, React.createElement("div", {
                                  className: logo
                                }), ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, area("title") + (" " + title), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display4 */-11760686, undefined, undefined, /* array */[
                                      ViewCommon.text("Distribute Funds"),
                                      React.createElement("br", undefined),
                                      ViewCommon.text("with Misthos.")
                                    ])), ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, area("sub"), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display1 */-11760689, undefined, undefined, /* array */[
                                      ViewCommon.text("Misthos is the most advanced multisig bitcoin wallet for businesses, emphasizing frictionless setup, low risk and streamlined collaboration."),
                                      React.createElement("br", undefined),
                                      React.createElement("br", undefined),
                                      ViewCommon.text("Use it for projects. Use it for payments.")
                                    ])), React.createElement("div", {
                                  className: area("button")
                                }, ReasonReact.element(undefined, undefined, MButton.make(/* Inherit */-72987685, onSignIn, undefined, true, undefined, undefined, false, undefined, undefined, undefined, undefined, /* array */[
                                          ReasonReact.element(undefined, undefined, MaterialUi_SvgIcon.make(Css.style(/* :: */[
                                                        Css.marginRight(Css.px(16)),
                                                        /* [] */0
                                                      ]), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[Icons.blockStack])),
                                          ViewCommon.text("Sign In with Blockstack")
                                        ])), ReasonReact.element(undefined, undefined, ContactUsShoutOut.make(false, /* array */[])))));
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
