// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../utils/Utils.bs.js");
var Network = require("./wallet/Network.bs.js");
var UserInfo = require("./UserInfo.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("./PrimitiveTypes.bs.js");

function fromUserData(userData, network) {
  var match = userData.username;
  if (match == null) {
    return undefined;
  } else {
    var issuerKeyPair = Utils.keyPairFromPrivateKey(Network.bitcoinNetwork(network), userData.appPrivateKey);
    return /* record */[
            /* userId */PrimitiveTypes.UserId[/* fromString */1](match),
            /* appPrivateKey */userData.appPrivateKey,
            /* issuerKeyPair */issuerKeyPair,
            /* storagePrefix */UserInfo.storagePrefix(Utils.publicKeyFromKeyPair(issuerKeyPair)),
            /* masterKeyChain */BitcoinjsLib.bip32.fromPrivateKey(issuerKeyPair.privateKey, Utils.bufFromHex("c8bce5e6dac6f931af17863878cce2ca3b704c61b3d775fe56881cc8ff3ab1cb"), issuerKeyPair.network),
            /* network */network
          ];
  }
}

exports.fromUserData = fromUserData;
/* Utils Not a pure module */
