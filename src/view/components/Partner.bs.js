// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Icons = require("../Icons.bs.js");
var Theme = require("../Theme.bs.js");
var Colors = require("../Colors.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var ViewCommon = require("../ViewCommon.bs.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PrimitiveTypes = require("../../application/PrimitiveTypes.bs.js");
var MaterialUi_Avatar = require("@jsiebern/bs-material-ui/src/MaterialUi_Avatar.bs.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");
var MaterialUi_ListItemSecondaryAction = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemSecondaryAction.bs.js");

var component = ReasonReact.statelessComponent("Partner");

var lenght = Theme.space(6);

var avatar = Css.style(/* :: */[
      Css.backgroundImage(Css.url(Icons.asDataUrl(Icons.avatar))),
      /* :: */[
        Css.backgroundSize(/* `size */[
              -866934591,
              /* tuple */[
                Css.px(lenght),
                Css.px(lenght)
              ]
            ]),
        /* :: */[
          Css.width(Css.px(lenght)),
          /* :: */[
            Css.height(Css.px(lenght)),
            /* :: */[
              Css.fontSize(Css.px(24)),
              /* :: */[
                Css.lineHeight(/* `abs */[
                      4845682,
                      1.0
                    ]),
                /* :: */[
                  Css.fontWeight(600),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function primary(ex) {
  return Css.style(/* :: */[
              Css.fontFamily(Theme.oswald),
              /* :: */[
                Css.fontSize(Css.px(16)),
                /* :: */[
                  Css.fontWeight(600),
                  /* :: */[
                    Css.unsafe("letterSpacing", "0.7px"),
                    /* :: */[
                      Css.textTransform(Css.uppercase),
                      /* :: */[
                        Css.whiteSpace(Css.nowrap),
                        /* :: */[
                          Css.overflow(Css.hidden),
                          /* :: */[
                            Css.textOverflow(Css.ellipsis),
                            /* :: */[
                              Css.color(ex ? Colors.grayedOut : /* currentColor */292050538),
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

function secondary(ex) {
  return Css.style(/* :: */[
              Css.fontFamily(Theme.sourceSansPro),
              /* :: */[
                Css.fontSize(Css.px(16)),
                /* :: */[
                  Css.fontWeight(300),
                  /* :: */[
                    Css.unsafe("letterSpacing", "0.5px"),
                    /* :: */[
                      Css.color(ex ? Colors.grayedOut : Colors.black),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function secondaryAction(status) {
  if (status !== undefined) {
    return Css.style(/* :: */[
                Css.paddingRight(Css.px(Theme.space(12))),
                /* [] */0
              ]);
  } else {
    return Css.style(/* :: */[
                Css.paddingRight(Css.px(Theme.space(4))),
                /* [] */0
              ]);
  }
}

var exPartnerStatus = Css.style(/* :: */[
      Css.fontSize(Css.px(12)),
      /* :: */[
        Css.color(Colors.black),
        /* [] */0
      ]
    ]);

var exPartnerPrimary = Css.style(/* [] */0);

var Styles = /* module */[
  /* lenght */lenght,
  /* avatar */avatar,
  /* primary */primary,
  /* secondary */secondary,
  /* secondaryAction */secondaryAction,
  /* exPartnerStatus */exPartnerStatus,
  /* exPartnerPrimary */exPartnerPrimary
];

function make(partnerId, name, button, status, onClick, $staropt$star, _) {
  var ex = $staropt$star !== undefined ? $staropt$star : false;
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
          /* render */(function () {
              var userId = PrimitiveTypes.UserId[/* toString */0](partnerId);
              var match = name !== undefined ? /* tuple */[
                  ViewCommon.text(name),
                  Js_primitive.some(ViewCommon.text(userId))
                ] : /* tuple */[
                  ViewCommon.text(userId),
                  undefined
                ];
              var tmp;
              var exit = 0;
              if (button !== undefined) {
                exit = 1;
              } else if (status !== undefined) {
                tmp = ReasonReact.element(undefined, undefined, MaterialUi_ListItemSecondaryAction.make(undefined, undefined, undefined, /* array */[Js_primitive.valFromOption(status)]));
              } else if (ex) {
                exit = 1;
              } else {
                tmp = null;
              }
              if (exit === 1) {
                tmp = ex ? ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, exPartnerStatus, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("EX-PARTNER")])) : ReasonReact.element(undefined, undefined, MaterialUi_ListItemSecondaryAction.make(undefined, undefined, undefined, /* array */[Js_primitive.valFromOption(button)]));
              }
              return ReasonReact.element(undefined, undefined, MaterialUi_ListItem.make(onClick !== undefined, undefined, undefined, undefined, undefined, true, undefined, true, undefined, undefined, undefined, undefined, onClick, /* :: */[
                              /* SecondaryAction */Block.__(9, [secondaryAction(status)]),
                              /* [] */0
                            ], undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_Avatar.make(undefined, undefined, avatar, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text($$String.uppercase($$String.make(1, Caml_string.get(userId, 0))))])),
                              ReasonReact.element(undefined, undefined, MaterialUi_ListItemText.make(undefined, undefined, undefined, Js_primitive.some(match[0]), undefined, match[1], undefined, /* :: */[
                                        /* Primary */Block.__(3, [primary(ex)]),
                                        /* :: */[
                                          /* Secondary */Block.__(4, [secondary(ex)]),
                                          /* [] */0
                                        ]
                                      ], undefined, /* array */[])),
                              tmp
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
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
