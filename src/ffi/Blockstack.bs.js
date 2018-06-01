// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Blockstack = require("blockstack");

function getFileFromUser(file, username) {
  return Blockstack.getFile(file, {
              username: username,
              decrypt: false
            });
}

function getFileFromUserAndDecrypt(file, username) {
  return Blockstack.getFile(file, {
              username: username,
              decrypt: true
            });
}

exports.getFileFromUser = getFileFromUser;
exports.getFileFromUserAndDecrypt = getFileFromUserAndDecrypt;
/* blockstack Not a pure module */
