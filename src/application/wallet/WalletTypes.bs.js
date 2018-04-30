// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");

function encodeTransaction(transaction) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "txId",
                transaction[/* txId */0]
              ],
              /* :: */[
                /* tuple */[
                  "outputs",
                  Json_encode.array((function (output) {
                          return Json_encode.object_(/* :: */[
                                      /* tuple */[
                                        "address",
                                        output[/* address */0]
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "amount",
                                          BTC.encode(output[/* amount */1])
                                        ],
                                        /* [] */0
                                      ]
                                    ]);
                        }), $$Array.of_list(transaction[/* outputs */1]))
                ],
                /* [] */0
              ]
            ]);
}

function decodeTransaction(raw) {
  return /* record */[
          /* txId */Json_decode.field("txid", Json_decode.string, raw),
          /* outputs */$$Array.to_list(Json_decode.field("outputs", (function (param) {
                      return Json_decode.array((function (output) {
                                    return /* record */[
                                            /* address */Json_decode.field("address", Json_decode.string, output),
                                            /* amount */BTC.fromString(Json_decode.field("value", Json_decode.string, output))
                                          ];
                                  }), param);
                    }), raw))
        ];
}

function next(idx) {
  return idx + 1 | 0;
}

function encode(id) {
  return id;
}

var decode = Json_decode.$$int;

var compare = Caml_obj.caml_compare;

var eq = Caml_obj.caml_equal;

function neq(a, b) {
  return +(Caml_obj.caml_compare(a, b) !== 0);
}

function AccountIndex_000(prim) {
  return prim;
}

var AccountIndex = [
  AccountIndex_000,
  0,
  next,
  encode,
  decode,
  compare,
  eq,
  neq,
  0
];

function CustodianKeyChainIndex_000(prim) {
  return prim;
}

var CustodianKeyChainIndex = [
  CustodianKeyChainIndex_000,
  next,
  encode,
  decode,
  compare,
  eq,
  neq,
  0
];

function ChainIndex_000(prim) {
  return prim;
}

var ChainIndex = [
  ChainIndex_000,
  0,
  next,
  encode,
  decode,
  compare,
  eq,
  neq,
  0,
  1
];

function AccountKeyChainIndex_000(prim) {
  return prim;
}

var AccountKeyChainIndex = [
  AccountKeyChainIndex_000,
  0,
  next,
  encode,
  decode,
  compare,
  eq,
  neq
];

function AddressIndex_000(prim) {
  return prim;
}

var AddressIndex = [
  AddressIndex_000,
  0,
  next,
  encode,
  decode,
  compare,
  eq,
  neq
];

exports.encodeTransaction = encodeTransaction;
exports.decodeTransaction = decodeTransaction;
exports.AccountIndex = AccountIndex;
exports.CustodianKeyChainIndex = CustodianKeyChainIndex;
exports.ChainIndex = ChainIndex;
exports.AccountKeyChainIndex = AccountKeyChainIndex;
exports.AddressIndex = AddressIndex;
/* BTC Not a pure module */