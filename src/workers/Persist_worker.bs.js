// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Json = require("bs-json/src/Json.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var EventLog = require("../application/events/EventLog.bs.js");
var UserInfo = require("../application/UserInfo.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Blockstack = require("blockstack");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var EncryptionJs = require("blockstack/lib/encryption.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

function logMessage(msg) {
  console.log("[Persist Worker] - " + msg);
  return /* () */0;
}

var CouldNotLoadVenture = Caml_exceptions.create("Persist_worker.CouldNotLoadVenture");

function loadVenture(ventureId) {
  return Blockstack.getFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + "/log.json").then((function (nullLog) {
                if (nullLog == null) {
                  throw CouldNotLoadVenture;
                } else {
                  return Promise.resolve(Curry._1(EventLog.decode, Json.parseOrRaise(nullLog)));
                }
              }));
}

function determinPartnerKeys(localUserId) {
  return Curry._2(EventLog.reduce, (function (keys, param) {
                var $$event = param[/* event */0];
                switch ($$event.tag | 0) {
                  case 3 : 
                      var data = $$event[0][/* data */2];
                      if (PrimitiveTypes.UserId[/* neq */6](data[/* id */0], localUserId)) {
                        return /* :: */[
                                /* tuple */[
                                  data[/* id */0],
                                  data[/* pubKey */1]
                                ],
                                keys
                              ];
                      } else {
                        return keys;
                      }
                  case 6 : 
                      return List.remove_assoc($$event[0][/* data */2][/* id */0], keys);
                  default:
                    return keys;
                }
              }), /* [] */0);
}

function persist(ventureId, eventLog, keys) {
  var logString = Json.stringify(Curry._1(EventLog.encode, eventLog));
  var summaryString = Json.stringify(Curry._1(EventLog.encodeSummary, Curry._1(EventLog.getSummary, eventLog)));
  return List.fold_left((function (promise, param) {
                  var pubKey = param[1];
                  return promise.then((function () {
                                  return Blockstack.putFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/log.json")), Json.stringify(EncryptionJs.encryptECIES(pubKey, logString)), ( {"encrypt": false} ));
                                })).then((function () {
                                return Blockstack.putFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/summary.json")), summaryString, ( {"encrypt": false} ));
                              }));
                }), Promise.resolve(/* () */0), keys).then((function () {
                return Promise.resolve((postMessage(/* VenturePersisted */[ventureId]), /* () */0));
              }));
}

function handleMessage(param) {
  if (param.tag) {
    var id = param[0];
    logMessage("Persisting venture '" + (PrimitiveTypes.VentureId[/* toString */0](id) + "'"));
    loadVenture(id).then((function (eventLog) {
            return persist(id, eventLog, Curry._1(determinPartnerKeys(PrimitiveTypes.UserId[/* fromString */1](Js_option.getExn(WorkerLocalStorage.getItem("localUserId")))), eventLog));
          }));
    return /* () */0;
  } else {
    logMessage("Updating session in localStorage");
    WorkerLocalStorage.setBlockstackItems(param[1]);
    return WorkerLocalStorage.setItem("localUserId", PrimitiveTypes.UserId[/* toString */0](param[0]));
  }
}

self.onmessage = (function (msg) {
    return handleMessage(msg.data);
  });

var Message = 0;

exports.Message = Message;
exports.logMessage = logMessage;
exports.CouldNotLoadVenture = CouldNotLoadVenture;
exports.loadVenture = loadVenture;
exports.determinPartnerKeys = determinPartnerKeys;
exports.persist = persist;
exports.handleMessage = handleMessage;
/*  Not a pure module */