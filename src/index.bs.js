// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var App = require("./view/App.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var JssProvider = require("./view/JssProvider.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SessionStore = require("./view/SessionStore.bs.js");

((window.blockstack = require('blockstack')));

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, JssProvider.make(/* array */[ReasonReact.element(/* None */0, /* None */0, SessionStore.make((function (session, updateSession) {
                          return ReasonReact.element(/* None */0, /* None */0, App.make(session, updateSession, /* array */[]));
                        })))])), "root");

/*  Not a pure module */
