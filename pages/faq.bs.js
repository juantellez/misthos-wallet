// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("../src/view/components/Grid.bs.js");
var Icons = require("../src/view/Icons.bs.js");
var Footer = require("../src/view/Footer.bs.js");
var Header = require("../src/view/Header.bs.js");
var Layout = require("../src/view/Layout.bs.js");
var FaqText = require("../src/view/text/FaqText.bs.js");
var ViewCommon = require("../src/view/ViewCommon.bs.js");
var Environment = require("../src/web/Environment.bs.js");
var MTypography = require("../src/view/components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WithRoot = require("../src/web/withRoot");
var MaterialUi_ExpansionPanel = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanel.bs.js");
var MaterialUi_ExpansionPanelDetails = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanelDetails.bs.js");
var MaterialUi_ExpansionPanelSummary = require("@jsiebern/bs-material-ui/src/MaterialUi_ExpansionPanelSummary.bs.js");

var component = ReasonReact.statelessComponent("faq");

function line(data) {
  return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(data)]));
}

function paragraph(data) {
  return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text(data)]));
}

var environment = Environment.get(/* () */0);

function make() {
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
              return ReasonReact.element(/* None */0, /* None */0, Layout.make(/* Some */[ReasonReact.element(/* None */0, /* None */0, Header.make(/* None */0, /* Some */[environment[/* webDomain */3] + "/"], /* None */0, /* array */[]))], /* None */0, /* None */0, /* Some */[true], /* array */[
                              ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("frequently asked questions")], /* None */0, /* None */0, /* None */0, /* Some */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_ExpansionPanel.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                  ReasonReact.element(/* None */0, /* None */0, MaterialUi_ExpansionPanelSummary.make(/* None */0, /* None */0, /* None */0, /* Some */[Icons.chevronDown], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Subheading */148169314, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(FaqText.whatIsMisthosQ)]))])),
                                                  ReasonReact.element(/* None */0, /* None */0, MaterialUi_ExpansionPanelDetails.make(/* Some */[Css.style(/* :: */[
                                                                  Css.flexDirection(Css.column),
                                                                  /* [] */0
                                                                ])], /* None */0, /* None */0, /* array */[
                                                            paragraph(FaqText.whatIsMisthosAP1),
                                                            paragraph(FaqText.whatIsMisthosAP2)
                                                          ]))
                                                ]))], /* None */0, /* None */0, /* array */[])),
                              ReasonReact.element(/* None */0, /* None */0, Footer.make(/* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var $$default = WithRoot.default(ReasonReact.wrapReasonForJs(component, (function () {
            return make(/* array */[]);
          })));

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var T = 0;

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.line = line;
exports.paragraph = paragraph;
exports.environment = environment;
exports.T = T;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
