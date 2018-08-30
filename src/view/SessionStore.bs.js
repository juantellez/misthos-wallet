// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Session = require("../web/Session.bs.js");
var TACText = require("./text/TACText.bs.js");
var UserInfo = require("../application/UserInfo.bs.js");
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
              var send = param[/* send */3];
              return Curry._3(children, param[/* state */1][/* session */0], send, (function () {
                            return Curry._1(send, /* SignTAC */2);
                          }));
            }),
          /* initialState */(function () {
              return /* record */[/* session : Unknown */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                switch (action) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[/* session */Session.signIn(/* () */0)]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[/* session */Session.signOut(/* () */0)]]);
                  case 2 : 
                      var match = state[/* session */0];
                      if (typeof match === "number" || match.tag) {
                        return /* NoUpdate */0;
                      } else {
                        var userInfo = match[1];
                        var session = match[0];
                        return /* SideEffects */Block.__(1, [(function (param) {
                                      var send = param[/* send */3];
                                      UserInfo.signTAC(TACText.hash, session[/* appPrivateKey */1], session[/* network */5], userInfo).then((function () {
                                              return Promise.resolve(Curry._1(send, /* UpdateSession */[/* LoggedIn */Block.__(1, [session])]));
                                            }));
                                      return /* () */0;
                                    })]);
                      }
                  
                }
              } else {
                return /* Update */Block.__(0, [/* record */[/* session */action[0]]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
