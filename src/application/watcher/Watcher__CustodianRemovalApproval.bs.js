// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Policy = require("../Policy.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("../events/EventLog.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var EligibilityCollector = require("./EligibilityCollector.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(proposal, log) {
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
          "state",
          "completed",
          "result"
        ]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var state = ids[3];
    var completed = ids[4];
    var result = ids[5];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              var init = self$1[state][0];
              self$1[state][0] = /* record */[
                /* dependencyMet */init[/* dependencyMet */0],
                /* eligibilityCollector */EligibilityCollector.apply($$event, self$1[state][0][/* eligibilityCollector */1]),
                /* endorsements */init[/* endorsements */2],
                /* rejections */init[/* rejections */3],
                /* policy */init[/* policy */4],
                /* systemIssuer */init[/* systemIssuer */5]
              ];
              var tmp;
              var exit = 0;
              switch ($$event.tag | 0) {
                case 0 : 
                    var init$1 = self$1[state][0];
                    tmp = /* record */[
                      /* dependencyMet */init$1[/* dependencyMet */0],
                      /* eligibilityCollector */init$1[/* eligibilityCollector */1],
                      /* endorsements */init$1[/* endorsements */2],
                      /* rejections */init$1[/* rejections */3],
                      /* policy */init$1[/* policy */4],
                      /* systemIssuer */$$event[0][/* systemIssuer */7]
                    ];
                    break;
                case 19 : 
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[0][/* data */6][/* lastCustodianProcess */2])) {
                      var init$2 = self$1[state][0];
                      tmp = /* record */[
                        /* dependencyMet */true,
                        /* eligibilityCollector */init$2[/* eligibilityCollector */1],
                        /* endorsements */init$2[/* endorsements */2],
                        /* rejections */init$2[/* rejections */3],
                        /* policy */init$2[/* policy */4],
                        /* systemIssuer */init$2[/* systemIssuer */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 22 : 
                    var $$event$1 = $$event[0];
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event$1[/* processId */0], env$1[0][/* processId */0])) {
                      var init$3 = self$1[state][0];
                      tmp = /* record */[
                        /* dependencyMet */init$3[/* dependencyMet */0],
                        /* eligibilityCollector */init$3[/* eligibilityCollector */1],
                        /* endorsements */init$3[/* endorsements */2],
                        /* rejections */Belt_Set.add(self$1[state][0][/* rejections */3], $$event$1[/* rejectorId */1]),
                        /* policy */init$3[/* policy */4],
                        /* systemIssuer */init$3[/* systemIssuer */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 23 : 
                    var $$event$2 = $$event[0];
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event$2[/* processId */0], env$1[0][/* processId */0])) {
                      var init$4 = self$1[state][0];
                      tmp = /* record */[
                        /* dependencyMet */init$4[/* dependencyMet */0],
                        /* eligibilityCollector */init$4[/* eligibilityCollector */1],
                        /* endorsements */Belt_Set.add(self$1[state][0][/* endorsements */2], $$event$2[/* supporterId */1]),
                        /* rejections */init$4[/* rejections */3],
                        /* policy */init$4[/* policy */4],
                        /* systemIssuer */init$4[/* systemIssuer */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 24 : 
                case 25 : 
                    exit = 1;
                    break;
                default:
                  tmp = self$1[state][0];
              }
              if (exit === 1) {
                if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[0][/* processId */0])) {
                  self$1[completed][0] = true;
                  tmp = self$1[state][0];
                } else {
                  tmp = self$1[state][0];
                }
              }
              self$1[state][0] = tmp;
              var match = self$1[completed][0];
              var arg = EligibilityCollector.currentEligible(self$1[state][0][/* eligibilityCollector */1]);
              var arg$1 = self$1[state][0][/* rejections */3];
              var match$1 = (function (param) {
                    return Curry._2(Policy.canBeFulfilled(param), arg, arg$1);
                  })(self$1[state][0][/* policy */4]);
              var arg$2 = EligibilityCollector.currentEligible(self$1[state][0][/* eligibilityCollector */1]);
              var arg$3 = self$1[state][0][/* endorsements */2];
              var match$2 = (function (param) {
                    return Curry._2(Policy.fulfilled(param), arg$2, arg$3);
                  })(self$1[state][0][/* policy */4]);
              self$1[result][0] = match ? undefined : (
                  match$1 ? (
                      match$2 ? /* tuple */[
                          self$1[state][0][/* systemIssuer */5],
                          /* CustodianRemovalAccepted */Block.__(24, [Curry._1(Event.Custodian[/* Removal */9][/* Accepted */6][/* fromProposal */0], env$1[0])])
                        ] : undefined
                    ) : /* tuple */[
                      self$1[state][0][/* systemIssuer */5],
                      /* CustodianRemovalDenied */Block.__(25, [Curry._1(Event.Custodian[/* Removal */9][/* Denied */7][/* fromProposal */0], env$1[0])])
                    ]
                );
              return /* () */0;
            }),
          processCompleted,
          (function (self$1, param) {
              return self$1[completed][0];
            }),
          pendingEvent,
          (function (self$1, param) {
              return self$1[result][0];
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[state] = /* record */[/* contents : record */[
          /* dependencyMet */false,
          /* eligibilityCollector */EligibilityCollector.make(env$1[1][/* eligibleWhenProposing */3]),
          /* endorsements */PrimitiveTypes.UserId[/* emptySet */9],
          /* rejections */PrimitiveTypes.UserId[/* emptySet */9],
          /* policy */env$1[1][/* policy */5],
          /* systemIssuer */BitcoinjsLib.ECPair.makeRandom()
        ]];
      self[completed] = /* record */[/* contents */false];
      self[result] = /* record */[/* contents */undefined];
      self[env] = env$1[0];
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs_000 = [proposal];
  var envs = [
    envs_000,
    proposal
  ];
  var $$process = Curry._1(class_tables[0], envs);
  Curry._3(EventLog.reduce, (function (param, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
