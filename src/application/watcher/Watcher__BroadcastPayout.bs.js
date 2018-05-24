// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var Network = require("../wallet/Network.bs.js");
var EventLog = require("../events/EventLog.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var PayoutTransaction = require("../wallet/PayoutTransaction.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(param, log) {
  var payoutProcess = param[/* processId */0];
  var match = Curry._3(EventLog.reduce, (function (param, param$1) {
          var $$event = param$1[/* event */0];
          var network = param[3];
          var systemIssuer = param[2];
          var txs = param[1];
          var broadcast = param[0];
          var exit = 0;
          var exit$1 = 0;
          switch ($$event.tag | 0) {
            case 0 : 
                var match = $$event[0];
                return /* tuple */[
                        broadcast,
                        txs,
                        match[/* systemIssuer */5],
                        match[/* network */6]
                      ];
            case 30 : 
                var match$1 = $$event[0];
                if (PrimitiveTypes.ProcessId[/* eq */5](match$1[/* processId */0], payoutProcess)) {
                  return /* tuple */[
                          broadcast,
                          /* :: */[
                            match$1[/* payoutTx */2],
                            txs
                          ],
                          systemIssuer,
                          network
                        ];
                } else {
                  exit = 1;
                }
                break;
            case 32 : 
            case 33 : 
            case 34 : 
                exit$1 = 2;
                break;
            default:
              exit = 1;
          }
          if (exit$1 === 2) {
            if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], payoutProcess)) {
              return /* tuple */[
                      false,
                      txs,
                      systemIssuer,
                      network
                    ];
            } else {
              exit = 1;
            }
          }
          if (exit === 1) {
            return /* tuple */[
                    broadcast,
                    txs,
                    systemIssuer,
                    network
                  ];
          }
          
        }), /* tuple */[
        true,
        /* :: */[
          param[/* data */2][/* payoutTx */1],
          /* [] */0
        ],
        BitcoinjsLib.ECPair.makeRandom(),
        /* Regtest */0
      ], log);
  var network = match[3];
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
        ], [
          "finalTransaction",
          "delivered"
        ]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var finalTransaction = ids[3];
    var delivered = ids[4];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var $$event = param[/* event */0];
              var exit = 0;
              switch ($$event.tag | 0) {
                case 32 : 
                case 34 : 
                    exit = 1;
                    break;
                default:
                  return /* () */0;
              }
              if (exit === 1) {
                if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], self$1[env][0])) {
                  self$1[finalTransaction][0] = /* None */0;
                  return /* () */0;
                } else {
                  return /* () */0;
                }
              }
              
            }),
          processCompleted,
          (function (self$1, _) {
              if (self$1[delivered][0]) {
                return true;
              } else {
                return Js_option.isNone(self$1[finalTransaction][0]);
              }
            }),
          pendingEvent,
          (function (self$1, _) {
              var env$1 = self$1[env];
              return Utils.mapOption((function (tx) {
                            return Curry._1(Network.broadcastTransaction(env$1[2]), tx).then((function (result) {
                                          self$1[delivered][0] = true;
                                          var tmp;
                                          if (typeof result === "number") {
                                            tmp = /* tuple */[
                                              env$1[1],
                                              /* PayoutBroadcastDuplicate */Block.__(33, [Curry._1(Event.Payout[/* BroadcastDuplicate */11][/* make */0], env$1[0])])
                                            ];
                                          } else {
                                            switch (result.tag | 0) {
                                              case 0 : 
                                                  tmp = /* tuple */[
                                                    env$1[1],
                                                    /* PayoutBroadcast */Block.__(32, [Curry._2(Event.Payout[/* Broadcast */10][/* make */0], env$1[0], result[0])])
                                                  ];
                                                  break;
                                              case 1 : 
                                                  var errorMessage = result[0];
                                                  Utils.printError("Broadcasting transaction failed", errorMessage);
                                                  tmp = /* tuple */[
                                                    env$1[1],
                                                    /* PayoutBroadcastFailed */Block.__(34, [Curry._2(Event.Payout[/* BroadcastFailed */12][/* make */0], env$1[0], errorMessage)])
                                                  ];
                                                  break;
                                              case 2 : 
                                                  tmp = /* tuple */[
                                                    env$1[1],
                                                    /* PayoutBroadcastFailed */Block.__(34, [Curry._2(Event.Payout[/* BroadcastFailed */12][/* make */0], env$1[0], "Fetch error")])
                                                  ];
                                                  break;
                                              
                                            }
                                          }
                                          return Promise.resolve(tmp);
                                        }));
                          }), self$1[finalTransaction][0]);
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[finalTransaction] = [env$1[1] ? /* Some */[PayoutTransaction.finalize(env$1[2], env$1[3])] : /* None */0];
      self[delivered] = [false];
      self[env] = env$1[0];
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], [
              [
                payoutProcess,
                match[2],
                network
              ],
              match[0],
              match[1],
              network
            ]);
}

exports.make = make;
/* Event Not a pure module */
