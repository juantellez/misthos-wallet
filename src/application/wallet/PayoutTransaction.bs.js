// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
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
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int64 = require("bs-platform/lib/js/caml_int64.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var TransactionFee = require("./TransactionFee.bs.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var CustodianKeyChain = require("./CustodianKeyChain.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var NotEnoughFunds = Caml_exceptions.create("PayoutTransaction.NotEnoughFunds");

var NotEnoughSignatures = Caml_exceptions.create("PayoutTransaction.NotEnoughSignatures");

var NoSignaturesForInput = Caml_exceptions.create("PayoutTransaction.NoSignaturesForInput");

function summary(network, param) {
  var misthosFeeAddress = param[/* misthosFeeAddress */2];
  var totalIn = $$Array.fold_left((function (total, input) {
          return total.plus(input[/* value */3]);
        }), BTC.zero, param[/* usedInputs */1]);
  var tx = BitcoinjsLib.Transaction.fromHex(param[/* txHex */0]);
  var outs = List.map((function (o) {
          return /* tuple */[
                  BitcoinjsLib.address.fromOutputScript(o.script, Network.bitcoinNetwork(network)),
                  BTC.fromSatoshis(Caml_int64.of_float(o.value))
                ];
        }), $$Array.to_list(tx.outs));
  var totalOut = List.fold_left((function (total, out) {
          return total.plus(out[1]);
        }), BTC.zero, outs);
  var networkFee = totalIn.minus(totalOut);
  var changeOut = Js_option.getWithDefault(BTC.zero, Utils.mapOption((function (changeAddress) {
              return List.find((function (param) {
                              return param[0] === changeAddress[/* displayAddress */5];
                            }), outs)[1];
            }), param[/* changeAddress */3]));
  var misthosFee = List.find((function (param) {
            return param[0] === misthosFeeAddress;
          }), outs)[1];
  return /* record */[
          /* reserved */totalIn,
          /* spentWithFees */totalOut.plus(networkFee).minus(changeOut),
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
                                  return /* Some */[/* tuple */[
                                            i,
                                            BTC.fromSatoshisFloat(out.value)
                                          ]];
                                } else {
                                  return /* None */0;
                                }
                              }), $$Array.to_list(tx.outs))));
                return /* record */[
                        /* txId */txId,
                        /* txOutputN */match[0],
                        /* address */address[/* displayAddress */5],
                        /* value */match[1],
                        /* nCoSigners */address[/* nCoSigners */0],
                        /* nPubKeys */address[/* nPubKeys */1],
                        /* coordinates */address[/* coordinates */2]
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

function signPayout(ventureId, userId, masterKeyChain, accountKeyChains, payout, network) {
  var txB = BitcoinjsLib.TransactionBuilder.fromTransaction(BitcoinjsLib.Transaction.fromHex(payout[/* txHex */0]), Network.bitcoinNetwork(network));
  var signed = $$Array.mapi((function (idx, input) {
          var inputs = txB.inputs;
          var txBInput = Caml_array.caml_array_get(inputs, idx);
          var match = txBInput.signatures;
          var needsSigning = (match == null) ? true : List.length(List.filter((function (s) {
                          return Js_option.isSome((s == null) ? /* None */0 : [s]);
                        }))($$Array.to_list(match))) < input[/* nCoSigners */4];
          if (needsSigning) {
            try {
              var custodianPubChain = List.assoc(userId, AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](input[/* coordinates */6]), Address.Coordinates[/* keyChainIdent */4](input[/* coordinates */6]), accountKeyChains)[/* custodianKeyChains */3]);
              var custodianKeyChain = CustodianKeyChain.make(ventureId, CustodianKeyChain.accountIdx(custodianPubChain), CustodianKeyChain.keyChainIdx(custodianPubChain), masterKeyChain);
              var coSignerIdx = Address.Coordinates[/* coSignerIdx */5](input[/* coordinates */6]);
              var chainIdx = Address.Coordinates[/* chainIdx */6](input[/* coordinates */6]);
              var addressIdx = Address.Coordinates[/* addressIdx */7](input[/* coordinates */6]);
              var keyPair = CustodianKeyChain.getSigningKey(coSignerIdx, chainIdx, addressIdx, custodianKeyChain);
              var address = Address.find(input[/* coordinates */6], accountKeyChains);
              txB.sign(idx, keyPair, Utils.bufFromHex(address[/* redeemScript */4]), null, BTC.toSatoshisFloat(input[/* value */3]), Utils.bufFromHex(address[/* witnessScript */3]));
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
  var match = Js_option.isSome(Js_primitive.undefined_to_opt(signed.find((function (s) {
                  return s;
                }))));
  if (match) {
    return /* Signed */[/* record */[
              /* txHex */txB.buildIncomplete().toHex(),
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
        var match = i[/* value */3].gte(ammountMissing.plus(TransactionFee.inputCost(i[/* nCoSigners */4], i[/* nPubKeys */5], fee)));
        if (match) {
          return /* Some */[i];
        } else {
          _inputs = rest;
          continue ;
        }
      } else {
        return /* Some */[i];
      }
    } else {
      return /* None */0;
    }
  };
}

function findInputs(_inputs, _ammountMissing, fee, _addedInputs) {
  while(true) {
    var addedInputs = _addedInputs;
    var ammountMissing = _ammountMissing;
    var inputs = _inputs;
    var match = findInput(inputs, ammountMissing, fee);
    if (match) {
      var i = match[0];
      var addedInputs$1 = /* :: */[
        i,
        addedInputs
      ];
      var ammountMissing$1 = ammountMissing.plus(TransactionFee.inputCost(i[/* nCoSigners */4], i[/* nPubKeys */5], fee)).minus(i[/* value */3]);
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
  if (totalInputs.gte(outTotal.plus(currentFee).plus(TransactionFee.outputCost(changeAddress[/* displayAddress */5], fee, Network.bitcoinNetwork(network))).plus(TransactionFee.minChange(changeAddress[/* nCoSigners */0], changeAddress[/* nPubKeys */1], fee)))) {
    var currentFee$1 = currentFee.plus(TransactionFee.outputCost(changeAddress[/* displayAddress */5], fee, Network.bitcoinNetwork(network)));
    txBuilder.addOutput(changeAddress[/* displayAddress */5], BTC.toSatoshisFloat(totalInputs.minus(outTotal).minus(currentFee$1)));
    return true;
  } else {
    return false;
  }
}

function build(mandatoryInputs, allInputs, destinations, satsPerByte, changeAddress, network) {
  var mandatoryInputs$1 = Belt_Set.keep(mandatoryInputs, (function (param) {
          return TransactionFee.canPayForItself(satsPerByte, param);
        }));
  var allInputs$1 = List.sort((function (i1, i2) {
          return i1[/* value */3].comparedTo(i2[/* value */3]);
        }), Belt_Set.toList(Belt_Set.diff(Belt_Set.keep(allInputs, (function (param) {
                      return TransactionFee.canPayForItself(satsPerByte, param);
                    })), mandatoryInputs$1)));
  var txB = new BitcoinjsLib.TransactionBuilder(Network.bitcoinNetwork(network));
  var usedInputs = List.map((function (i) {
          return /* tuple */[
                  txB.addInput(i[/* txId */0], i[/* txOutputN */1]),
                  i
                ];
        }), Belt_Set.toList(mandatoryInputs$1));
  var outTotalWithoutFee = List.fold_left((function (total, param) {
          var value = param[1];
          txB.addOutput(param[0], BTC.toSatoshisFloat(value));
          return total.plus(value);
        }), BTC.zero, destinations);
  var misthosFee = BTC.timesRounded(2.9 / 100, outTotalWithoutFee);
  var misthosFeeAddress = Network.incomeAddress(network);
  txB.addOutput(misthosFeeAddress, BTC.toSatoshisFloat(misthosFee));
  var outTotal = outTotalWithoutFee.plus(misthosFee);
  var currentInputValue = List.fold_left((function (total, param) {
          return total.plus(param[1][/* value */3]);
        }), BTC.zero, usedInputs);
  var currentFee = TransactionFee.estimate(List.map((function (prim) {
              return prim[0];
            }), destinations), List.map((function (prim) {
              return prim[1];
            }), usedInputs), satsPerByte, Network.bitcoinNetwork(network));
  if (currentInputValue.gte(outTotal.plus(currentFee))) {
    var withChange = addChangeOutput(currentInputValue, outTotal, currentFee, changeAddress, satsPerByte, network, txB);
    return /* record */[
            /* txHex */txB.buildIncomplete().toHex(),
            /* usedInputs */$$Array.map((function (param) {
                    return param[1];
                  }), $$Array.of_list(usedInputs).sort((function (param, param$1) {
                        return Caml_primitive.caml_int_compare(param[0], param$1[0]);
                      }))),
            /* misthosFeeAddress */misthosFeeAddress,
            /* changeAddress */withChange ? /* Some */[changeAddress] : /* None */0
          ];
  } else {
    var match = findInputs(allInputs$1, outTotal.plus(currentFee).minus(currentInputValue), satsPerByte, /* [] */0);
    if (match[1]) {
      var match$1 = List.fold_left((function (param, i) {
              return /* tuple */[
                      param[0].plus(i[/* value */3]),
                      param[1].plus(TransactionFee.inputCost(i[/* nCoSigners */4], i[/* nPubKeys */5], satsPerByte)),
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
              /* misthosFeeAddress */misthosFeeAddress,
              /* changeAddress */withChange$1 ? /* Some */[changeAddress] : /* None */0
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
            return /* Some */[input];
          } else {
            return /* None */0;
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
          return res.plus(input[/* value */3]);
        }));
  var totalOutValue = Belt_List.reduce(destinations, BTC.zero, (function (res, param) {
          return res.plus(param[1]);
        }));
  var totalOutMisthosFee = BTC.timesRounded(2.9 / 100, totalOutValue);
  var rest = totalInputValue.minus(totalOutValue.plus(fee));
  return BTC.dividedByRounded(1 + 2.9 / 100, rest).minus(totalOutMisthosFee);
}

function findSignatures(_allSigs, needed, foundSigIdxs, foundSigs, network) {
  while(true) {
    var allSigs = _allSigs;
    if (needed !== 0 && allSigs) {
      var match = allSigs[0];
      if (match) {
        try {
          var foundSig = List.find((function (param) {
                  if ((param[1] == null) === false) {
                    return List.mem(param[0], foundSigIdxs) === false;
                  } else {
                    return false;
                  }
                }), $$Array.to_list($$Array.mapi((function (i, sigBuf) {
                          return /* tuple */[
                                  i,
                                  sigBuf
                                ];
                        }), match[0])));
          var foundSigs$1 = /* :: */[
            foundSig,
            foundSigs
          ];
          if (needed === 1) {
            return foundSigs$1;
          } else {
            return findSignatures(allSigs, needed - 1 | 0, /* :: */[
                        foundSig[0],
                        foundSigIdxs
                      ], foundSigs$1, network);
          }
        }
        catch (exn){
          if (exn === Caml_builtin_exceptions.not_found) {
            _allSigs = allSigs[1];
            continue ;
          } else {
            throw exn;
          }
        }
      } else {
        _allSigs = allSigs[1];
        continue ;
      }
    } else {
      return foundSigs;
    }
  };
}

function finalize(signedTransactions, network) {
  if (signedTransactions) {
    var match = signedTransactions[0];
    var txB = BitcoinjsLib.TransactionBuilder.fromTransaction(BitcoinjsLib.Transaction.fromHex(match[/* txHex */0]), Network.bitcoinNetwork(network));
    var inputs = txB.inputs;
    var otherInputs = List.map((function (param) {
            return BitcoinjsLib.TransactionBuilder.fromTransaction(BitcoinjsLib.Transaction.fromHex(param[/* txHex */0]), Network.bitcoinNetwork(network)).inputs;
          }), signedTransactions[1]);
    $$Array.iteri((function (inputIdx, param) {
            var nCoSigners = param[/* nCoSigners */4];
            var testInput = Caml_array.caml_array_get(inputs, inputIdx);
            var match = testInput.signatures;
            var tmp;
            if (match == null) {
              var inputs$1;
              try {
                inputs$1 = List.find((function (ins) {
                        var input = Caml_array.caml_array_get(ins, inputIdx);
                        return Js_option.isSome(Js_primitive.null_undefined_to_opt(input.signatures));
                      }), otherInputs);
              }
              catch (exn){
                if (exn === Caml_builtin_exceptions.not_found) {
                  throw NoSignaturesForInput;
                } else {
                  throw exn;
                }
              }
              tmp = Caml_array.caml_array_get(inputs$1, inputIdx);
            } else {
              tmp = Caml_array.caml_array_get(inputs, inputIdx);
            }
            Caml_array.caml_array_set(inputs, inputIdx, tmp);
            var input = Caml_array.caml_array_get(inputs, inputIdx);
            var signatures = Js_option.getExn(Js_primitive.null_undefined_to_opt(input.signatures));
            var existing = List.map(Js_option.getExn, List.filter(Js_option.isSome)($$Array.to_list($$Array.mapi((function (i, sigBuf) {
                                if (sigBuf == null) {
                                  return /* None */0;
                                } else {
                                  return /* Some */[i];
                                }
                              }), signatures))));
            var total = List.fold_left((function (res, param) {
                    Caml_array.caml_array_set(signatures, param[0], param[1]);
                    return res + 1 | 0;
                  }), List.length(existing), findSignatures(List.map((function (ins) {
                            var input = Caml_array.caml_array_get(ins, inputIdx);
                            return Js_primitive.null_undefined_to_opt(input.signatures);
                          }), otherInputs), nCoSigners - List.length(existing) | 0, existing, /* [] */0, network));
            if (total !== nCoSigners) {
              throw NotEnoughSignatures;
            } else {
              return 0;
            }
          }), match[/* usedInputs */1]);
    return txB.build();
  } else {
    return Js_exn.raiseError("finalize");
  }
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
exports.finalize = finalize;
exports.encode = encode;
exports.decode = decode;
/* BTC Not a pure module */
