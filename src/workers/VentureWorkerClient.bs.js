// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var WebWorker = require("../ffi/WebWorker.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");
var Venture_workerBsJs = require("./Venture_worker.bs.js");

var Config = /* module */[
  /* encodeReceive */VentureWorkerMessage.encodeReceive,
  /* UnknownMessage */VentureWorkerMessage.UnknownMessage,
  /* decodeReceive */VentureWorkerMessage.decodeReceive
];

var include = WebWorker.MakeClient([
      VentureWorkerMessage.decodeReceive,
      (function () {
          return new Venture_workerBsJs();
        })
    ]);

function updateSession(worker) {
  worker.postMessage(/* UpdateSession */Block.__(0, [WorkerLocalStorage.readBlockstackItemsFromStorage(/* () */0)]));
  return /* () */0;
}

function create(name, worker) {
  worker.postMessage(/* Create */Block.__(1, [name]));
  return /* () */0;
}

function load(ventureId, worker) {
  worker.postMessage(/* Load */Block.__(2, [ventureId]));
  return /* () */0;
}

function proposePartner(worker, ventureId, prospectId) {
  worker.postMessage(/* ProposePartner */Block.__(3, [
          ventureId,
          prospectId
        ]));
  return /* () */0;
}

function endorsePartner(worker, ventureId, processId) {
  worker.postMessage(/* EndorsePartner */Block.__(4, [
          ventureId,
          processId
        ]));
  return /* () */0;
}

function proposePartnerRemoval(worker, ventureId, partnerId) {
  worker.postMessage(/* ProposePartnerRemoval */Block.__(5, [
          ventureId,
          partnerId
        ]));
  return /* () */0;
}

function endorsePartnerRemoval(worker, ventureId, processId) {
  worker.postMessage(/* EndorsePartnerRemoval */Block.__(6, [
          ventureId,
          processId
        ]));
  return /* () */0;
}

function proposePayout(worker, ventureId, accountIdx, destinations, fee) {
  worker.postMessage(/* ProposePayout */Block.__(7, [
          ventureId,
          accountIdx,
          List.map((function (param) {
                  return /* tuple */[
                          param[0],
                          BTC.encode(param[1])
                        ];
                }), destinations),
          BTC.encode(fee)
        ]));
  return /* () */0;
}

function endorsePayout(worker, ventureId, processId) {
  worker.postMessage(/* EndorsePayout */Block.__(8, [
          ventureId,
          processId
        ]));
  return /* () */0;
}

function exposeIncomeAddress(worker, ventureId, accountIdx) {
  worker.postMessage(/* ExposeIncomeAddress */Block.__(9, [
          ventureId,
          accountIdx
        ]));
  return /* () */0;
}

function make(worker, ventureId) {
  return /* record */[
          /* proposePartner */(function (param) {
              return proposePartner(worker, ventureId, param);
            }),
          /* endorsePartner */(function (param) {
              return endorsePartner(worker, ventureId, param);
            }),
          /* proposePartnerRemoval */(function (param) {
              return proposePartnerRemoval(worker, ventureId, param);
            }),
          /* endorsePartnerRemoval */(function (param) {
              return endorsePartnerRemoval(worker, ventureId, param);
            }),
          /* proposePayout */(function (param, param$1, param$2) {
              return proposePayout(worker, ventureId, param, param$1, param$2);
            }),
          /* endorsePayout */(function (param) {
              return endorsePayout(worker, ventureId, param);
            }),
          /* exposeIncomeAddress */(function (param) {
              return exposeIncomeAddress(worker, ventureId, param);
            })
        ];
}

var Cmd = /* module */[/* make */make];

var make$1 = include[0];

exports.Config = Config;
exports.make = make$1;
exports.updateSession = updateSession;
exports.create = create;
exports.load = load;
exports.proposePartner = proposePartner;
exports.endorsePartner = endorsePartner;
exports.proposePartnerRemoval = proposePartnerRemoval;
exports.endorsePartnerRemoval = endorsePartnerRemoval;
exports.proposePayout = proposePayout;
exports.endorsePayout = endorsePayout;
exports.exposeIncomeAddress = exposeIncomeAddress;
exports.Cmd = Cmd;
/* include Not a pure module */
