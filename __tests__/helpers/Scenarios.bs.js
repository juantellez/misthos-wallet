// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Json = require("bs-json/src/Json.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Venture = require("../../src/application/Venture.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("../../src/application/events/EventLog.bs.js");
var Fixtures = require("./Fixtures.bs.js");
var ViewModel = require("../../src/view/model/ViewModel.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var CouldNotLoadScenario = Caml_exceptions.create("Scenarios.CouldNotLoadScenario");

var basePath = "__tests__/scenarios/";

var scenarioSession = Belt_Array.getExn(Fixtures.threeUserSessionsArray, 0);

function loadScenario(scenarioName) {
  try {
    return Curry._1(EventLog.decode, Json.parseOrRaise(Fs.readFileSync(basePath + (scenarioName + ".json"), "utf8")));
  }
  catch (exn){
    throw CouldNotLoadScenario;
  }
}

var findCurrentUsers = Curry._2(EventLog.reduce, (function (users, item) {
        var match = item[/* event */0];
        switch (match.tag | 0) {
          case 4 : 
              return Belt_Set.add(users, match[0][/* data */2][/* id */1]);
          case 9 : 
              return Belt_Set.remove(users, match[0][/* data */2][/* id */0]);
          default:
            return users;
        }
      }), PrimitiveTypes.UserId[/* emptySet */9]);

function run(scenarioName, test) {
  describe(scenarioName, (function () {
          var match = Venture.reconstruct(scenarioSession, loadScenario(scenarioName));
          var venture = match[0];
          var eventLog = Venture.getEventLog(venture);
          var currentUsers = Curry._1(findCurrentUsers, eventLog);
          return Curry._1(test, Curry._1(ViewModel.init(Belt_Array.getExn(Belt_Set.toArray(currentUsers), 0)), Venture.getEventLog(venture)));
        }));
  return /* () */0;
}

exports.CouldNotLoadScenario = CouldNotLoadScenario;
exports.basePath = basePath;
exports.scenarioSession = scenarioSession;
exports.loadScenario = loadScenario;
exports.findCurrentUsers = findCurrentUsers;
exports.run = run;
/* scenarioSession Not a pure module */