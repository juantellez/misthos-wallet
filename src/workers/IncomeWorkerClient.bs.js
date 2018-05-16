// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var WebWorker = require("../ffi/WebWorker.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var IncomeWorkerMessage = require("./IncomeWorkerMessage.bs.js");
var Income_workerBsJs = require("./Income_worker.bs.js");

var Config = /* module */[/* decodeOutgoing */IncomeWorkerMessage.decodeOutgoing];

var include = WebWorker.MakeClient([
      IncomeWorkerMessage.decodeOutgoing,
      (function (prim) {
          return prim;
        }),
      (function () {
          return new Income_workerBsJs();
        })
    ]);

var postMessage = include[1];

function updateSession(worker) {
  return Curry._2(postMessage, worker, /* UpdateSession */[WorkerLocalStorage.readBlockstackItemsFromStorage(/* () */0)]);
}

var syncListeners = include[0];

var postMessageSync = include[2];

var handleMessage = include[3];

var make = include[4];

exports.Config = Config;
exports.syncListeners = syncListeners;
exports.postMessage = postMessage;
exports.postMessageSync = postMessageSync;
exports.handleMessage = handleMessage;
exports.make = make;
exports.updateSession = updateSession;
/* include Not a pure module */
