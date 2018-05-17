// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var WebWorker = require("../ffi/WebWorker.bs.js");
var DataWorkerMessage = require("./DataWorkerMessage.bs.js");
var Data_workerBsJs = require("./Data_worker.bs.js");

var Config = /* module */[
  /* encodeIncoming */DataWorkerMessage.encodeIncoming,
  /* decodeIncoming */DataWorkerMessage.decodeIncoming,
  /* decodeOutgoing */DataWorkerMessage.decodeOutgoing
];

var include = WebWorker.MakeClient([
      DataWorkerMessage.decodeOutgoing,
      DataWorkerMessage.encodeIncoming,
      (function () {
          return new Data_workerBsJs();
        })
    ]);

var syncListeners = include[0];

var postMessage = include[1];

var postMessageSync = include[2];

var handleMessage = include[3];

var make = include[4];

exports.Config = Config;
exports.syncListeners = syncListeners;
exports.postMessage = postMessage;
exports.postMessageSync = postMessageSync;
exports.handleMessage = handleMessage;
exports.make = make;
/* include Not a pure module */
