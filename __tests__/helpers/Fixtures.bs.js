// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../src/utils/Utils.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Network = require("../../src/application/wallet/Network.bs.js");
var UserInfo = require("../../src/application/UserInfo.bs.js");
var Generators = require("./Generators.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");

function userSession(userId, keyPair) {
  var appPubKey = Utils.publicKeyFromKeyPair(keyPair);
  var chainCode = Utils.bufFromHex($$String.sub(appPubKey, 0, 64));
  return /* record */[
          /* userId */userId,
          /* appPrivateKey */keyPair.toWIF(),
          /* issuerKeyPair */keyPair,
          /* storagePrefix */UserInfo.storagePrefix(appPubKey),
          /* masterKeyChain */BitcoinjsLib.bip32.fromPrivateKey(keyPair.privateKey, chainCode, keyPair.network),
          /* network : Regtest */0
        ];
}

var keyA = BitcoinjsLib.ECPair.fromWIF("cUVTgxrs44T7zVon5dSDicBkBRjyfLwL7RF1RvR7n94ar3HEaLs1", Network.bitcoinNetwork(/* Regtest */0));

var keyB = BitcoinjsLib.ECPair.fromWIF("cPMRPo3fXGehCmFC5QsSFcZmYivsFtLVexxWi22CFwocvndXLqP1", Network.bitcoinNetwork(/* Regtest */0));

var keyC = BitcoinjsLib.ECPair.fromWIF("cPfdeLvhwvAVRRM5wiEWopWviGG65gbxQCHdtFL56PYUJXsTYixf", Network.bitcoinNetwork(/* Regtest */0));

var threeUserSessions_000 = userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"), keyA);

var threeUserSessions_001 = userSession(PrimitiveTypes.UserId[/* fromString */1]("user2"), keyB);

var threeUserSessions_002 = userSession(PrimitiveTypes.UserId[/* fromString */1]("user3"), keyC);

var threeUserSessions = /* tuple */[
  threeUserSessions_000,
  threeUserSessions_001,
  threeUserSessions_002
];

var threeUserSessionsArray = /* array */[
  threeUserSessions_000,
  threeUserSessions_001,
  threeUserSessions_002
];

function createVenture(user) {
  var init = Generators.Event[/* createVenture */0](user);
  return Generators.Log[/* make */10](user, /* record */[
              /* ventureId */PrimitiveTypes.VentureId[/* fromString */1]("venture-id"),
              /* ventureName */init[/* ventureName */1],
              /* creatorId */init[/* creatorId */2],
              /* creatorPubKey */init[/* creatorPubKey */3],
              /* metaPolicy */init[/* metaPolicy */4],
              /* systemIssuer */init[/* systemIssuer */5],
              /* network */init[/* network */6]
            ]);
}

exports.userSession = userSession;
exports.threeUserSessions = threeUserSessions;
exports.threeUserSessionsArray = threeUserSessionsArray;
exports.createVenture = createVenture;
/* keyA Not a pure module */
