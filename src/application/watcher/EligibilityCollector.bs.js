// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

function make(eligible) {
  return /* record */[
          /* eligible */eligible,
          /* currentPartners */PrimitiveTypes.UserId[/* emptySet */9]
        ];
}

function currentEligible(param) {
  return Belt_Set.intersect(param[/* eligible */0], param[/* currentPartners */1]);
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 4 : 
        return /* record */[
                /* eligible */state[/* eligible */0],
                /* currentPartners */Belt_Set.add(state[/* currentPartners */1], $$event[0][/* data */2][/* id */1])
              ];
    case 10 : 
        return /* record */[
                /* eligible */state[/* eligible */0],
                /* currentPartners */Belt_Set.remove(state[/* currentPartners */1], $$event[0][/* data */2][/* id */0])
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.currentEligible = currentEligible;
exports.apply = apply;
/* PrimitiveTypes Not a pure module */
