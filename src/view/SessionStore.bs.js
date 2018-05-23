// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Session = require("../application/Session.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("SessionStore");

function make(children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (param) {
              var send = param[/* send */3];
              Session.getCurrentSession(/* () */0).then((function (session) {
                      return Promise.resolve(Curry._1(send, /* UpdateSession */[session]));
                    }));
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              return Curry._2(children, param[/* state */1][/* session */0], param[/* send */3]);
            }),
          /* initialState */(function () {
              return /* record */[/* session : Unknown */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              if (typeof action === "number") {
                if (action !== 0) {
                  return /* Update */Block.__(0, [/* record */[/* session */Session.signOut(/* () */0)]]);
                } else {
                  return /* Update */Block.__(0, [/* record */[/* session */Session.signIn(/* () */0)]]);
                }
              } else {
                return /* Update */Block.__(0, [/* record */[/* session */action[0]]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
