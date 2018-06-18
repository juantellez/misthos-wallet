// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("../src/view/components/Grid.bs.js");
var React = require("react");
var Footer = require("../src/view/Footer.bs.js");
var Header = require("../src/view/Header.bs.js");
var Layout = require("../src/view/Layout.bs.js");
var ViewCommon = require("../src/view/ViewCommon.bs.js");
var Environment = require("../src/web/Environment.bs.js");
var MTypography = require("../src/view/components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WithRoot = require("../src/web/withRoot");

var component = ReasonReact.statelessComponent("impressum");

function line(data) {
  return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(data)]));
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
                              ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("impressum")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", undefined, line("Justin Carter"), line("Misthos"), line("Dolziger Str. 15"), line("D10247 Berlin"), line("Deutschland"), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                      ViewCommon.text("Email: "),
                                                      React.createElement("a", {
                                                            href: "mailto:Contact@misthos.io"
                                                          }, ViewCommon.text("contact@misthos.io"))
                                                    ])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                      ViewCommon.text("Link zum Impressum: "),
                                                      React.createElement("a", {
                                                            href: environment[/* webDomain */3] + "/impressum",
                                                            target: "_blank"
                                                          }, ViewCommon.text("https://www.misthos.io/impressum"))
                                                    ])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                      ViewCommon.text("Link zur Datenschutzerklärung: "),
                                                      React.createElement("a", {
                                                            href: environment[/* webDomain */3] + "/datenschutzerklarung",
                                                            target: "_blank"
                                                          }, ViewCommon.text("https://www.misthos.io/datenschutzerklarung"))
                                                    ])))], /* None */0, /* None */0, /* array */[])),
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

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.line = line;
exports.environment = environment;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
