// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Utils = require("../../utils/Utils.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var WalletTypes = require("./WalletTypes.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var CustodianKeyChain = require("./CustodianKeyChain.bs.js");

function encode(prim) {
  return prim;
}

function make(nCoSigners, custodianKeyChains) {
  return Utils.hash(List.fold_left((function (res, param) {
                    return res + (PrimitiveTypes.UserId[/* toString */0](param[0]) + param[1]);
                  }), String(nCoSigners), List.map((function (param) {
                        return /* tuple */[
                                param[0],
                                CustodianKeyChain.hdNode(param[1]).toBase58()
                              ];
                      }), List.sort((function (param, param$1) {
                            return PrimitiveTypes.UserId[/* compare */4](param[0], param$1[0]);
                          }), custodianKeyChains))));
}

var neq = Caml_obj.caml_notequal;

var eq = Caml_obj.caml_equal;

var Identifier = /* module */[
  /* encode */encode,
  /* decode */Json_decode.string,
  /* make */make,
  /* neq */neq,
  /* eq */eq
];

var defaultCoSignerList = /* array */[
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8
];

function make$1(accountIdx, custodianKeyChains) {
  var nCoSigners = Caml_array.caml_array_get(defaultCoSignerList, List.length(custodianKeyChains));
  var match = nCoSigners > 1;
  return /* record */[
          /* accountIdx */accountIdx,
          /* identifier */make(nCoSigners, custodianKeyChains),
          /* nCoSigners */nCoSigners,
          /* sequence */match ? /* Some */[12672] : /* None */0,
          /* custodianKeyChains */custodianKeyChains
        ];
}

function isConsistent(param) {
  var custodianKeyChains = param[/* custodianKeyChains */4];
  var nCoSigners = param[/* nCoSigners */2];
  if (nCoSigners === Caml_array.caml_array_get(defaultCoSignerList, List.length(custodianKeyChains))) {
    return Caml_obj.caml_equal(make(nCoSigners, custodianKeyChains), param[/* identifier */1]);
  } else {
    return false;
  }
}

function custodians(param) {
  return Belt_Set.mergeMany(PrimitiveTypes.UserId[/* emptySet */9], $$Array.of_list(List.map((function (prim) {
                        return prim[0];
                      }), param[/* custodianKeyChains */4])));
}

function add(keyChain, collection) {
  return Belt_MapString.set(collection, keyChain[/* identifier */1], keyChain);
}

function lookup(_, identifier, keyChains) {
  return Belt_MapString.getExn(keyChains, identifier);
}

function withCustodians(testCustodians, collection) {
  return Belt_SetString.fromArray(Belt_Array.keepMapU(Belt_MapString.valuesToArray(collection), (function (keyChain) {
                    var match = Belt_Set.eq(custodians(keyChain), testCustodians);
                    if (match) {
                      return /* Some */[keyChain[/* identifier */1]];
                    } else {
                      return /* None */0;
                    }
                  })));
}

var Collection = /* module */[
  /* empty */Belt_MapString.empty,
  /* add */add,
  /* lookup */lookup,
  /* withCustodians */withCustodians
];

function encode$1(keyChain) {
  var partial_arg = PrimitiveTypes.UserId[/* encode */2];
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "custodianKeyChains",
                Json_encode.list((function (param) {
                        return Json_encode.pair(partial_arg, CustodianKeyChain.encode, param);
                      }), keyChain[/* custodianKeyChains */4])
              ],
              /* :: */[
                /* tuple */[
                  "nCoSigners",
                  keyChain[/* nCoSigners */2]
                ],
                /* :: */[
                  /* tuple */[
                    "accountIdx",
                    WalletTypes.AccountIndex[/* encode */4](keyChain[/* accountIdx */0])
                  ],
                  /* :: */[
                    /* tuple */[
                      "identifier",
                      keyChain[/* identifier */1]
                    ],
                    /* :: */[
                      /* tuple */[
                        "sequence",
                        Json_encode.nullable((function (prim) {
                                return prim;
                              }), keyChain[/* sequence */3])
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function decode(raw) {
  var partial_arg = PrimitiveTypes.UserId[/* decode */3];
  var partial_arg$1 = function (param) {
    return Json_decode.pair(partial_arg, CustodianKeyChain.decode, param);
  };
  return /* record */[
          /* accountIdx */Json_decode.field("accountIdx", WalletTypes.AccountIndex[/* decode */5], raw),
          /* identifier */Json_decode.field("identifier", Json_decode.string, raw),
          /* nCoSigners */Json_decode.field("nCoSigners", Json_decode.$$int, raw),
          /* sequence */Json_decode.optional((function (param) {
                  return Json_decode.field("sequence", Json_decode.$$int, param);
                }), raw),
          /* custodianKeyChains */Json_decode.field("custodianKeyChains", (function (param) {
                  return Json_decode.list(partial_arg$1, param);
                }), raw)
        ];
}

var defaultSequence = 12672;

exports.Identifier = Identifier;
exports.defaultCoSignerList = defaultCoSignerList;
exports.defaultSequence = defaultSequence;
exports.make = make$1;
exports.isConsistent = isConsistent;
exports.custodians = custodians;
exports.Collection = Collection;
exports.encode = encode$1;
exports.decode = decode;
/* Utils Not a pure module */
