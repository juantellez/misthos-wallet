// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../utils/Utils.bs.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function getItem(key) {
  return Js_primitive.null_undefined_to_opt(localStorage.getItem(key));
}

function setItem(key, value) {
  localStorage.setItem(key, value);
  return /* () */0;
}

function encodeItems(items) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "blockstack",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), items[/* blockstack */0])
              ],
              /* :: */[
                /* tuple */[
                  "blockstackGaiaHubConfig",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), items[/* blockstackGaiaHubConfig */1])
                ],
                /* :: */[
                  /* tuple */[
                    "blockstackTransitPrivateKey",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), items[/* blockstackTransitPrivateKey */2])
                  ],
                  /* [] */0
                ]
              ]
            ]);
}

function decodeItems(raw) {
  return /* record */[
          /* blockstack */Json_decode.field("blockstack", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), raw),
          /* blockstackGaiaHubConfig */Json_decode.field("blockstackGaiaHubConfig", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), raw),
          /* blockstackTransitPrivateKey */Json_decode.field("blockstackTransitPrivateKey", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), raw)
        ];
}

function readBlockstackItemsFromStorage() {
  return /* record */[
          /* blockstack */Js_primitive.null_to_opt(localStorage.getItem("blockstack")),
          /* blockstackGaiaHubConfig */Js_primitive.null_to_opt(localStorage.getItem("blockstack-gaia-hub-config")),
          /* blockstackTransitPrivateKey */Js_primitive.null_to_opt(localStorage.getItem("blockstack-transit-private-key"))
        ];
}

function setBlockstackItems(param) {
  Utils.mapOption((function (param) {
          return setItem("blockstack", param);
        }), param[/* blockstack */0]);
  Utils.mapOption((function (param) {
          return setItem("blockstack-gaia-hub-config", param);
        }), param[/* blockstackGaiaHubConfig */1]);
  Utils.mapOption((function (param) {
          return setItem("blockstack-transit-private-key", param);
        }), param[/* blockstackTransitPrivateKey */2]);
  return /* () */0;
}

var L = 0;

exports.getItem = getItem;
exports.setItem = setItem;
exports.encodeItems = encodeItems;
exports.decodeItems = decodeItems;
exports.L = L;
exports.readBlockstackItemsFromStorage = readBlockstackItemsFromStorage;
exports.setBlockstackItems = setBlockstackItems;
/* Utils Not a pure module */
