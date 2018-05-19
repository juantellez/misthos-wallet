// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Event = require("../../src/application/events/Event.bs.js");
var Fixtures = require("../helpers/Fixtures.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var WalletTypes = require("../../src/application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var ValidationHelpers = require("../helpers/ValidationHelpers.bs.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

describe("CustodianProposed", (function () {
        Fixtures.withCached(/* None */0, "CustodianProposed", "when proposing a custodian", (function () {
                return Generators.withUserSessions(2);
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withPartner */16](match[1], /* :: */[
                            user1,
                            /* [] */0
                          ], Generators.Log[/* withCustodian */28](user1, /* :: */[
                                user1,
                                /* [] */0
                              ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)))));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                return ValidationHelpers.testValidationResult(ValidationHelpers.constructState(log), Generators.Log[/* lastItem */4](Generators.Log[/* withCustodianProposed */25](match[0], match[1], log)), /* Ok */0);
              }));
        Fixtures.withCached(/* None */0, "CustodianProposed", "when proposing a custodian after removal", (function () {
                return Generators.withUserSessions(2);
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user2 = match[1];
                var user1 = match[0];
                return Generators.Log[/* withCustodianRemoved */32](user2, /* :: */[
                            user1,
                            /* :: */[
                              user2,
                              /* [] */0
                            ]
                          ], Generators.Log[/* withCustodian */28](user2, /* :: */[
                                user1,
                                /* :: */[
                                  user2,
                                  /* [] */0
                                ]
                              ], Generators.Log[/* withPartner */16](user2, /* :: */[
                                    user1,
                                    /* [] */0
                                  ], Generators.Log[/* withCustodian */28](user1, /* :: */[
                                        user1,
                                        /* [] */0
                                      ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)))))));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                return ValidationHelpers.testValidationResult(ValidationHelpers.constructState(log), Generators.Log[/* lastItem */4](Generators.Log[/* withCustodianProposed */25](match[0], match[1], log)), /* Ok */0);
              }));
        describe("validateCustodianData", (function () {
                Fixtures.withCached(/* None */0, "CustodianProposed", "when the custodian is not a partner", (function () {
                        return Generators.withUserSessions(3);
                      }), (function (sessions) {
                        var match = Generators.threeUserSessionsFromArray(sessions);
                        var user1 = match[0];
                        return Generators.Log[/* withPartner */16](match[1], /* :: */[
                                    user1,
                                    /* [] */0
                                  ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1))));
                      }), (function (sessions, log) {
                        var match = Generators.threeUserSessionsFromArray(sessions);
                        var partnerApproval = Event.getPartnerAcceptedExn(Generators.Log[/* lastEvent */5](log));
                        return ValidationHelpers.testDataValidation(Venture__Validation.validateCustodianData, ValidationHelpers.constructState(log), /* record */[
                                    /* partnerId */match[2][/* userId */0],
                                    /* partnerApprovalProcess */partnerApproval[/* processId */0],
                                    /* lastCustodianRemovalProcess : None */0,
                                    /* accountIdx */WalletTypes.AccountIndex[/* default */9]
                                  ], /* BadData */["Partner approval process doesn't match user id"]);
                      }));
                Fixtures.withCached(/* None */0, "CustodianProposed", "when the partner approval process reference is wrong", (function () {
                        return Generators.withUserSessions(2);
                      }), (function (sessions) {
                        var match = Generators.twoUserSessionsFromArray(sessions);
                        var user1 = match[0];
                        return Generators.Log[/* withPartner */16](match[1], /* :: */[
                                    user1,
                                    /* [] */0
                                  ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1))));
                      }), (function (sessions, log) {
                        var match = Generators.twoUserSessionsFromArray(sessions);
                        return ValidationHelpers.testDataValidation(Venture__Validation.validateCustodianData, ValidationHelpers.constructState(log), /* record */[
                                    /* partnerId */match[1][/* userId */0],
                                    /* partnerApprovalProcess */PrimitiveTypes.ProcessId[/* make */10](/* () */0),
                                    /* lastCustodianRemovalProcess : None */0,
                                    /* accountIdx */WalletTypes.AccountIndex[/* default */9]
                                  ], /* BadData */["partner approval process doesn't exist"]);
                      }));
                Fixtures.withCached(/* None */0, "CustodianProposed", "when the account doesn't exist", (function () {
                        return Generators.withUserSessions(2);
                      }), (function (sessions) {
                        var match = Generators.twoUserSessionsFromArray(sessions);
                        var user1 = match[0];
                        return Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1));
                      }), (function (sessions, log) {
                        var match = Generators.twoUserSessionsFromArray(sessions);
                        var partnerApproval = Event.getPartnerAcceptedExn(Generators.Log[/* lastEvent */5](log));
                        return ValidationHelpers.testDataValidation(Venture__Validation.validateCustodianData, ValidationHelpers.constructState(log), /* record */[
                                    /* partnerId */match[0][/* userId */0],
                                    /* partnerApprovalProcess */partnerApproval[/* processId */0],
                                    /* lastCustodianRemovalProcess : None */0,
                                    /* accountIdx */WalletTypes.AccountIndex[/* default */9]
                                  ], /* BadData */["account doesn't exist"]);
                      }));
                return Fixtures.withCached(/* None */0, "CustodianProposed", "when lastCustodianRemovalProcess doesn't match", (function () {
                              return Generators.withUserSessions(2);
                            }), (function (sessions) {
                              var match = Generators.twoUserSessionsFromArray(sessions);
                              var user1 = match[0];
                              return Generators.Log[/* withPartner */16](match[1], /* :: */[
                                          user1,
                                          /* [] */0
                                        ], Generators.Log[/* withCustodian */28](user1, /* :: */[
                                              user1,
                                              /* [] */0
                                            ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)))));
                            }), (function (sessions, log) {
                              var match = Generators.twoUserSessionsFromArray(sessions);
                              var user2 = match[1];
                              var user1 = match[0];
                              var partnerApproval = Event.getPartnerAcceptedExn(Generators.Log[/* lastEvent */5](log));
                              var log$1 = Generators.Log[/* withCustodianRemoved */32](user2, /* :: */[
                                    user1,
                                    /* [] */0
                                  ], Generators.Log[/* withCustodian */28](user2, /* :: */[
                                        user1,
                                        /* :: */[
                                          user2,
                                          /* [] */0
                                        ]
                                      ], log));
                              return ValidationHelpers.testDataValidation(Venture__Validation.validateCustodianData, ValidationHelpers.constructState(log$1), /* record */[
                                          /* partnerId */user2[/* userId */0],
                                          /* partnerApprovalProcess */partnerApproval[/* processId */0],
                                          /* lastCustodianRemovalProcess : None */0,
                                          /* accountIdx */WalletTypes.AccountIndex[/* default */9]
                                        ], /* BadData */["Last removal doesn't match"]);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
