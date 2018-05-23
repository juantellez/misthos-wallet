// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var EventLog = require("../events/EventLog.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("../wallet/AccountKeyChain.bs.js");
var PayoutTransaction = require("../wallet/PayoutTransaction.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(param, param$1, log) {
  var payoutProcess = param$1[/* processId */0];
  var userId = param[/* userId */0];
  var state = Curry._3(EventLog.reduce, (function (state, param) {
          var $$event = param[/* event */0];
          switch ($$event.tag | 0) {
            case 0 : 
                var match = $$event[0];
                return /* record */[
                        /* network */match[/* network */6],
                        /* ventureId */match[/* ventureId */0],
                        /* accountKeyChains */state[/* accountKeyChains */2],
                        /* payoutTx */state[/* payoutTx */3],
                        /* complete */state[/* complete */4]
                      ];
            case 21 : 
                var match$1 = $$event[0];
                if (PrimitiveTypes.ProcessId[/* eq */5](match$1[/* processId */0], payoutProcess)) {
                  return /* record */[
                          /* network */state[/* network */0],
                          /* ventureId */state[/* ventureId */1],
                          /* accountKeyChains */state[/* accountKeyChains */2],
                          /* payoutTx : Some */[match$1[/* data */6][/* payoutTx */1]],
                          /* complete */state[/* complete */4]
                        ];
                } else {
                  return state;
                }
            case 25 : 
                var match$2 = $$event[0];
                if (PrimitiveTypes.UserId[/* eq */5](match$2[/* custodianId */1], userId) && PrimitiveTypes.ProcessId[/* eq */5](match$2[/* processId */0], payoutProcess)) {
                  return /* record */[
                          /* network */state[/* network */0],
                          /* ventureId */state[/* ventureId */1],
                          /* accountKeyChains */state[/* accountKeyChains */2],
                          /* payoutTx */state[/* payoutTx */3],
                          /* complete */true
                        ];
                } else {
                  return state;
                }
            case 30 : 
                return /* record */[
                        /* network */state[/* network */0],
                        /* ventureId */state[/* ventureId */1],
                        /* accountKeyChains */AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], state[/* accountKeyChains */2]),
                        /* payoutTx */state[/* payoutTx */3],
                        /* complete */state[/* complete */4]
                      ];
            default:
              return state;
          }
        }), /* record */[
        /* network : Regtest */0,
        /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
        /* accountKeyChains */AccountKeyChain.Collection[/* empty */0],
        /* payoutTx : None */0,
        /* complete */false
      ], log);
  var signEvent;
  if (PrimitiveTypes.UserId[/* eq */5](param$1[/* supporterId */1], userId) && state[/* complete */4] === false) {
    var match = PayoutTransaction.signPayout(state[/* ventureId */1], userId, param[/* masterKeyChain */4], state[/* accountKeyChains */2], Js_option.getExn(state[/* payoutTx */3]), state[/* network */0]);
    signEvent = match ? /* Some */[/* tuple */[
          param[/* issuerKeyPair */2],
          /* PayoutSigned */Block.__(25, [Curry._3(Event.Payout[/* Signature */7][/* make */0], payoutProcess, userId, match[0])])
        ]] : /* None */0;
  } else {
    signEvent = /* None */0;
  }
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table([
          "processCompleted",
          "receive",
          "pendingEvent"
        ]);
    var env = CamlinternalOO.new_variable($$class, "");
    var ids = CamlinternalOO.new_methods_variables($$class, [
          "receive",
          "processCompleted",
          "pendingEvent"
        ], ["signPending"]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var signPending = ids[3];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              if ($$event.tag === 25) {
                var match = $$event[0];
                if (PrimitiveTypes.UserId[/* eq */5](match[/* custodianId */1], env$1[1]) && PrimitiveTypes.ProcessId[/* eq */5](match[/* processId */0], env$1[2])) {
                  self$1[signPending][0] = false;
                  return /* () */0;
                } else {
                  return /* () */0;
                }
              } else {
                return /* () */0;
              }
            }),
          processCompleted,
          (function (self$1, _) {
              return self$1[signPending][0] === false;
            }),
          pendingEvent,
          (function (self$1, _) {
              var match = self$1[signPending][0];
              if (match) {
                return Utils.mapOption((function (prim) {
                              return Promise.resolve(prim);
                            }), self$1[env][0]);
              } else {
                return /* None */0;
              }
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[signPending] = [env$1[1] ? true : false];
      self[env] = env$1[0];
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], [
              [
                signEvent,
                userId,
                payoutProcess
              ],
              signEvent
            ]);
}

exports.make = make;
/* Event Not a pure module */
