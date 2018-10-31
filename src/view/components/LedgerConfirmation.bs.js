// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../application/wallet/BTC.bs.js");
var Grid = require("./Grid.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MButton = require("./MButton.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ViewCommon = require("../ViewCommon.bs.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var CommandExecutor = require("./CommandExecutor.bs.js");
var MaterialUi_Table = require("@jsiebern/bs-material-ui/src/MaterialUi_Table.bs.js");
var MaterialUi_TableRow = require("@jsiebern/bs-material-ui/src/MaterialUi_TableRow.bs.js");
var MaterialUi_TableBody = require("@jsiebern/bs-material-ui/src/MaterialUi_TableBody.bs.js");
var MaterialUi_TableCell = require("@jsiebern/bs-material-ui/src/MaterialUi_TableCell.bs.js");
var MaterialUi_TableHead = require("@jsiebern/bs-material-ui/src/MaterialUi_TableHead.bs.js");

var component = ReasonReact.statelessComponent("LedgerConfirmation");

function make(action, onCancel, summary, misthosFeeAddress, changeAddress, cmdStatus, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var destRows = Belt_List.toArray(Belt_List.mapWithIndexU(summary[/* destinations */1], (function (idx, param) {
                          return ReasonReact.element(String(idx), undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(param[0])])),
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(param[1]) + " BTC")])),
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("RECIPIENT ADDRESS")]))
                                        ]));
                        })));
              var match = summary[/* misthosFee */3];
              return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("Awaiting Ledger Confirmation")), undefined, undefined, undefined, Js_primitive.some(React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */["You will need to individually approve the following outputs:"])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_Table.make(undefined, undefined, undefined, undefined, undefined, /* array */[
                                                        ReasonReact.element(undefined, undefined, MaterialUi_TableHead.make(undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("OUTPUT ADDRESS")])),
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("AMOUNT")])),
                                                                            ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("DESCRIPTION")]))
                                                                          ]))])),
                                                        ReasonReact.element(undefined, undefined, MaterialUi_TableBody.make(undefined, undefined, undefined, undefined, /* array */[
                                                                  destRows,
                                                                  misthosFeeAddress !== undefined && match.gt(BTC.zero) ? ReasonReact.element("misthos-fee", undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(misthosFeeAddress)])),
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(summary[/* misthosFee */3]) + " BTC")])),
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("MISTHOS FEE")]))
                                                                            ])) : null,
                                                                  changeAddress !== undefined ? ReasonReact.element("change-address", undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(changeAddress[/* displayAddress */5])])),
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(summary[/* reserved */0].minus(summary[/* spentWithFees */2])) + " BTC")])),
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("CHANGE ADDRESS")]))
                                                                            ])) : null
                                                                ]))
                                                      ]))])), ReasonReact.element(undefined, undefined, CommandExecutor.Status[/* make */2](cmdStatus, action, /* array */[])), ReasonReact.element(undefined, undefined, MButton.make(undefined, (function (_e) {
                                                return Curry._1(onCancel, /* () */0);
                                              }), undefined, undefined, /* Flat */0, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Cancel")])))), undefined, undefined, undefined, /* array */[]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.make = make;
/* component Not a pure module */
