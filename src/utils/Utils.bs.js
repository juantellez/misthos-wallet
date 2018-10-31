// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var BitcoinjsLib = require("bitcoinjs-lib");

function bufToHex(buf) {
  return buf.toString("hex");
}

function bufFromHex(param) {
  return Buffer.from(param, "hex");
}

function hexByteLength(param) {
  return Buffer.byteLength(param, "hex");
}

function keyPairFromPrivateKey(network, key) {
  return BitcoinjsLib.ECPair.fromPrivateKey(bufFromHex(key), {
              network: network
            });
}

function publicKeyFromKeyPair(pair) {
  return pair.publicKey.toString("hex");
}

function keyFromPublicKey(network, key) {
  return BitcoinjsLib.ECPair.fromPublicKey(bufFromHex(key), {
              network: network
            });
}

function signatureToDER(ecSignature) {
  return BitcoinjsLib.script.signature.encode(ecSignature, BitcoinjsLib.Transaction.SIGHASH_ALL).slice(0, -1).toString("hex");
}

function signatureFromDER(ecSignature) {
  var sigHash = Buffer.alloc(1);
  sigHash.writeUInt8(BitcoinjsLib.Transaction.SIGHASH_ALL, 0);
  return BitcoinjsLib.script.signature.decode(Buffer.concat(/* array */[
                  bufFromHex(ecSignature),
                  sigHash
                ])).signature;
}

function hash(s) {
  return BitcoinjsLib.crypto.sha256(s).toString("hex");
}

function hashCode(s) {
  return List.fold_left((function (h, c) {
                var h$1 = ((h << 5) - h | 0) + Caml_string.get(c, 0) | 0;
                return h$1 & h$1;
              }), 0, $$Array.to_list(Array.from(s))) & 2147483647;
}

function $great$great(f, g, v) {
  return Curry._1(g, Curry._1(f, v));
}

function printError(message, error) {
  console.log("Error - " + (message + ":"));
  console.log(error);
  return /* () */0;
}

function mapOption(fn, param) {
  if (param !== undefined) {
    return Js_primitive.some(Curry._1(fn, Js_primitive.valFromOption(param)));
  }
  
}

function andThen(fn, param) {
  if (param !== undefined) {
    return Curry._1(fn, Js_primitive.valFromOption(param));
  }
  
}

function maybeField(name, decoder) {
  return (function (param) {
      return Json_decode.withDefault(undefined, (function (param) {
                    return Json_decode.field(name, (function (param) {
                                  return Json_decode.optional(decoder, param);
                                }), param);
                  }), param);
    });
}

function encodeFloat(prim) {
  return prim;
}

var decodeFloat = Json_decode.$$float;

exports.bufToHex = bufToHex;
exports.bufFromHex = bufFromHex;
exports.hexByteLength = hexByteLength;
exports.keyPairFromPrivateKey = keyPairFromPrivateKey;
exports.publicKeyFromKeyPair = publicKeyFromKeyPair;
exports.keyFromPublicKey = keyFromPublicKey;
exports.signatureToDER = signatureToDER;
exports.signatureFromDER = signatureFromDER;
exports.hash = hash;
exports.hashCode = hashCode;
exports.$great$great = $great$great;
exports.printError = printError;
exports.mapOption = mapOption;
exports.andThen = andThen;
exports.maybeField = maybeField;
exports.encodeFloat = encodeFloat;
exports.decodeFloat = decodeFloat;
/* bitcoinjs-lib Not a pure module */
