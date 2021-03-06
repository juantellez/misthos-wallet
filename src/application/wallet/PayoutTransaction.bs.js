// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Utils = require("../../utils/Utils.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Address = require("./Address.bs.js");
var Network = require("./Network.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var TxWrapper = require("./TxWrapper.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int64 = require("bs-platform/lib/js/caml_int64.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var TransactionFee = require("./TransactionFee.bs.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var CustodianKeyChain = require("./CustodianKeyChain.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var NotEnoughFunds = Caml_exceptions.create("PayoutTransaction.NotEnoughFunds");

var NotEnoughSignatures = Caml_exceptions.create("PayoutTransaction.NotEnoughSignatures");

var NoSignaturesForInput = Caml_exceptions.create("PayoutTransaction.NoSignaturesForInput");

function summary(network, param) {
  var changeAddress = param[/* changeAddress */3];
  var misthosFeeAddress = param[/* misthosFeeAddress */2];
  var totalIn = $$Array.fold_left((function (total, input) {
          return input[/* value */3].plus(total);
        }), BTC.zero, param[/* usedInputs */1]);
  var tx = BitcoinjsLib.Transaction.fromHex(param[/* txHex */0]);
  var outs = List.map((function (o) {
          return /* tuple */[
                  BitcoinjsLib.address.fromOutputScript(o.script, Network.bitcoinNetwork(network)),
                  BTC.fromSatoshis(Caml_int64.of_float(o.value))
                ];
        }), $$Array.to_list(tx.outs));
  var totalOut = List.fold_left((function (total, out) {
          return out[1].plus(total);
        }), BTC.zero, outs);
  var cAddress = Js_option.getWithDefault("", Utils.mapOption((function (a) {
              return a[/* displayAddress */5];
            }), changeAddress));
  var destinations = Belt_List.keepMapU(outs, (function (param) {
          var address = param[0];
          if (address !== misthosFeeAddress && address !== cAddress) {
            return /* tuple */[
                    address,
                    param[1]
                  ];
          }
          
        }));
  var networkFee = totalIn.minus(totalOut);
  var changeOut = Js_option.getWithDefault(BTC.zero, Utils.mapOption((function (changeAddress) {
              return List.find((function (param) {
                              return param[0] === changeAddress[/* displayAddress */5];
                            }), outs)[1];
            }), changeAddress));
  var misthosFee;
  try {
    misthosFee = List.find((function (param) {
              return param[0] === misthosFeeAddress;
            }), outs)[1];
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      misthosFee = BTC.zero;
    } else {
      throw exn;
    }
  }
  return /* record */[
          /* reserved */totalIn,
          /* destinations */destinations,
          /* spentWithFees */networkFee.plus(totalOut).minus(changeOut),
          /* misthosFee */misthosFee,
          /* networkFee */networkFee
        ];
}

function txInputForChangeAddress(txId, network, param) {
  var txHex = param[/* txHex */0];
  return Utils.mapOption((function (address) {
                var tx = BitcoinjsLib.Transaction.fromHex(txHex);
                var match = Js_option.getExn(List.find(Js_option.isSome, List.mapi((function (i, out) {
                                var match = BitcoinjsLib.address.fromOutputScript(out.script, Network.bitcoinNetwork(network)) === address[/* displayAddress */5];
                                if (match) {
                                  return /* tuple */[
                                          i,
                                          BTC.fromSatoshisFloat(out.value)
                                        ];
                                }
                                
                              }), $$Array.to_list(tx.outs))));
                return /* record */[
                        /* txId */txId,
                        /* txOutputN */match[0],
                        /* address */address[/* displayAddress */5],
                        /* value */match[1],
                        /* nCoSigners */address[/* nCoSigners */0],
                        /* nPubKeys */address[/* nPubKeys */1],
                        /* coordinates */address[/* coordinates */2],
                        /* sequence */address[/* sequence */6],
                        /* unlocked */false
                      ];
              }), param[/* changeAddress */3]);
}

function encode(payout) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "txHex",
                payout[/* txHex */0]
              ],
              /* :: */[
                /* tuple */[
                  "usedInputs",
                  Json_encode.array(Network.encodeInput, payout[/* usedInputs */1])
                ],
                /* :: */[
                  /* tuple */[
                    "misthosFeeAddress",
                    payout[/* misthosFeeAddress */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "changeAddress",
                      Json_encode.nullable(Address.encode, payout[/* changeAddress */3])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

function decode(raw) {
  return /* record */[
          /* txHex */Json_decode.field("txHex", Json_decode.string, raw),
          /* usedInputs */Json_decode.field("usedInputs", (function (param) {
                  return Json_decode.array(Network.decodeInput, param);
                }), raw),
          /* misthosFeeAddress */Json_decode.field("misthosFeeAddress", Json_decode.string, raw),
          /* changeAddress */Json_decode.field("changeAddress", (function (param) {
                  return Json_decode.optional(Address.decode, param);
                }), raw)
        ];
}

function getSignedExn(result) {
  if (result) {
    return result[0];
  } else {
    return Js_exn.raiseError("signResult");
  }
}

function signPayout(ventureId, userId, masterKeyChain, accountKeyChains, payout, signatures) {
  var txW = /* record */[/* contents */TxWrapper.make(payout[/* txHex */0])];
  var signed = $$Array.mapi((function (idx, input) {
          var needsSigning = TxWrapper.needsSigning(idx, input[/* nCoSigners */4], txW[0]);
          if (needsSigning) {
            try {
              var accountKeyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](input[/* coordinates */6]), Address.Coordinates[/* keyChainIdent */4](input[/* coordinates */6]), accountKeyChains);
              var custodianPubChain = List.assoc(userId, accountKeyChain[/* custodianKeyChains */4]);
              var custodianKeyChain = CustodianKeyChain.make(ventureId, CustodianKeyChain.accountIdx(custodianPubChain), CustodianKeyChain.keyChainIdx(custodianPubChain), masterKeyChain);
              var coSignerIdx = Address.Coordinates[/* coSignerIdx */5](input[/* coordinates */6]);
              var chainIdx = Address.Coordinates[/* chainIdx */6](input[/* coordinates */6]);
              var addressIdx = Address.Coordinates[/* addressIdx */7](input[/* coordinates */6]);
              var keyPair = CustodianKeyChain.getSigningKey(coSignerIdx, chainIdx, addressIdx, custodianKeyChain);
              var address = Address.find(input[/* coordinates */6], accountKeyChains);
              txW[0] = TxWrapper.sign(idx, keyPair, List.length(accountKeyChain[/* custodianKeyChains */4]), address[/* redeemScript */4], input[/* value */3], address[/* witnessScript */3], Js_option.getWithDefault(undefined, Belt_Array.get(signatures, idx)), txW[0]);
              return true;
            }
            catch (exn){
              if (exn === Caml_builtin_exceptions.not_found) {
                return false;
              } else {
                throw exn;
              }
            }
          } else {
            return false;
          }
        }), payout[/* usedInputs */1]);
  var match = Js_option.isSome(Caml_option.undefined_to_opt(signed.find((function (s) {
                  return s;
                }))));
  if (match) {
    return /* Signed */[/* record */[
              /* txHex */txW[0][/* tx */0].toHex(),
              /* usedInputs */payout[/* usedInputs */1],
              /* misthosFeeAddress */payout[/* misthosFeeAddress */2],
              /* changeAddress */payout[/* changeAddress */3]
            ]];
  } else {
    return /* NotSigned */0;
  }
}

function findInput(_inputs, ammountMissing, fee) {
  while(true) {
    var inputs = _inputs;
    if (inputs) {
      var rest = inputs[1];
      var i = inputs[0];
      if (rest) {
        var match = i[/* value */3].gte(TransactionFee.inputCost(Js_option.isSome(i[/* sequence */7]), i[/* unlocked */8], i[/* nCoSigners */4], i[/* nPubKeys */5], fee).plus(ammountMissing));
        if (match) {
          return i;
        } else {
          _inputs = rest;
          continue ;
        }
      } else {
        return i;
      }
    } else {
      return undefined;
    }
  };
}

function findInputs(_inputs, _ammountMissing, fee, _addedInputs) {
  while(true) {
    var addedInputs = _addedInputs;
    var ammountMissing = _ammountMissing;
    var inputs = _inputs;
    var match = findInput(inputs, ammountMissing, fee);
    if (match !== undefined) {
      var i = match;
      var addedInputs$1 = /* :: */[
        i,
        addedInputs
      ];
      var ammountMissing$1 = TransactionFee.inputCost(Js_option.isSome(i[/* sequence */7]), i[/* unlocked */8], i[/* nCoSigners */4], i[/* nPubKeys */5], fee).plus(ammountMissing).minus(i[/* value */3]);
      if (BTC.zero.gte(ammountMissing$1)) {
        return /* tuple */[
                addedInputs$1,
                true
              ];
      } else {
        _addedInputs = addedInputs$1;
        _ammountMissing = ammountMissing$1;
        _inputs = List.filter((function(i){
              return function (input) {
                return Caml_obj.caml_notequal(input, i);
              }
              }(i)))(inputs);
        continue ;
      }
    } else {
      return /* tuple */[
              addedInputs,
              false
            ];
    }
  };
}

function addChangeOutput(totalInputs, outTotal, currentFee, changeAddress, fee, network, txBuilder) {
  if (totalInputs.gte(TransactionFee.minChange(Js_option.isSome(changeAddress[/* sequence */6]), false, changeAddress[/* nCoSigners */0], changeAddress[/* nPubKeys */1], fee).plus(TransactionFee.outputCost(changeAddress[/* displayAddress */5], fee, Network.bitcoinNetwork(network)).plus(currentFee.plus(outTotal))))) {
    var currentFee$1 = TransactionFee.outputCost(changeAddress[/* displayAddress */5], fee, Network.bitcoinNetwork(network)).plus(currentFee);
    txBuilder.addOutput(changeAddress[/* displayAddress */5], BTC.toSatoshisFloat(totalInputs.minus(outTotal).minus(currentFee$1)));
    return true;
  } else {
    return false;
  }
}

function build(optionalInputs, mandatoryInputs, unlockedInputs, destinations, satsPerByte, changeAddress, network) {
  var unlockedInputs$1 = Belt_Set.keep(unlockedInputs, (function (param) {
          return TransactionFee.canPayForItself(satsPerByte, param);
        }));
  var mandatoryInputs$1 = Belt_Set.union(Belt_Set.keep(mandatoryInputs, (function (param) {
              return TransactionFee.canPayForItself(satsPerByte, param);
            })), unlockedInputs$1);
  var optionalInputs$1 = List.sort((function (i1, i2) {
          return i1[/* value */3].comparedTo(i2[/* value */3]);
        }), Belt_Set.toList(Belt_Set.diff(Belt_Set.keep(optionalInputs, (function (param) {
                      return TransactionFee.canPayForItself(satsPerByte, param);
                    })), unlockedInputs$1)));
  var txB = new BitcoinjsLib.TransactionBuilder(Network.bitcoinNetwork(network));
  var usedInputs = List.map((function (i) {
          var match = i[/* unlocked */8];
          return /* tuple */[
                  match ? txB.addInput(i[/* txId */0], i[/* txOutputN */1], Js_option.getExn(i[/* sequence */7])) : txB.addInput(i[/* txId */0], i[/* txOutputN */1]),
                  i
                ];
        }), Belt_Set.toList(mandatoryInputs$1));
  var outTotal = List.fold_left((function (total, param) {
          var value = param[1];
          txB.addOutput(param[0], BTC.toSatoshisFloat(value));
          return value.plus(total);
        }), BTC.zero, destinations);
  var currentInputValue = List.fold_left((function (total, param) {
          return param[1][/* value */3].plus(total);
        }), BTC.zero, usedInputs);
  var currentFee = TransactionFee.estimate(List.map((function (prim) {
              return prim[0];
            }), destinations), List.map((function (prim) {
              return prim[1];
            }), usedInputs), satsPerByte, Network.bitcoinNetwork(network));
  if (currentInputValue.gte(currentFee.plus(outTotal))) {
    var withChange = addChangeOutput(currentInputValue, outTotal, currentFee, changeAddress, satsPerByte, network, txB);
    return /* record */[
            /* txHex */txB.buildIncomplete().toHex(),
            /* usedInputs */$$Array.map((function (param) {
                    return param[1];
                  }), $$Array.of_list(usedInputs).sort((function (param, param$1) {
                        return Caml_primitive.caml_int_compare(param[0], param$1[0]);
                      }))),
            /* misthosFeeAddress */"",
            /* changeAddress */withChange ? changeAddress : undefined
          ];
  } else {
    var match = findInputs(optionalInputs$1, currentFee.plus(outTotal).minus(currentInputValue), satsPerByte, /* [] */0);
    if (match[1]) {
      var match$1 = List.fold_left((function (param, i) {
              return /* tuple */[
                      i[/* value */3].plus(param[0]),
                      TransactionFee.inputCost(Js_option.isSome(i[/* sequence */7]), i[/* unlocked */8], i[/* nCoSigners */4], i[/* nPubKeys */5], satsPerByte).plus(param[1]),
                      /* :: */[
                        /* tuple */[
                          txB.addInput(i[/* txId */0], i[/* txOutputN */1]),
                          i
                        ],
                        param[2]
                      ]
                    ];
            }), /* tuple */[
            currentInputValue,
            currentFee,
            usedInputs
          ], match[0]);
      var withChange$1 = addChangeOutput(match$1[0], outTotal, match$1[1], changeAddress, satsPerByte, network, txB);
      return /* record */[
              /* txHex */txB.buildIncomplete().toHex(),
              /* usedInputs */$$Array.map((function (param) {
                      return param[1];
                    }), $$Array.of_list(match$1[2]).sort((function (param, param$1) {
                          return Caml_primitive.caml_int_compare(param[0], param$1[0]);
                        }))),
              /* misthosFeeAddress */"",
              /* changeAddress */withChange$1 ? changeAddress : undefined
            ];
    } else {
      throw NotEnoughFunds;
    }
  }
}

function max(allInputs, targetDestination, destinations, satsPerByte, network) {
  var inputs = Belt_List.keepMapU(Belt_Set.toList(allInputs), (function (input) {
          var match = TransactionFee.canPayForItself(satsPerByte, input);
          if (match) {
            return input;
          }
          
        }));
  var outputs = targetDestination !== "" ? /* :: */[
      /* tuple */[
        targetDestination,
        BTC.zero
      ],
      /* :: */[
        /* tuple */[
          Network.incomeAddress(network),
          BTC.zero
        ],
        destinations
      ]
    ] : /* :: */[
      /* tuple */[
        Network.incomeAddress(network),
        BTC.zero
      ],
      destinations
    ];
  var fee = TransactionFee.estimate(Belt_List.map(outputs, (function (prim) {
              return prim[0];
            })), inputs, satsPerByte, Network.bitcoinNetwork(network));
  var totalInputValue = Belt_List.reduce(inputs, BTC.zero, (function (res, input) {
          return input[/* value */3].plus(res);
        }));
  var totalOutValue = Belt_List.reduce(destinations, BTC.zero, (function (res, param) {
          return param[1].plus(res);
        }));
  return totalInputValue.minus(fee.plus(totalOutValue));
}

function finalize(signedTransactions) {
  var signedTransactions$1 = Belt_List.sortU(signedTransactions, (function (param, param$1) {
          return Caml_primitive.caml_string_compare(param[/* txHex */0], param$1[/* txHex */0]);
        }));
  var wrappers = Belt_List.mapU(signedTransactions$1, (function (param) {
          return TxWrapper.make(param[/* txHex */0]);
        }));
  var match = Belt_List.head(wrappers);
  var match$1 = Belt_List.tail(wrappers);
  var tmp;
  if (match !== undefined) {
    var head = match;
    tmp = match$1 !== undefined ? Belt_List.reduce(match$1, head, TxWrapper.merge) : head;
  } else {
    tmp = Js_exn.raiseError("finalize");
  }
  var res = TxWrapper.finalize(Belt_List.headExn(signedTransactions$1)[/* usedInputs */1], tmp);
  if (res) {
    return res[0];
  } else {
    throw NotEnoughSignatures;
  }
}

function missingSignatures(currentCustodians, custodiansThatSigned, keyChains, param) {
  var txWrapper = TxWrapper.make(param[/* txHex */0]);
  var missingSigs = Belt_Array.mapWithIndexU(param[/* usedInputs */1], (function (idx, input) {
          var keyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](input[/* coordinates */6]), Address.Coordinates[/* keyChainIdent */4](input[/* coordinates */6]), keyChains);
          var allCustodians = Belt_Set.mergeMany(PrimitiveTypes.UserId[/* emptySet */9], Belt_List.toArray(Belt_List.map(keyChain[/* custodianKeyChains */4], (function (prim) {
                          return prim[0];
                        }))));
          var notSigned = Belt_Set.diff(allCustodians, custodiansThatSigned);
          var match = Belt_Array.getExn(txWrapper[/* inputs */1], idx)[/* sequence */1] !== BitcoinjsLib.Transaction.DEFAULT_SEQUENCE;
          return /* record */[
                  /* custodians */Belt_Set.intersect(notSigned, currentCustodians),
                  /* sigs */(
                    match ? 1 : keyChain[/* nCoSigners */2]
                  ) - (Belt_Set.size(allCustodians) - Belt_Set.size(notSigned) | 0) | 0
                ];
        }));
  var mandatory = Belt_Array.reduceU(missingSigs, PrimitiveTypes.UserId[/* emptySet */9], (function (required, param) {
          var sigs = param[/* sigs */1];
          var custodians = param[/* custodians */0];
          var match = sigs > 0 && Belt_Set.size(custodians) === sigs;
          if (match) {
            return Belt_Set.union(required, custodians);
          } else {
            return required;
          }
        }));
  return /* record */[
          /* mandatory */mandatory,
          /* additional */Belt_Array.reduceU(missingSigs, PrimitiveTypes.UserId[/* emptySet */9], (function (additional, param) {
                  var sigs = param[/* sigs */1];
                  if (sigs > 0) {
                    var custodians = param[/* custodians */0];
                    var definetlySigned = Belt_Set.intersect(custodians, mandatory);
                    var match = Belt_Set.size(definetlySigned) >= sigs;
                    if (match) {
                      return additional;
                    } else {
                      return Belt_Set.union(Belt_Set.diff(custodians, definetlySigned), additional);
                    }
                  } else {
                    return additional;
                  }
                }))
        ];
}

exports.NotEnoughFunds = NotEnoughFunds;
exports.NotEnoughSignatures = NotEnoughSignatures;
exports.NoSignaturesForInput = NoSignaturesForInput;
exports.summary = summary;
exports.txInputForChangeAddress = txInputForChangeAddress;
exports.build = build;
exports.max = max;
exports.getSignedExn = getSignedExn;
exports.signPayout = signPayout;
exports.missingSignatures = missingSignatures;
exports.finalize = finalize;
exports.encode = encode;
exports.decode = decode;
/* BTC Not a pure module */
