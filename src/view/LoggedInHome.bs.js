// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("./components/Grid.bs.js");
var React = require("react");
var Router = require("./Router.bs.js");
var MButton = require("./components/MButton.bs.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var VentureList = require("./VentureList.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ContactUsShoutOut = require("./components/ContactUsShoutOut.bs.js");

var component = ReasonReact.statelessComponent("LoggedInHome");

function make(index, _children) {
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
              return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("My Ventures")), undefined, undefined, undefined, Js_primitive.some(React.createElement("div", {
                                      className: ScrollList.containerStyles
                                    }, ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[ReasonReact.element(undefined, undefined, VentureList.make(undefined, index, /* array */[]))])))), Js_primitive.some(React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, true, undefined, undefined, undefined, /* array */[ViewCommon.text("CREATE A NEW VENTURE")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Set up a new Venture with yourself as the initial Partner. You can add and remove Partners once the Venture is created.")])), ReasonReact.element(undefined, undefined, MButton.make(undefined, (function (param) {
                                                return Router.clickToRoute(/* CreateVenture */1, param);
                                              }), undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Create a Venture")])), ReasonReact.element(undefined, undefined, ContactUsShoutOut.make(undefined, /* array */[])))), undefined, undefined, /* array */[]));
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
exports.make = make;
/* component Not a pure module */
