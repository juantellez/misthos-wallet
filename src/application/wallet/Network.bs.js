// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Address = require("./Address.bs.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var BitcoindClient = require("./BitcoindClient.bs.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var SmartbitClient = require("./SmartbitClient.bs.js");

function encode(param) {
  switch (param) {
    case 0 : 
        return "regtest";
    case 1 : 
        return "testnet";
    case 2 : 
        return "mainnet";
    
  }
}

function decode(raw) {
  var name = Json_decode.string(raw);
  switch (name) {
    case "mainnet" : 
        return /* Mainnet */2;
    case "regtest" : 
        return /* Regtest */0;
    case "testnet" : 
        return /* Testnet */1;
    default:
      return Js_exn.raiseError("Network.decode");
  }
}

function cmp(param, param$1) {
  return Caml_primitive.caml_string_compare(param[/* txId */0] + String(param[/* txOutputN */1]), param$1[/* txId */0] + String(param$1[/* txOutputN */1]));
}

var TxInputCmp = Belt_Id.MakeComparableU(/* module */[/* cmp */cmp]);

function inputSet() {
  return Belt_Set.make(TxInputCmp);
}

function encodeInput(input) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "txId",
                input[/* txId */0]
              ],
              /* :: */[
                /* tuple */[
                  "txOutputN",
                  input[/* txOutputN */1]
                ],
                /* :: */[
                  /* tuple */[
                    "address",
                    input[/* address */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "value",
                      BTC.encode(input[/* value */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "nCoSigners",
                        input[/* nCoSigners */4]
                      ],
                      /* :: */[
                        /* tuple */[
                          "nPubKeys",
                          input[/* nPubKeys */5]
                        ],
                        /* :: */[
                          /* tuple */[
                            "coordinates",
                            Address.Coordinates[/* encode */9](input[/* coordinates */6])
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function decodeInput(raw) {
  return /* record */[
          /* txId */Json_decode.field("txId", Json_decode.string, raw),
          /* txOutputN */Json_decode.field("txOutputN", Json_decode.$$int, raw),
          /* address */Json_decode.field("address", Json_decode.string, raw),
          /* value */Json_decode.field("value", BTC.decode, raw),
          /* nCoSigners */Json_decode.field("nCoSigners", Json_decode.$$int, raw),
          /* nPubKeys */Json_decode.field("nPubKeys", Json_decode.$$int, raw),
          /* coordinates */Json_decode.field("coordinates", Address.Coordinates[/* decode */10], raw)
        ];
}

function Make(Client) {
  var network = Client[/* network */0];
  var transactionInfo = Client[/* getTransactionInfo */2];
  var transactionInputs = function (addresses) {
    return Curry._1(Client[/* getUTXOs */1], Belt_List.fromArray(Belt_MapString.keysToArray(addresses))).then((function (utxos) {
                  return Promise.resolve(Belt_List.map(utxos, (function (param) {
                                    var address = param[/* address */2];
                                    var a = Js_option.getExn(Belt_MapString.get(addresses, address));
                                    return /* record */[
                                            /* txId */param[/* txId */0],
                                            /* txOutputN */param[/* txOutputN */1],
                                            /* address */address,
                                            /* value */param[/* amount */3],
                                            /* nCoSigners */a[/* nCoSigners */0],
                                            /* nPubKeys */a[/* nPubKeys */1],
                                            /* coordinates */a[/* coordinates */2]
                                          ];
                                  })));
                }));
  };
  var broadcastTransaction = Client[/* broadcastTransaction */3];
  return /* module */[
          /* network */network,
          /* transactionInfo */transactionInfo,
          /* transactionInputs */transactionInputs,
          /* broadcastTransaction */broadcastTransaction
        ];
}

var Client = BitcoindClient.make(/* record */[
      /* bitcoindUrl */"http://localhost:18322",
      /* rpcUser */"bitcoin",
      /* rpcPassword */"bitcoin"
    ], BitcoinjsLib.networks.testnet);

var network = Client[/* network */0];

var transactionInfo = Client[/* getTransactionInfo */2];

function transactionInputs(addresses) {
  return Curry._1(Client[/* getUTXOs */1], Belt_List.fromArray(Belt_MapString.keysToArray(addresses))).then((function (utxos) {
                return Promise.resolve(Belt_List.map(utxos, (function (param) {
                                  var address = param[/* address */2];
                                  var a = Js_option.getExn(Belt_MapString.get(addresses, address));
                                  return /* record */[
                                          /* txId */param[/* txId */0],
                                          /* txOutputN */param[/* txOutputN */1],
                                          /* address */address,
                                          /* value */param[/* amount */3],
                                          /* nCoSigners */a[/* nCoSigners */0],
                                          /* nPubKeys */a[/* nPubKeys */1],
                                          /* coordinates */a[/* coordinates */2]
                                        ];
                                })));
              }));
}

var broadcastTransaction = Client[/* broadcastTransaction */3];

var Regtest = /* module */[
  /* network */network,
  /* transactionInfo */transactionInfo,
  /* transactionInputs */transactionInputs,
  /* broadcastTransaction */broadcastTransaction
];

var Client$1 = SmartbitClient.make(SmartbitClient.testnetConfig, BitcoinjsLib.networks.testnet);

var network$1 = Client$1[/* network */0];

var transactionInfo$1 = Client$1[/* getTransactionInfo */2];

function transactionInputs$1(addresses) {
  return Curry._1(Client$1[/* getUTXOs */1], Belt_List.fromArray(Belt_MapString.keysToArray(addresses))).then((function (utxos) {
                return Promise.resolve(Belt_List.map(utxos, (function (param) {
                                  var address = param[/* address */2];
                                  var a = Js_option.getExn(Belt_MapString.get(addresses, address));
                                  return /* record */[
                                          /* txId */param[/* txId */0],
                                          /* txOutputN */param[/* txOutputN */1],
                                          /* address */address,
                                          /* value */param[/* amount */3],
                                          /* nCoSigners */a[/* nCoSigners */0],
                                          /* nPubKeys */a[/* nPubKeys */1],
                                          /* coordinates */a[/* coordinates */2]
                                        ];
                                })));
              }));
}

var broadcastTransaction$1 = Client$1[/* broadcastTransaction */3];

var Testnet = /* module */[
  /* network */network$1,
  /* transactionInfo */transactionInfo$1,
  /* transactionInputs */transactionInputs$1,
  /* broadcastTransaction */broadcastTransaction$1
];

var Client$2 = SmartbitClient.make(SmartbitClient.mainnetConfig, BitcoinjsLib.networks.bitcoin);

var network$2 = Client$2[/* network */0];

var transactionInfo$2 = Client$2[/* getTransactionInfo */2];

function transactionInputs$2(addresses) {
  return Curry._1(Client$2[/* getUTXOs */1], Belt_List.fromArray(Belt_MapString.keysToArray(addresses))).then((function (utxos) {
                return Promise.resolve(Belt_List.map(utxos, (function (param) {
                                  var address = param[/* address */2];
                                  var a = Js_option.getExn(Belt_MapString.get(addresses, address));
                                  return /* record */[
                                          /* txId */param[/* txId */0],
                                          /* txOutputN */param[/* txOutputN */1],
                                          /* address */address,
                                          /* value */param[/* amount */3],
                                          /* nCoSigners */a[/* nCoSigners */0],
                                          /* nPubKeys */a[/* nPubKeys */1],
                                          /* coordinates */a[/* coordinates */2]
                                        ];
                                })));
              }));
}

var broadcastTransaction$2 = Client$2[/* broadcastTransaction */3];

var Mainnet = /* module */[
  /* network */network$2,
  /* transactionInfo */transactionInfo$2,
  /* transactionInputs */transactionInputs$2,
  /* broadcastTransaction */broadcastTransaction$2
];

function transactionInputs$3(param) {
  switch (param) {
    case 0 : 
        return transactionInputs;
    case 1 : 
        return transactionInputs$1;
    case 2 : 
        return transactionInputs$2;
    
  }
}

function transactionInfo$3(param) {
  switch (param) {
    case 0 : 
        return transactionInfo;
    case 1 : 
        return transactionInfo$1;
    case 2 : 
        return transactionInfo$2;
    
  }
}

function broadcastTransaction$3(param) {
  switch (param) {
    case 0 : 
        return broadcastTransaction;
    case 1 : 
        return broadcastTransaction$1;
    case 2 : 
        return broadcastTransaction$2;
    
  }
}

function bitcoinNetwork(param) {
  switch (param) {
    case 0 : 
        return network;
    case 1 : 
        return network$1;
    case 2 : 
        return network$2;
    
  }
}

var testnetIncomeAddress = "2NBcWTE19SxX28kbmrwbbcX69abrxCmNa8M";

function incomeAddress() {
  return testnetIncomeAddress;
}

exports.encode = encode;
exports.decode = decode;
exports.TxInputCmp = TxInputCmp;
exports.inputSet = inputSet;
exports.encodeInput = encodeInput;
exports.decodeInput = decodeInput;
exports.Make = Make;
exports.Regtest = Regtest;
exports.Testnet = Testnet;
exports.Mainnet = Mainnet;
exports.transactionInputs = transactionInputs$3;
exports.transactionInfo = transactionInfo$3;
exports.broadcastTransaction = broadcastTransaction$3;
exports.bitcoinNetwork = bitcoinNetwork;
exports.testnetIncomeAddress = testnetIncomeAddress;
exports.incomeAddress = incomeAddress;
/* TxInputCmp Not a pure module */
