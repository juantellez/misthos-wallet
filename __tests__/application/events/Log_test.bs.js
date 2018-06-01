// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Log = require("../../../src/application/events/Log.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var BitcoinjsLib = require("bitcoinjs-lib");

function encode(prim) {
  return prim;
}

var TestItem = /* module */[
  /* decode */Json_decode.string,
  /* encode */encode
];

var TestLog = Log.Make([
      encode,
      Json_decode.string
    ]);

var keyPair = BitcoinjsLib.ECPair.makeRandom();

describe("findNewItems", (function () {
        return Jest.test("preserve order", (function () {
                      var log = Curry._3(TestLog[/* append */2], keyPair, " the huskies go,", Curry._3(TestLog[/* append */2], keyPair, "Watch out where", Curry._1(TestLog[/* make */0], /* () */0))[1])[1];
                      var other = Curry._3(TestLog[/* append */2], keyPair, " that yellow snow", Curry._3(TestLog[/* append */2], keyPair, " eat", Curry._3(TestLog[/* append */2], keyPair, " and don't you", log)[1])[1])[1];
                      var result = $$Array.fold_left((function (state, param) {
                              return state + param[/* event */0];
                            }), "", Curry._2(TestLog[/* findNewItems */6], other, log));
                      return Jest.Expect[/* toEqual */12](" and don't you eat that yellow snow", Jest.Expect[/* expect */0](result));
                    }));
      }));

exports.TestItem = TestItem;
/* TestLog Not a pure module */
