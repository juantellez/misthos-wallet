// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Json         = require("bs-json/lib/js/src/Json.js");
var Curry        = require("bs-platform/lib/js/curry.js");
var Json_decode  = require("bs-json/lib/js/src/Json_decode.js");
var Json_encode  = require("bs-json/lib/js/src/Json_encode.js");
var BitcoinjsLib = require("bitcoinjs-lib");

function toHex(buffer) {
  return buffer.toString("hex");
}

function $$event($$event$1) {
  return Json.stringify(Json_encode.object_(/* :: */[
                  /* tuple */[
                    "signature",
                    $$event$1[/* signature */4]
                  ],
                  /* [] */0
                ]));
}

var Encode = /* module */[/* event */$$event];

function Make(Item) {
  var createEvent = function (issuerKeyPair, payload) {
    var payloadHashBuffer = BitcoinjsLib.crypto.sha256(Curry._1(Item[/* encode */0], payload));
    var payloadHash = payloadHashBuffer.toString("hex");
    var issuerPubKey = issuerKeyPair.getPublicKeyBuffer().toString("hex");
    var signature = issuerKeyPair.sign(payloadHashBuffer).toDER().toString("hex");
    return /* record */[
            /* payload */payload,
            /* type_ */Curry._1(Item[/* getType */2], payload),
            /* payloadHash */payloadHash,
            /* issuerPubKey */issuerPubKey,
            /* signature */signature
          ];
  };
  var $$event = function ($$event$1) {
    return Json.stringify(Json_encode.object_(/* :: */[
                    /* tuple */[
                      "type",
                      Curry._1(Item[/* getType */2], $$event$1[/* payload */0])
                    ],
                    /* :: */[
                      /* tuple */[
                        "payload",
                        Curry._1(Item[/* encode */0], $$event$1[/* payload */0])
                      ],
                      /* :: */[
                        /* tuple */[
                          "payloadHash",
                          $$event$1[/* payloadHash */2]
                        ],
                        /* :: */[
                          /* tuple */[
                            "issuerPubKey",
                            $$event$1[/* issuerPubKey */3]
                          ],
                          /* :: */[
                            /* tuple */[
                              "signature",
                              $$event$1[/* signature */4]
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]));
  };
  var Encode = /* module */[/* event */$$event];
  var $$event$1 = function (raw) {
    var json = Json.parseOrRaise(raw);
    var type_ = Json_decode.field("type", Json_decode.string, json);
    return /* record */[
            /* payload */Curry._2(Item[/* decode */1], Json_decode.field("payload", Json_decode.string, json), type_),
            /* type_ */type_,
            /* payloadHash */Json_decode.field("payloadHash", Json_decode.string, json),
            /* issuerPubKey */Json_decode.field("issuerPubKey", Json_decode.string, json),
            /* signature */Json_decode.field("signature", Json_decode.string, json)
          ];
  };
  var Decode = /* module */[/* event */$$event$1];
  return /* module */[
          /* createEvent */createEvent,
          /* Encode */Encode,
          /* Decode */Decode
        ];
}

exports.toHex  = toHex;
exports.Encode = Encode;
exports.Make   = Make;
/* Json_encode Not a pure module */