// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../../src/application/wallet/BTC.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Network = require("../../../src/application/wallet/Network.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var PayoutTransaction = require("../../../src/application/wallet/PayoutTransaction.bs.js");

describe("build", (function () {
        var inputs = (function (param) {
              return Belt_Set.fromArray(param, Network.TxInputCmp);
            })(/* array */[
              /* record */[
                /* txId */"d66c39a24f63d80c13e44cf1ce562618d1d0d92675118aa331e5367a7ddb9de7",
                /* txOutputN */0,
                /* address */"2N3gWQwj2RrHaw7rWmbr1vKkzBnutSMp2LE",
                /* value */BTC.fromSatoshis(/* int64 */[
                      /* hi */0,
                      /* lo */10000
                    ]),
                /* nCoSigners */1,
                /* nPubKeys */1,
                /* coordinates : tuple */[
                  WalletTypes.AccountIndex[/* first */2],
                  "identifier",
                  WalletTypes.CoSignerIndex[/* first */2],
                  WalletTypes.ChainIndex[/* externalChain */9],
                  WalletTypes.AddressIndex[/* first */2]
                ]
              ],
              /* record */[
                /* txId */"d66c39a24f63d80c13e44cf1ce562618d1d0d92675118aa331e5367a7ddb9de7",
                /* txOutputN */1,
                /* address */"2N3CDv7U6xVYmNqdvNscKBWwUYky7SM6Wdq",
                /* value */BTC.fromSatoshis(/* int64 */[
                      /* hi */0,
                      /* lo */5000
                    ]),
                /* nCoSigners */1,
                /* nPubKeys */1,
                /* coordinates : tuple */[
                  WalletTypes.AccountIndex[/* first */2],
                  "identifier",
                  WalletTypes.CoSignerIndex[/* first */2],
                  WalletTypes.ChainIndex[/* externalChain */9],
                  WalletTypes.AddressIndex[/* next */3](WalletTypes.AddressIndex[/* first */2])
                ]
              ]
            ]);
        var changeAddress_002 = /* coordinates : tuple */[
          WalletTypes.AccountIndex[/* first */2],
          "identifier",
          WalletTypes.CoSignerIndex[/* first */2],
          WalletTypes.ChainIndex[/* externalChain */9],
          WalletTypes.AddressIndex[/* first */2]
        ];
        var changeAddress = /* record */[
          /* nCoSigners */1,
          /* nPubKeys */1,
          changeAddress_002,
          /* witnessScript */"51210358ebee38e86598266dc351dfec81c0bd98e3a90a4e93bff72003569f2b02d13351ae",
          /* redeemScript */"002027fa0596838478a59b5c0512acf480fdba510cd320def9e3d9e9d27a13b7e72f",
          /* address */"2N3gWQwj2RrHaw7rWmbr1vKkzBnutSMp2LE"
        ];
        Jest.test("uses as many inputs as necessary", (function () {
                var payoutTx = PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                      /* tuple */[
                        "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                        BTC.fromSatoshis(/* int64 */[
                              /* hi */0,
                              /* lo */10000
                            ])
                      ],
                      /* [] */0
                    ], BTC.fromSatoshis(/* int64 */[
                          /* hi */0,
                          /* lo */1
                        ]), changeAddress, /* Regtest */0);
                var changeUsed = Js_option.isSome(payoutTx[/* changeAddress */3]);
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            2,
                            true
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                payoutTx[/* usedInputs */1].length,
                                changeUsed
                              ]));
              }));
        Jest.test("uses smallest possible input", (function () {
                var payoutTx = PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                      /* tuple */[
                        "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                        BTC.fromSatoshis(/* int64 */[
                              /* hi */0,
                              /* lo */4000
                            ])
                      ],
                      /* [] */0
                    ], BTC.fromSatoshis(/* int64 */[
                          /* hi */0,
                          /* lo */1
                        ]), changeAddress, /* Regtest */0);
                var changeUsed = Js_option.isSome(payoutTx[/* changeAddress */3]);
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            1,
                            true
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                Caml_array.caml_array_get(payoutTx[/* usedInputs */1], 0)[/* txOutputN */1],
                                changeUsed
                              ]));
              }));
        Jest.test("doesn't use change address if not worth it", (function () {
                var payoutTx = PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                      /* tuple */[
                        "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                        BTC.fromSatoshis(/* int64 */[
                              /* hi */0,
                              /* lo */9500
                            ])
                      ],
                      /* [] */0
                    ], BTC.fromSatoshis(/* int64 */[
                          /* hi */0,
                          /* lo */1
                        ]), changeAddress, /* Regtest */0);
                var changeUsed = Js_option.isSome(payoutTx[/* changeAddress */3]);
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            0,
                            false
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                Caml_array.caml_array_get(payoutTx[/* usedInputs */1], 0)[/* txOutputN */1],
                                changeUsed
                              ]));
              }));
        Jest.test("respects mandatory inputs", (function () {
                var payoutTx = PayoutTransaction.build(Belt_Set.keepU(inputs, (function (input) {
                            return input[/* txOutputN */1] === 1;
                          })), inputs, /* :: */[
                      /* tuple */[
                        "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                        BTC.fromSatoshis(/* int64 */[
                              /* hi */0,
                              /* lo */6000
                            ])
                      ],
                      /* [] */0
                    ], BTC.fromSatoshis(/* int64 */[
                          /* hi */0,
                          /* lo */1
                        ]), changeAddress, /* Regtest */0);
                var changeUsed = Js_option.isSome(payoutTx[/* changeAddress */3]);
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            2,
                            true
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                payoutTx[/* usedInputs */1].length,
                                changeUsed
                              ]));
              }));
        Jest.test("raises when there aren't enough funds", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function () {
                                  return PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                                              /* tuple */[
                                                "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                                                BTC.fromSatoshis(/* int64 */[
                                                      /* hi */0,
                                                      /* lo */15000
                                                    ])
                                              ],
                                              /* [] */0
                                            ], BTC.fromSatoshis(/* int64 */[
                                                  /* hi */0,
                                                  /* lo */1
                                                ]), changeAddress, /* Regtest */0);
                                }), /* () */0));
              }));
        Jest.test("summary", (function () {
                var summary = PayoutTransaction.summary(/* Regtest */0, PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                          /* tuple */[
                            "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                            BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */9800
                                ])
                          ],
                          /* [] */0
                        ], BTC.fromSatoshis(/* int64 */[
                              /* hi */0,
                              /* lo */1
                            ]), changeAddress, /* Regtest */0));
                return Jest.Expect[/* toEqual */12](/* record */[
                            /* reserved */BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */15000
                                ]),
                            /* spentWithFees */BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */10370
                                ]),
                            /* misthosFee */BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */285
                                ]),
                            /* networkFee */BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */285
                                ])
                          ], Jest.Expect[/* expect */0](summary));
              }));
        describe("max", (function () {
                var destinations_000 = /* tuple */[
                  "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                  BTC.fromSatoshis(/* int64 */[
                        /* hi */0,
                        /* lo */5000
                      ])
                ];
                var destinations = /* :: */[
                  destinations_000,
                  /* [] */0
                ];
                var max = PayoutTransaction.max(inputs, "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU", destinations, BTC.fromSatoshis(/* int64 */[
                          /* hi */0,
                          /* lo */1
                        ]), /* Regtest */0);
                Jest.test("sending max amount works", (function () {
                        var summary = PayoutTransaction.summary(/* Regtest */0, PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                                  /* tuple */[
                                    "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                                    max
                                  ],
                                  destinations
                                ], BTC.fromSatoshis(/* int64 */[
                                      /* hi */0,
                                      /* lo */1
                                    ]), changeAddress, /* Regtest */0));
                        return Jest.Expect[/* toEqual */12](/* record */[
                                    /* reserved */BTC.fromSatoshis(/* int64 */[
                                          /* hi */0,
                                          /* lo */15000
                                        ]),
                                    /* spentWithFees */BTC.fromSatoshis(/* int64 */[
                                          /* hi */0,
                                          /* lo */15000
                                        ]),
                                    /* misthosFee */BTC.fromSatoshis(/* int64 */[
                                          /* hi */0,
                                          /* lo */414
                                        ]),
                                    /* networkFee */BTC.fromSatoshis(/* int64 */[
                                          /* hi */0,
                                          /* lo */323
                                        ])
                                  ], Jest.Expect[/* expect */0](summary));
                      }));
                return Jest.test("Spending more than max will throw an exception", (function () {
                              return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function () {
                                                return PayoutTransaction.build(Network.inputSet(/* () */0), inputs, /* :: */[
                                                            /* tuple */[
                                                              "mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU",
                                                              max.plus(BTC.fromSatoshis(/* int64 */[
                                                                        /* hi */0,
                                                                        /* lo */50
                                                                      ]))
                                                            ],
                                                            destinations
                                                          ], BTC.fromSatoshis(/* int64 */[
                                                                /* hi */0,
                                                                /* lo */1
                                                              ]), changeAddress, /* Regtest */0);
                                              }), /* () */0));
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
