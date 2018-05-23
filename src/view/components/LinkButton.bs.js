// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Router = require("../Router.bs.js");
var MButton = require("./MButton.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("LinkButton");

function make(route, $staropt$star, children) {
  var fullWidth = $staropt$star ? $staropt$star[0] : false;
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
              var href = Router.Config[/* routeToUrl */1](route);
              return ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function ($$event) {
                                  $$event.preventDefault();
                                  return ReasonReact.Router[/* push */0](href);
                                })], /* None */0, /* Some */[fullWidth], /* None */0, /* None */0, /* array */[children]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
