// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function getItem(key) {
  return Caml_option.nullable_to_opt(localStorage.getItem(key));
}

function setItem(key, value) {
  localStorage.setItem(key, value);
  return /* () */0;
}

function removeItem(key) {
  localStorage.removeItem(key);
  return /* () */0;
}

exports.getItem = getItem;
exports.setItem = setItem;
exports.removeItem = removeItem;
/* No side effect */
