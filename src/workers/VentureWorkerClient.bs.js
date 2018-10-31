// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var WebWorker = require("../ffi/WebWorker.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");
var Venture_workerBsJs = require("./Venture_worker.bs.js");

var Config = /* module */[
  /* UnknownMessage */VentureWorkerMessage.UnknownMessage,
  /* encodeSuccess */VentureWorkerMessage.encodeSuccess,
  /* decodeSuccess */VentureWorkerMessage.decodeSuccess,
  /* encodeError */VentureWorkerMessage.encodeError,
  /* decodeError */VentureWorkerMessage.decodeError,
  /* encodeResponse */VentureWorkerMessage.encodeResponse,
  /* decodeResponse */VentureWorkerMessage.decodeResponse,
  /* encodeIncoming */VentureWorkerMessage.encodeIncoming,
  /* decodeIncoming */VentureWorkerMessage.decodeIncoming,
  /* encodeOutgoing */VentureWorkerMessage.encodeOutgoing,
  /* decodeOutgoing */VentureWorkerMessage.decodeOutgoing
];

var include = WebWorker.MakeClient([
      VentureWorkerMessage.decodeOutgoing,
      VentureWorkerMessage.encodeIncoming,
      (function (prim) {
          return new Venture_workerBsJs();
        })
    ]);

var postMessage = include[1];

var postMessageSync = include[2];

function updateSession(worker) {
  Curry._2(postMessage, worker, /* UpdateSession */Block.__(0, [WorkerLocalStorage.readBlockstackItemsFromStorage(/* () */0)]));
  return /* () */0;
}

function create(name, accountSettings, initialPolicies, worker) {
  return Curry._2(postMessage, worker, /* Create */Block.__(1, [
                name,
                accountSettings,
                initialPolicies
              ]));
}

function load(ventureId, worker) {
  return Curry._2(postMessage, worker, /* Load */Block.__(2, [ventureId]));
}

function joinVia(ventureId, userId, worker) {
  return Curry._2(postMessage, worker, /* JoinVia */Block.__(3, [
                ventureId,
                userId
              ]));
}

function proposePartner(worker, ventureId, prospectId) {
  return Curry._2(postMessage, worker, /* ProposePartner */Block.__(4, [
                ventureId,
                prospectId
              ]));
}

function rejectPartner(worker, ventureId, processId) {
  return Curry._2(postMessage, worker, /* RejectPartner */Block.__(5, [
                ventureId,
                processId
              ]));
}

function endorsePartner(worker, ventureId, processId) {
  return Curry._2(postMessage, worker, /* EndorsePartner */Block.__(6, [
                ventureId,
                processId
              ]));
}

function proposePartnerRemoval(worker, ventureId, partnerId) {
  return Curry._2(postMessage, worker, /* ProposePartnerRemoval */Block.__(7, [
                ventureId,
                partnerId
              ]));
}

function rejectPartnerRemoval(worker, ventureId, processId) {
  return Curry._2(postMessage, worker, /* RejectPartnerRemoval */Block.__(8, [
                ventureId,
                processId
              ]));
}

function endorsePartnerRemoval(worker, ventureId, processId) {
  return Curry._2(postMessage, worker, /* EndorsePartnerRemoval */Block.__(9, [
                ventureId,
                processId
              ]));
}

function submitCustodianKeyChain(worker, ventureId, keyChain) {
  return Curry._2(postMessage, worker, /* SubmitCustodianKeyChain */Block.__(10, [
                ventureId,
                keyChain
              ]));
}

function proposePayout(worker, ventureId, accountIdx, payoutTx, signatures) {
  return Curry._2(postMessage, worker, /* ProposePayout */Block.__(11, [
                ventureId,
                accountIdx,
                payoutTx,
                signatures
              ]));
}

function rejectPayout(worker, ventureId, processId) {
  return Curry._2(postMessage, worker, /* RejectPayout */Block.__(12, [
                ventureId,
                processId
              ]));
}

function endorsePayout(worker, ventureId, signatures, processId) {
  return Curry._2(postMessage, worker, /* EndorsePayout */Block.__(13, [
                ventureId,
                signatures,
                processId
              ]));
}

function signPayout(worker, ventureId, signatures, processId) {
  return Curry._2(postMessage, worker, /* SignPayout */Block.__(14, [
                ventureId,
                signatures,
                processId
              ]));
}

function exposeIncomeAddress(worker, ventureId, accountIdx) {
  return Curry._2(postMessageSync, worker, /* ExposeIncomeAddress */Block.__(15, [
                  ventureId,
                  accountIdx
                ])).then((function (param) {
                if (typeof param === "number" || param.tag !== 1) {
                  return Promise.resolve("BAD");
                } else {
                  return Promise.resolve(param[1]);
                }
              }));
}

function make(worker, ventureId) {
  return /* record */[
          /* proposePartner */(function (param) {
              return proposePartner(worker, ventureId, param);
            }),
          /* endorsePartner */(function (param) {
              return endorsePartner(worker, ventureId, param);
            }),
          /* rejectPartner */(function (param) {
              return rejectPartner(worker, ventureId, param);
            }),
          /* proposePartnerRemoval */(function (param) {
              return proposePartnerRemoval(worker, ventureId, param);
            }),
          /* rejectPartnerRemoval */(function (param) {
              return rejectPartnerRemoval(worker, ventureId, param);
            }),
          /* endorsePartnerRemoval */(function (param) {
              return endorsePartnerRemoval(worker, ventureId, param);
            }),
          /* submitCustodianKeyChain */(function (param) {
              return submitCustodianKeyChain(worker, ventureId, param);
            }),
          /* proposePayout */(function (param, param$1, param$2) {
              return proposePayout(worker, ventureId, param, param$1, param$2);
            }),
          /* endorsePayout */(function (param, param$1) {
              return endorsePayout(worker, ventureId, param, param$1);
            }),
          /* signPayout */(function (param, param$1) {
              return signPayout(worker, ventureId, param, param$1);
            }),
          /* rejectPayout */(function (param) {
              return rejectPayout(worker, ventureId, param);
            }),
          /* exposeIncomeAddress */(function (param) {
              return exposeIncomeAddress(worker, ventureId, param);
            })
        ];
}

var Cmd = /* module */[/* make */make];

var syncListeners = include[0];

var handleMessage = include[3];

var make$1 = include[4];

exports.Config = Config;
exports.syncListeners = syncListeners;
exports.postMessage = postMessage;
exports.postMessageSync = postMessageSync;
exports.handleMessage = handleMessage;
exports.make = make$1;
exports.updateSession = updateSession;
exports.create = create;
exports.load = load;
exports.joinVia = joinVia;
exports.proposePartner = proposePartner;
exports.rejectPartner = rejectPartner;
exports.endorsePartner = endorsePartner;
exports.proposePartnerRemoval = proposePartnerRemoval;
exports.rejectPartnerRemoval = rejectPartnerRemoval;
exports.endorsePartnerRemoval = endorsePartnerRemoval;
exports.submitCustodianKeyChain = submitCustodianKeyChain;
exports.proposePayout = proposePayout;
exports.rejectPayout = rejectPayout;
exports.endorsePayout = endorsePayout;
exports.signPayout = signPayout;
exports.exposeIncomeAddress = exposeIncomeAddress;
exports.Cmd = Cmd;
/* include Not a pure module */
