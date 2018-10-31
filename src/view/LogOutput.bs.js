// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var EventLog = require("../application/events/EventLog.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WorkerUtils = require("../workers/WorkerUtils.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var component = ReasonReact.reducerComponent("LogOutput");

function make(ventureId, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (param) {
              var send = param[/* send */3];
              WorkerUtils.loadVenture(ventureId).then((function (log) {
                      return Promise.resolve(Curry._1(send, log));
                    }));
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var state = param[/* state */1];
              return React.createElement("div", undefined, state !== undefined ? ViewCommon.text(Json.stringify(Curry._1(EventLog.encode, Js_primitive.valFromOption(state)))) : null);
            }),
          /* initialState */(function (param) {
              return undefined;
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (log, param) {
              return /* Update */Block.__(0, [Js_primitive.some(log)]);
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
exports.make = make;
/* component Not a pure module */
