// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../utils/Utils.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ViewCommon = require("../ViewCommon.bs.js");

var terms = /* array */[/* record */[
    /* heading */"aloha",
    /* paragraphs : array */["dummy"]
  ]];

var hash = Utils.hash(Belt_Array.concatMany(Belt_Array.mapU(terms, (function (section) {
                  return Belt_Array.concat(/* array */[section[/* heading */0]], section[/* paragraphs */1]);
                }))).join(" "));

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

exports.text = text;
exports.extractString = extractString;
exports.terms = terms;
exports.hash = hash;
/* hash Not a pure module */
