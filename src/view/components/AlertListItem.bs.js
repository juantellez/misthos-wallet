// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Avatar = require("@jsiebern/bs-material-ui/src/MaterialUi_Avatar.bs.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");
var ArrowRightSvg = require("../../assets/img/arrow-right.svg");
var PlusCircleSvg = require("../../assets/img/plus-circle.svg");
var MinusCircleSvg = require("../../assets/img/minus-circle.svg");
var MaterialUi_ListItemSecondaryAction = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemSecondaryAction.bs.js");
var ArrowUpCircleSvg = require("../../assets/img/arrow-up-circle.svg");

var component = ReasonReact.statelessComponent("Transaction");

var alert = Css.style(/* :: */[
      Css.borderStyle(Css.solid),
      /* :: */[
        Css.borderWidth(Css.px(2)),
        /* :: */[
          Css.unsafe("borderImageSlice", "1"),
          /* :: */[
            Css.unsafe("borderImageSource", Colors.uGradientAqua),
            /* [] */0
          ]
        ]
      ]
    ]);

var icon = Css.style(/* :: */[
      Css.unsafe("width", "min-content"),
      /* :: */[
        Css.backgroundColor(/* transparent */582626130),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* alert */alert,
  /* icon */icon
];

function make(icon$1, onClick, text, _) {
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
              var match;
              switch (icon$1) {
                case 0 : 
                    match = /* tuple */[
                      PlusCircleSvg,
                      "plus-icon"
                    ];
                    break;
                case 1 : 
                    match = /* tuple */[
                      MinusCircleSvg,
                      "minus-icon"
                    ];
                    break;
                case 2 : 
                    match = /* tuple */[
                      ArrowUpCircleSvg,
                      "arrow-up-icon"
                    ];
                    break;
                
              }
              return ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItem.make(/* Some */[true], /* Some */[alert], /* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[onClick], /* None */0, /* None */0, /* array */[
                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_Avatar.make(/* None */0, /* None */0, /* Some */[icon], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("img", {
                                              alt: match[1],
                                              src: match[0]
                                            })])),
                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemText.make(/* None */0, /* None */0, /* None */0, /* Some */[text], /* None */0, /* None */0, /* None */0, /* array */[])),
                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemSecondaryAction.make(/* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[onClick], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("img", {
                                                        alt: "arrow-right-icon",
                                                        src: ArrowRightSvg
                                                      })]))]))
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

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
