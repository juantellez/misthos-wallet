// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function text(prim) {
  return prim;
}

function extractString($$event) {
  return $$event.target.value;
}

function ignoreEvent(fn, $$event) {
  $$event.preventDefault();
  return Curry._1(fn, /* () */0);
}

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
/* No side effect */
