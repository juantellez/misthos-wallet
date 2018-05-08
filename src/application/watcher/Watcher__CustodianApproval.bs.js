// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var Policy = require("../Policy.bs.js");
var EventLog = require("../events/EventLog.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

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
              var tmp;
              switch ($$event.tag | 0) {
                case 0 : 
                    var init = self$1[state][0];
                    tmp = /* record */[
                      /* eligable */init[/* eligable */0],
                      /* endorsements */init[/* endorsements */1],
                      /* policy */init[/* policy */2],
                      /* systemIssuer */$$event[0][/* systemIssuer */5]
                    ];
                    break;
                case 4 : 
                    var init$1 = self$1[state][0];
                    tmp = /* record */[
                      /* eligable : :: */[
                        $$event[0][/* data */2][/* id */1],
                        self$1[state][0][/* eligable */0]
                      ],
                      /* endorsements */init$1[/* endorsements */1],
                      /* policy */init$1[/* policy */2],
                      /* systemIssuer */init$1[/* systemIssuer */3]
                    ];
                    break;
                case 8 : 
                    var id = $$event[0][/* data */2][/* id */0];
                    var init$2 = self$1[state][0];
                    var partial_arg = PrimitiveTypes.UserId[/* neq */6];
                    tmp = /* record */[
                      /* eligable */List.filter((function (param) {
                                return partial_arg(id, param);
                              }))(self$1[state][0][/* eligable */0]),
                      /* endorsements */init$2[/* endorsements */1],
                      /* policy */init$2[/* policy */2],
                      /* systemIssuer */init$2[/* systemIssuer */3]
                    ];
                    break;
                case 15 : 
                    var $$event$1 = $$event[0];
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event$1[/* processId */0], env$1[0][/* processId */0])) {
                      var init$3 = self$1[state][0];
                      tmp = /* record */[
                        /* eligable */init$3[/* eligable */0],
                        /* endorsements : :: */[
                          $$event$1[/* supporterId */1],
                          self$1[state][0][/* endorsements */1]
                        ],
                        /* policy */init$3[/* policy */2],
                        /* systemIssuer */init$3[/* systemIssuer */3]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 16 : 
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[0][/* processId */0])) {
                      self$1[completed][0] = true;
                      tmp = self$1[state][0];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                default:
                  tmp = self$1[state][0];
              }
              self$1[state][0] = tmp;
              self$1[result][0] = /* None */0;
              var tmp$1 = false;
              if (self$1[completed][0] === false) {
                var arg = self$1[state][0][/* eligable */0];
                var arg$1 = self$1[state][0][/* endorsements */1];
                tmp$1 = (function (param) {
                      return Policy.fulfilled(param)(arg, arg$1);
                    })(self$1[state][0][/* policy */2]);
              }
              if (tmp$1) {
                self$1[result][0] = /* Some */[/* tuple */[
                    self$1[state][0][/* systemIssuer */3],
                    /* CustodianAccepted */Block.__(16, [Curry._1(Event.Custodian[/* Accepted */6][/* fromProposal */0], env$1[0])])
                  ]];
                return /* () */0;
              } else {
                return 0;
              }
            }),
          processCompleted,
          (function (self$1, _) {
              return self$1[completed][0];
            }),
          pendingEvent,
          (function (self$1, _) {
              return Utils.mapOption((function (prim) {
                            return Promise.resolve(prim);
                          }), self$1[result][0]);
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[state] = [/* record */[
          /* eligable : [] */0,
          /* endorsements : :: */[
            env$1[1][/* supporterId */3],
            /* [] */0
          ],
          /* policy */env$1[1][/* policy */4],
          /* systemIssuer */BitcoinjsLib.ECPair.makeRandom()
        ]];
      self[completed] = [false];
      self[result] = [/* None */0];
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
  Curry._3(EventLog.reduce, (function (_, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
