// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Event = require("../../src/application/events/Event.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var WalletTypes = require("../../src/application/wallet/WalletTypes.bs.js");
var ValidationHelpers = require("../helpers/ValidationHelpers.bs.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

describe("AccountKeyChainUpdate", (function () {
        describe("when everything is fine", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */26](user1, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withAccount */22](user1, Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)))));
                return ValidationHelpers.testValidationResult(ValidationHelpers.constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withAccountKeyChain */32](log)), /* Ok */0);
              }));
        describe("when the account doesn't exist", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */26](user1, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withAccount */22](user1, Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)))));
                var match$1 = Event.getAccountKeyChainUpdatedExn(Generators.Log[/* lastEvent */4](Generators.Log[/* withAccountKeyChain */32](log)));
                var keyChain = match$1[/* keyChain */0];
                var partial_arg = Generators.Log[/* systemIssuer */2](log);
                return ValidationHelpers.testDataValidation((function (param, param$1) {
                              return ValidationHelpers.withSystemIssuer(partial_arg, Venture__Validation.validateAccountKeyChainUpdated, param, param$1);
                            }), ValidationHelpers.constructState(log), /* record */[/* keyChain : record */[
                              /* accountIdx */WalletTypes.AccountIndex[/* fromInt */1](1),
                              /* keyChainIdx */keyChain[/* keyChainIdx */1],
                              /* nCoSigners */keyChain[/* nCoSigners */2],
                              /* custodianKeyChains */keyChain[/* custodianKeyChains */3]
                            ]], /* BadData */["Account doesn't exist"]);
              }));
        describe("when the AccountKeyChainIndex is wrong", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */26](user1, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withAccount */22](user1, Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)))));
                var match$1 = Event.getAccountKeyChainUpdatedExn(Generators.Log[/* lastEvent */4](Generators.Log[/* withAccountKeyChain */32](log)));
                var keyChain = match$1[/* keyChain */0];
                var partial_arg = Generators.Log[/* systemIssuer */2](log);
                return ValidationHelpers.testDataValidation((function (param, param$1) {
                              return ValidationHelpers.withSystemIssuer(partial_arg, Venture__Validation.validateAccountKeyChainUpdated, param, param$1);
                            }), ValidationHelpers.constructState(log), /* record */[/* keyChain : record */[
                              /* accountIdx */keyChain[/* accountIdx */0],
                              /* keyChainIdx */WalletTypes.AccountKeyChainIndex[/* fromInt */1](1),
                              /* nCoSigners */keyChain[/* nCoSigners */2],
                              /* custodianKeyChains */keyChain[/* custodianKeyChains */3]
                            ]], /* BadData */["Bad AccountKeyChainIndex"]);
              }));
        describe("when the custodian list is wrong", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user2, Generators.Log[/* withCustodian */26](user2, /* :: */[
                          user1,
                          /* :: */[
                            user2,
                            /* [] */0
                          ]
                        ], Generators.Log[/* withPartner */14](user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */26](user1, /* :: */[
                                      user1,
                                      /* [] */0
                                    ], Generators.Log[/* withAccount */22](user1, Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))))))));
                var match$1 = Event.getAccountKeyChainUpdatedExn(Generators.Log[/* lastEvent */4](Generators.Log[/* withAccountKeyChain */32](log)));
                var keyChain = match$1[/* keyChain */0];
                var partial_arg = Generators.Log[/* systemIssuer */2](log);
                return ValidationHelpers.testDataValidation((function (param, param$1) {
                              return ValidationHelpers.withSystemIssuer(partial_arg, Venture__Validation.validateAccountKeyChainUpdated, param, param$1);
                            }), ValidationHelpers.constructState(log), /* record */[/* keyChain : record */[
                              /* accountIdx */keyChain[/* accountIdx */0],
                              /* keyChainIdx */keyChain[/* keyChainIdx */1],
                              /* nCoSigners */keyChain[/* nCoSigners */2],
                              /* custodianKeyChains : :: */[
                                List.hd(keyChain[/* custodianKeyChains */3]),
                                /* [] */0
                              ]
                            ]], /* BadData */["Wrong custodians"]);
              }));
        describe("when a custodian key chain is wrong", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianKeyChain */31](/* Some */[1], /* None */0, user1, Generators.Log[/* withPartnerRemoved */19](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withPartner */14](user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withCustodianKeyChain */31](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */26](user1, /* :: */[
                                      user1,
                                      /* [] */0
                                    ], Generators.Log[/* withAccount */22](user1, Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))))))));
                var match$1 = Event.getAccountKeyChainUpdatedExn(Generators.Log[/* lastEvent */4](Generators.Log[/* withAccountKeyChain */32](log)));
                var keyChain = match$1[/* keyChain */0];
                var partial_arg = Generators.Log[/* systemIssuer */2](log);
                return ValidationHelpers.testDataValidation((function (param, param$1) {
                              return ValidationHelpers.withSystemIssuer(partial_arg, Venture__Validation.validateAccountKeyChainUpdated, param, param$1);
                            }), ValidationHelpers.constructState(log), /* record */[/* keyChain : record */[
                              /* accountIdx */keyChain[/* accountIdx */0],
                              /* keyChainIdx */keyChain[/* keyChainIdx */1],
                              /* nCoSigners */keyChain[/* nCoSigners */2],
                              /* custodianKeyChains : :: */[
                                /* tuple */[
                                  user1[/* userId */0],
                                  Generators.custodianKeyChain(/* None */0, Generators.Log[/* ventureId */1](log), 0, user1)
                                ],
                                List.remove_assoc(user1[/* userId */0], keyChain[/* custodianKeyChains */3])
                              ]
                            ]], /* BadData */["Bad CustodianKeyChain"]);
              }));
        return /* () */0;
      }));

/*  Not a pure module */