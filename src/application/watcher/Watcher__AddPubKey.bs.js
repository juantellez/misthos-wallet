// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Event = require("../events/Event.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var EventLog = require("../events/EventLog.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(param, param$1, log) {
  var match = param$1[/* data */2];
  var id = match[/* id */1];
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
        ], ["state"]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var state = ids[3];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              var tmp;
              switch ($$event.tag | 0) {
                case 6 : 
                    tmp = PrimitiveTypes.UserId[/* eq */5]($$event[0][/* partnerId */0], env$1[1]) ? /* record */[
                        /* pendingEvent */undefined,
                        /* completed */true
                      ] : self$1[state][0];
                    break;
                case 10 : 
                    tmp = PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* data */2][/* lastPartnerProcess */1], env$1[0]) ? /* record */[
                        /* pendingEvent */undefined,
                        /* completed */true
                      ] : self$1[state][0];
                    break;
                default:
                  tmp = self$1[state][0];
              }
              self$1[state][0] = tmp;
              return /* () */0;
            }),
          processCompleted,
          (function (self$1, param) {
              return self$1[state][0][/* completed */1];
            }),
          pendingEvent,
          (function (self$1, param) {
              return self$1[state][0][/* pendingEvent */0];
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      var match = PrimitiveTypes.UserId[/* eq */5](env$1[3], env$1[1]) && Js_option.isNone(env$1[4]);
      self[state] = /* record */[/* contents : record */[
          /* pendingEvent */match ? /* tuple */[
              env$1[2],
              /* PartnerPubKeyAdded */Block.__(6, [Curry._2($$Event.Partner[/* PubKeyAdded */10][/* make */0], env$1[1], Utils.publicKeyFromKeyPair(env$1[2]))])
            ] : undefined,
          /* completed */PrimitiveTypes.UserId[/* neq */6](env$1[3], env$1[1]) || Js_option.isSome(env$1[4])
        ]];
      self[env] = env$1[0];
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs_000 = [
    param$1[/* processId */0],
    id
  ];
  var envs_001 = param[/* userId */0];
  var envs_002 = param[/* issuerKeyPair */2];
  var envs_004 = match[/* pubKey */2];
  var envs = [
    envs_000,
    envs_001,
    envs_002,
    id,
    envs_004
  ];
  var $$process = Curry._1(class_tables[0], envs);
  if (Caml_oo_curry.js2(111581468, 1, $$process, /* () */0) === false) {
    Curry._3(EventLog.reduce, (function (param, item) {
            return Caml_oo_curry.js2(710435299, 2, $$process, item);
          }), /* () */0, log);
  }
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
