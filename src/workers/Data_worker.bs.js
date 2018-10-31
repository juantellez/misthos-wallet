// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var LogSync = require("./LogSync.bs.js");
var Venture = require("../application/Venture.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var EventLog = require("../application/events/EventLog.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var WalletSync = require("./WalletSync.bs.js");
var WorkerUtils = require("./WorkerUtils.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var DataWorkerMessage = require("./DataWorkerMessage.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

var logLabel = "[Data Worker]";

function logMessage(param) {
  return WorkerUtils.logMessage(logLabel, param);
}

function logError(param) {
  return WorkerUtils.logError(logLabel, param);
}

function catchAndLogError(param) {
  return WorkerUtils.catchAndLogError(logLabel, param);
}

function handleMsg(venturesPromise, doWork, msg) {
  return venturesPromise.then((function (param) {
                var ventures = param[1];
                var storagePrefix = param[0];
                if (typeof msg === "number") {
                  logMessage("Handling 'SessionPending'");
                  return Promise.resolve(/* tuple */[
                              storagePrefix,
                              PrimitiveTypes.VentureId[/* makeMap */8](/* () */0)
                            ]);
                } else {
                  switch (msg.tag | 0) {
                    case 0 : 
                        var storagePrefix$1 = msg[1];
                        logMessage("Handling 'SessionStarted'");
                        WorkerLocalStorage.setBlockstackItems(msg[0]);
                        return Venture.Index[/* load */0](/* () */0).then((function (param) {
                                      return Belt_List.reduce(param[/* ventures */0], Promise.resolve(PrimitiveTypes.VentureId[/* makeMap */8](/* () */0)), (function (p, param) {
                                                      var id = param[/* id */0];
                                                      return p.then((function (ventures) {
                                                                    return WorkerUtils.loadVenture(id).then((function (venture) {
                                                                                    Curry._2(doWork, storagePrefix$1, Belt_Map.mergeMany(PrimitiveTypes.VentureId[/* makeMap */8](/* () */0), /* array */[/* tuple */[
                                                                                                id,
                                                                                                venture
                                                                                              ]]));
                                                                                    return Promise.resolve(Belt_Map.set(ventures, id, venture));
                                                                                  })).catch((function (err) {
                                                                                  logError(err);
                                                                                  return Promise.resolve(ventures);
                                                                                }));
                                                                  }));
                                                    })).then((function (ventures) {
                                                    return Promise.resolve(/* tuple */[
                                                                storagePrefix$1,
                                                                ventures
                                                              ]);
                                                  }));
                                    }));
                    case 3 : 
                        logMessage("Handling 'VentureLoaded'");
                        return Promise.resolve(/* tuple */[
                                    storagePrefix,
                                    Belt_Map.set(ventures, msg[0], msg[1])
                                  ]);
                    case 4 : 
                        logMessage("Handling 'VentureCreated'");
                        return Promise.resolve(/* tuple */[
                                    storagePrefix,
                                    Belt_Map.set(ventures, msg[0], msg[1])
                                  ]);
                    case 5 : 
                        var ventureId = msg[0];
                        logMessage("Handling 'NewItems'");
                        var venture = Belt_Map.getExn(ventures, ventureId);
                        return Promise.resolve(/* tuple */[
                                    storagePrefix,
                                    Belt_Map.set(ventures, ventureId, Curry._2(EventLog.appendItems, msg[1], venture))
                                  ]);
                    default:
                      return Promise.resolve(/* tuple */[
                                  storagePrefix,
                                  ventures
                                ]);
                  }
                }
              }));
}

var intervalId = /* record */[/* contents */undefined];

var venturesPromise = /* record */[/* contents */Promise.resolve(/* tuple */[
        "",
        PrimitiveTypes.VentureId[/* makeMap */8](/* () */0)
      ])];

self.onmessage = (function (msg) {
    var doWork = function (storagePrefix, ventures) {
      WalletSync.syncWallets(ventures);
      return LogSync.syncLogs(storagePrefix, ventures);
    };
    venturesPromise[0] = handleMsg(venturesPromise[0], doWork, DataWorkerMessage.decodeIncoming(msg.data.payload));
    var id = intervalId[0];
    intervalId[0] = id !== undefined ? id : Js_primitive.some(setInterval((function (param) {
                  return catchAndLogError(venturesPromise[0].then((function (param) {
                                    return Promise.resolve(doWork(param[0], param[1]));
                                  })));
                }), 5000));
    return /* () */0;
  });

var fiveSecondsInMilliseconds = 5000;

var syncInterval = 5000;

exports.logLabel = logLabel;
exports.logMessage = logMessage;
exports.logError = logError;
exports.catchAndLogError = catchAndLogError;
exports.fiveSecondsInMilliseconds = fiveSecondsInMilliseconds;
exports.syncInterval = syncInterval;
exports.handleMsg = handleMsg;
exports.intervalId = intervalId;
exports.venturesPromise = venturesPromise;
/*  Not a pure module */
