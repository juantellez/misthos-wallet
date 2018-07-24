// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var BitcoindClient = require("./BitcoindClient.bs.js");
var BlockchainInfoClient = require("./BlockchainInfoClient.bs.js");

function Make(Client) {
  var network = Client[/* network */0];
  var transactionInfo = Client[/* getTransactionInfo */2];
  var currentBlockHeight = Client[/* getCurrentBlockHeight */3];
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
                                            /* coordinates */a[/* coordinates */2],
                                            /* sequence */a[/* sequence */6],
                                            /* unlocked */false
                                          ];
                                  })));
                }));
  };
  var broadcastTransaction = Client[/* broadcastTransaction */4];
  return /* module */[
          /* network */network,
          /* transactionInfo */transactionInfo,
          /* currentBlockHeight */currentBlockHeight,
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

var currentBlockHeight = Client[/* getCurrentBlockHeight */3];

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
                                          /* coordinates */a[/* coordinates */2],
                                          /* sequence */a[/* sequence */6],
                                          /* unlocked */false
                                        ];
                                })));
              }));
}

var broadcastTransaction = Client[/* broadcastTransaction */4];

var Regtest = /* module */[
  /* network */network,
  /* transactionInfo */transactionInfo,
  /* currentBlockHeight */currentBlockHeight,
  /* transactionInputs */transactionInputs,
  /* broadcastTransaction */broadcastTransaction
];

var Client$1 = BlockchainInfoClient.make(BlockchainInfoClient.testnetConfig, BitcoinjsLib.networks.testnet);

var network$1 = Client$1[/* network */0];

var transactionInfo$1 = Client$1[/* getTransactionInfo */2];

var currentBlockHeight$1 = Client$1[/* getCurrentBlockHeight */3];

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
                                          /* coordinates */a[/* coordinates */2],
                                          /* sequence */a[/* sequence */6],
                                          /* unlocked */false
                                        ];
                                })));
              }));
}

var broadcastTransaction$1 = Client$1[/* broadcastTransaction */4];

var Testnet = /* module */[
  /* network */network$1,
  /* transactionInfo */transactionInfo$1,
  /* currentBlockHeight */currentBlockHeight$1,
  /* transactionInputs */transactionInputs$1,
  /* broadcastTransaction */broadcastTransaction$1
];

var Client$2 = BlockchainInfoClient.make(BlockchainInfoClient.mainnetConfig, BitcoinjsLib.networks.bitcoin);

var network$2 = Client$2[/* network */0];

var transactionInfo$2 = Client$2[/* getTransactionInfo */2];

var currentBlockHeight$2 = Client$2[/* getCurrentBlockHeight */3];

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
                                          /* coordinates */a[/* coordinates */2],
                                          /* sequence */a[/* sequence */6],
                                          /* unlocked */false
                                        ];
                                })));
              }));
}

var broadcastTransaction$2 = Client$2[/* broadcastTransaction */4];

var Mainnet = /* module */[
  /* network */network$2,
  /* transactionInfo */transactionInfo$2,
  /* currentBlockHeight */currentBlockHeight$2,
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

function currentBlockHeight$3(param) {
  switch (param) {
    case 0 : 
        return currentBlockHeight;
    case 1 : 
        return currentBlockHeight$1;
    case 2 : 
        return currentBlockHeight$2;
    
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

exports.Make = Make;
exports.Regtest = Regtest;
exports.Testnet = Testnet;
exports.Mainnet = Mainnet;
exports.transactionInputs = transactionInputs$3;
exports.transactionInfo = transactionInfo$3;
exports.currentBlockHeight = currentBlockHeight$3;
exports.broadcastTransaction = broadcastTransaction$3;
/* Client Not a pure module */
