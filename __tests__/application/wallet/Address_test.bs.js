// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var NewAddress = require("../../../src/application/wallet/NewAddress.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");

function testCoordinates(expected, param) {
  var addressIdx = param[4];
  var chainIdx = param[3];
  var coSignerIdx = param[2];
  var accountKeyChainIdx = param[1];
  var accountIdx = param[0];
  return Jest.test("should match", (function () {
                return Jest.Expect[/* toEqual */12](expected, Jest.Expect[/* expect */0](/* tuple */[
                                WalletTypes.AccountIndex[/* toInt */0](accountIdx),
                                WalletTypes.AccountKeyChainIndex[/* toInt */0](accountKeyChainIdx),
                                WalletTypes.CoSignerIndex[/* toInt */0](coSignerIdx),
                                WalletTypes.ChainIndex[/* toInt */0](chainIdx),
                                WalletTypes.AddressIndex[/* toInt */0](addressIdx)
                              ]));
              }));
}

var user1 = Fixtures.threeUserSessions[0];

var accountKeyChain = Generators.accountKeyChain(/* :: */[
      user1,
      /* :: */[
        Fixtures.threeUserSessions[1],
        /* :: */[
          Fixtures.threeUserSessions[2],
          /* [] */0
        ]
      ]
    ]);

describe("Coordinates", (function () {
        describe("first coordinates", (function () {
                return testCoordinates(/* tuple */[
                            0,
                            0,
                            2,
                            1,
                            0
                          ], NewAddress.Coordinates[/* nextInternal */1](user1[/* userId */0], /* [] */0, accountKeyChain));
              }));
        describe("next coordinates", (function () {
                var coordinates1 = NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                var coordinates2 = NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                      coordinates1,
                      /* [] */0
                    ], accountKeyChain);
                return testCoordinates(/* tuple */[
                            0,
                            0,
                            2,
                            0,
                            2
                          ], NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                                coordinates2,
                                /* :: */[
                                  coordinates1,
                                  /* [] */0
                                ]
                              ], accountKeyChain));
              }));
        return /* () */0;
      }));

describe("make", (function () {
        return Jest.test("returns an address", (function () {
                      var coordinates = NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                      return Jest.Expect[/* toEqual */12](/* record */[
                                  /* nCoSigners */2,
                                  /* nPubKeys */3,
                                  /* coordinates */coordinates,
                                  /* witnessScript */"5221020e9782b2f322710b493e068305a89f5ea251a599b1be30aed66eb3f9ef77f5dc210211f5757d29e19d91df628e51e219d2c08f09100d12be099e5fa5fe9bda66ea842103ecd7d25cf95c0bc67c0acd8bbb02e4d89a68bd7159703b68c8ac15bb281099ea53ae",
                                  /* redeemScript */"0020037ff9e769b4e13e6d47567412cb338195342685c3a50bd0eb0be0408f3da5c9",
                                  /* address */"2NEdi7RV4F4Ce7hNmEHQRpcSCf2ZUacfDMw"
                                ], Jest.Expect[/* expect */0](NewAddress.make(coordinates, accountKeyChain)));
                    }));
      }));

var G = 0;

var E = 0;

var Address = 0;

exports.G = G;
exports.E = E;
exports.Address = Address;
exports.testCoordinates = testCoordinates;
/* accountKeyChain Not a pure module */
