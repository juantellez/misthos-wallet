// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var PrimitiveTypes = require("../../application/PrimitiveTypes.bs.js");
var PayoutTransaction = require("../../application/wallet/PayoutTransaction.bs.js");

function make() {
  return /* record */[
          /* payoutProcesses */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0),
          /* confirmedTxs : [] */0,
          /* unconfirmedTxs : [] */0,
          /* network : Regtest */0
        ];
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* payoutProcesses */state[/* payoutProcesses */0],
                /* confirmedTxs */state[/* confirmedTxs */1],
                /* unconfirmedTxs */state[/* unconfirmedTxs */2],
                /* network */$$event[0][/* network */6]
              ];
    case 21 : 
        var match = $$event[0];
        return /* record */[
                /* payoutProcesses */Belt_Map.set(state[/* payoutProcesses */0], match[/* processId */0], match[/* data */5][/* payoutTx */1]),
                /* confirmedTxs */state[/* confirmedTxs */1],
                /* unconfirmedTxs */state[/* unconfirmedTxs */2],
                /* network */state[/* network */3]
              ];
    case 26 : 
        var match$1 = $$event[0];
        var payoutTx = Belt_Map.getExn(state[/* payoutProcesses */0], match$1[/* processId */0]);
        return /* record */[
                /* payoutProcesses */state[/* payoutProcesses */0],
                /* confirmedTxs */state[/* confirmedTxs */1],
                /* unconfirmedTxs : :: */[
                  /* UnconfirmedPayout */Block.__(1, [
                      match$1[/* txId */1],
                      PayoutTransaction.summary(state[/* network */3], payoutTx)[/* spentWithFees */1]
                    ]),
                  state[/* unconfirmedTxs */2]
                ],
                /* network */state[/* network */3]
              ];
    case 33 : 
        var match$2 = $$event[0];
        return /* record */[
                /* payoutProcesses */state[/* payoutProcesses */0],
                /* confirmedTxs : :: */[
                  /* ConfirmedIncome */Block.__(0, [
                      match$2[/* amount */4],
                      new Date(match$2[/* unixTime */6] * 1000)
                    ]),
                  state[/* confirmedTxs */1]
                ],
                /* unconfirmedTxs */state[/* unconfirmedTxs */2],
                /* network */state[/* network */3]
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.apply = apply;
/* PrimitiveTypes Not a pure module */
