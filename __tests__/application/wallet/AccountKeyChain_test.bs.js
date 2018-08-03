// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../../../src/application/PrimitiveTypes.bs.js");
var AccountKeyChain = require("../../../src/application/wallet/AccountKeyChain.bs.js");

describe("Identifier", (function () {
        return Jest.test("Creates uniq hash of the custodianKeyChains", (function () {
                      var user2 = Fixtures.threeUserSessions[1];
                      var user1 = Fixtures.threeUserSessions[0];
                      var custodianKeyChain1 = Generators.custodianKeyChain(/* None */0, /* None */0, PrimitiveTypes.VentureId[/* fromString */1]("test"), 0, user1);
                      var custodianKeyChain2 = Generators.custodianKeyChain(/* None */0, /* None */0, PrimitiveTypes.VentureId[/* fromString */1]("test"), 0, user2);
                      var identifier = AccountKeyChain.Identifier[/* make */2](1, /* :: */[
                            /* tuple */[
                              user1[/* userId */0],
                              custodianKeyChain1
                            ],
                            /* :: */[
                              /* tuple */[
                                user2[/* userId */0],
                                custodianKeyChain2
                              ],
                              /* [] */0
                            ]
                          ]);
                      return Jest.Expect[/* toEqual */12]("cba2209dcdabcc79ed56276593cc1811280afdbe9d06a19a018e9dcf431d647a", Jest.Expect[/* expect */0](identifier));
                    }));
      }));

describe("Collection", (function () {
        var match = Generators.twoUserSessions(/* () */0);
        var user2 = match[1];
        var user1 = match[0];
        var accountKeyChain1 = Generators.accountKeyChain(/* None */0, /* None */0, /* :: */[
              user1,
              /* :: */[
                user2,
                /* [] */0
              ]
            ]);
        var accountKeyChain2 = Generators.accountKeyChain(/* None */0, /* Some */[1], /* :: */[
              user1,
              /* :: */[
                user2,
                /* [] */0
              ]
            ]);
        var keyChains = AccountKeyChain.Collection[/* add */1](accountKeyChain1, AccountKeyChain.Collection[/* add */1](accountKeyChain2, AccountKeyChain.Collection[/* empty */0]));
        return Jest.test("lookup", (function () {
                      return Jest.Expect[/* toEqual */12](accountKeyChain1, Jest.Expect[/* expect */0](AccountKeyChain.Collection[/* lookup */2](WalletTypes.AccountIndex[/* default */11], accountKeyChain1[/* identifier */1], keyChains)));
                    }));
      }));

var G = 0;

exports.G = G;
/*  Not a pure module */
