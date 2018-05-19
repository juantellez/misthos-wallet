// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Fixtures = require("../helpers/Fixtures.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var WalletHelpers = require("../helpers/WalletHelpers.bs.js");

describe("Venture__Wallet", (function () {
        return Fixtures.withCached(/* None */0, "Venture__Wallet", "nextIncomeAddress", (function () {
                      return Fixtures.threeUserSessionsArray;
                    }), (function (sessions) {
                      var match = Generators.threeUserSessionsFromArray(sessions);
                      var user2 = match[1];
                      var user1 = match[0];
                      return Generators.Log[/* withAccountKeyChainActivated */35](/* None */0, user2, Generators.Log[/* withAccountKeyChainActivated */35](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */34](Generators.Log[/* withCustodianKeyChain */33](/* None */0, /* None */0, user2, Generators.Log[/* withCustodianKeyChain */33](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */28](user2, /* :: */[
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
                                                            ], Generators.Log[/* withAccount */24](user1, Generators.Log[/* withFirstPartner */17](user1)(Fixtures.createVenture(user1)))))))))));
                    }), (function (sessions, log) {
                      var match = Generators.threeUserSessionsFromArray(sessions);
                      var user3 = match[2];
                      var user2 = match[1];
                      var user1 = match[0];
                      WalletHelpers.testNextIncomeAddress(user1, "2NCAxqkK9bhRQWssyrMqJhXS65xmUCWraXT", WalletHelpers.testNextIncomeAddress(user2, "2NGFyACMJG6KJ9Db92n9MM2nNtR4r4tUNFW", WalletHelpers.testNextIncomeAddress(user1, "2MtvnaAWnfkSBU7NbpSfMRrCKSTgLeRVd93", WalletHelpers.constructState(log))));
                      var log$1 = Generators.Log[/* withAccountKeyChainActivated */35](/* None */0, user3, Generators.Log[/* withAccountKeyChainActivated */35](/* None */0, user2, Generators.Log[/* withAccountKeyChainActivated */35](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */34](Generators.Log[/* withCustodianKeyChain */33](/* None */0, /* None */0, user3, Generators.Log[/* withCustodian */28](user3, /* :: */[
                                                user1,
                                                /* :: */[
                                                  user2,
                                                  /* :: */[
                                                    user3,
                                                    /* [] */0
                                                  ]
                                                ]
                                              ], Generators.Log[/* withPartner */16](user3, /* :: */[
                                                    user1,
                                                    /* :: */[
                                                      user2,
                                                      /* [] */0
                                                    ]
                                                  ], log)))))));
                      WalletHelpers.testNextIncomeAddress(user3, "2N85sud6RgkaAEPitqdrNXsMbADYzXCWc7T", WalletHelpers.testNextIncomeAddress(user2, "2N1sd2funBMd3ntLSbJrALAz3CJxEVsAPV7", WalletHelpers.testNextIncomeAddress(user3, "2NCGfPo6ehd2cgwFNE2ocqUFpv8rtcN3TGj", WalletHelpers.constructState(log$1))));
                      return /* () */0;
                    }));
      }));

/*  Not a pure module */
