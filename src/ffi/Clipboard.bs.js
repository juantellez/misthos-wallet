// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Clipboard = require("clipboard");

function make(selector, elementName) {
  return new Clipboard(selector, {
              container: document.getElementById(elementName)
            });
}

exports.make = make;
/* clipboard Not a pure module */
