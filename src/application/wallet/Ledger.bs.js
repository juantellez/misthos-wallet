// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Utils = require("../../utils/Utils.bs.js");
var Address = require("./Address.bs.js");
var Bitcoin = require("../../ffi/Bitcoin.bs.js");
var Network = require("./Network.bs.js");
var LedgerJS = require("../../ffi/LedgerJS.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var TxWrapper = require("./TxWrapper.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var WalletTypes = require("./WalletTypes.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");
var CustodianKeyChain = require("./CustodianKeyChain.bs.js");
var HwAppBtc = require("@ledgerhq/hw-app-btc");
var HwTransportU2f = require("@ledgerhq/hw-transport-u2f");

function getHDNode(path, network, ledger) {
  return ledger.getWalletPublicKey(path).then((function (pubKey) {
                return Promise.resolve(BitcoinjsLib.bip32.fromPublicKey(BitcoinjsLib.ECPair.fromPublicKey(Utils.bufFromHex(pubKey.publicKey), {
                                    network: Network.bitcoinNetwork(network)
                                  }).publicKey, Utils.bufFromHex(pubKey.chainCode), Network.bitcoinNetwork(network)));
              }));
}

function misthosPurposeNode(param) {
  return getHDNode(CustodianKeyChain.misthosWalletPurposePath, /* Mainnet */2, param);
}

function pathToBip45Root(ventureId, misthosPurposeNode, accountIdx, keyChainIdx) {
  return CustodianKeyChain.makePathToBip45Root(ventureId, accountIdx, keyChainIdx, misthosPurposeNode);
}

function getSigningPathAndPubKey(ventureId, misthosPurposeNode, keyChain, coordinates) {
  var path = pathToBip45Root(ventureId, misthosPurposeNode, Address.Coordinates[/* accountIdx */3](coordinates), CustodianKeyChain.keyChainIdx(keyChain));
  return /* tuple */[
          path + ("/" + (String(WalletTypes.CoSignerIndex[/* toInt */0](Address.Coordinates[/* coSignerIdx */5](coordinates))) + ("/" + (String(WalletTypes.ChainIndex[/* toInt */0](Address.Coordinates[/* chainIdx */6](coordinates))) + ("/" + String(WalletTypes.AddressIndex[/* toInt */0](Address.Coordinates[/* addressIdx */7](coordinates)))))))),
          CustodianKeyChain.getPublicKey(Address.Coordinates[/* coSignerIdx */5](coordinates), Address.Coordinates[/* chainIdx */6](coordinates), Address.Coordinates[/* addressIdx */7](coordinates), keyChain)
        ];
}

function getCustodianKeyChain(network, ventureId, accountIdx, keyChainIdx) {
  return HwTransportU2f.default.create().then((function (transport) {
                      var btc = new HwAppBtc.default(transport);
                      return Promise.all(/* tuple */[
                                  Promise.resolve(btc),
                                  misthosPurposeNode(btc)
                                ]);
                    })).then((function (param) {
                    var misthosPurposeNode = param[1];
                    var path = pathToBip45Root(ventureId, misthosPurposeNode, accountIdx, keyChainIdx);
                    return Promise.all(/* tuple */[
                                Promise.resolve(Bitcoin.Address[/* fromHDNode */1](misthosPurposeNode)),
                                getHDNode(path, network, param[0])
                              ]);
                  })).then((function (param) {
                  return Promise.resolve(/* Ok */Block.__(0, [CustodianKeyChain.fromHardwareNode(param[0], accountIdx, keyChainIdx, param[1])]));
                })).catch((function (error) {
                return Promise.resolve(/* Error */Block.__(1, [LedgerJS.decodeError(error)]));
              }));
}

var dummyPath = "0'";

var dummyPubKey = "DUMMY";

function signPayout(ventureId, userId, param, inputTxHexs, accountKeyChains) {
  var usedInputs = param[/* usedInputs */1];
  var txHex = param[/* txHex */0];
  var txWrapper = TxWrapper.make(txHex);
  return HwTransportU2f.default.create().then((function (transport) {
                  var btc = new HwAppBtc.default(transport);
                  return Promise.all(/* tuple */[
                              Promise.resolve(btc),
                              misthosPurposeNode(btc)
                            ]);
                })).then((function (param) {
                var misthosPurposeNode = param[1];
                var btc = param[0];
                var infos = Belt_Array.mapWithIndexU(Belt_Array.zip(usedInputs, Belt_Array.map(inputTxHexs, (function (param) {
                                return btc.splitTransaction(param, true);
                              }))), (function (idx, param) {
                        var match = param[0];
                        var coordinates = match[/* coordinates */6];
                        var address = Address.find(coordinates, accountKeyChains);
                        var accountKeyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](coordinates), Address.Coordinates[/* keyChainIdent */4](coordinates), accountKeyChains);
                        var match$1 = Belt_List.getAssoc(accountKeyChain[/* custodianKeyChains */4], userId, PrimitiveTypes.UserId[/* eq */5]);
                        var pathAndPubKey;
                        if (match$1) {
                          var keyChain = match$1[0];
                          pathAndPubKey = Js_option.isSome(CustodianKeyChain.hardwareId(keyChain)) ? getSigningPathAndPubKey(ventureId, misthosPurposeNode, keyChain, coordinates) : /* tuple */[
                              dummyPath,
                              dummyPubKey
                            ];
                        } else {
                          pathAndPubKey = /* tuple */[
                            dummyPath,
                            dummyPubKey
                          ];
                        }
                        return /* tuple */[
                                /* tuple */[
                                  param[1],
                                  match[/* txOutputN */1],
                                  address[/* witnessScript */3],
                                  Belt_Array.getExn(txWrapper[/* inputs */1], idx)[/* sequence */1]
                                ],
                                pathAndPubKey
                              ];
                      }));
                var match = Belt_Array.unzip(infos);
                var match$1 = Belt_Array.unzip(match[1]);
                var pubKeys = match$1[1];
                var outputScriptHex = btc.serializeTransactionOutputs(btc.splitTransaction(txHex, true));
                return btc.signP2SHTransaction(match[0], match$1[0], Utils.bufToHex(outputScriptHex), 0, 1, true, 2).then((function (signatures) {
                              return Promise.resolve(Belt_Array.mapU(Belt_Array.zip(pubKeys, signatures), (function (param) {
                                                var pubKey = param[0];
                                                var match = pubKey === dummyPubKey;
                                                if (match) {
                                                  return /* None */0;
                                                } else {
                                                  return /* Some */[/* tuple */[
                                                            pubKey,
                                                            param[1]
                                                          ]];
                                                }
                                              })));
                            }));
              }));
}

var L = 0;

var B = 0;

exports.L = L;
exports.B = B;
exports.getHDNode = getHDNode;
exports.misthosPurposeNode = misthosPurposeNode;
exports.pathToBip45Root = pathToBip45Root;
exports.getSigningPathAndPubKey = getSigningPathAndPubKey;
exports.getCustodianKeyChain = getCustodianKeyChain;
exports.dummyPath = dummyPath;
exports.dummyPubKey = dummyPubKey;
exports.signPayout = signPayout;
/* Utils Not a pure module */
