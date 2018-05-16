// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Body4 = require("./components/Body4.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Partner = require("./components/Partner.bs.js");
var ViewModel = require("./model/ViewModel.bs.js");
var LinkButton = require("./components/LinkButton.bs.js");
var MFabButton = require("./components/MFabButton.bs.js");
var MaterialUi = require("@jsiebern/bs-material-ui/src/MaterialUi.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var PayoutInput = require("./components/PayoutInput.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");

var component = ReasonReact.reducerComponent("SelectedVenture");

var flexSpaceBetween = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* spaceBetween */516682146),
        /* [] */0
      ]
    ]);

var Styles = /* module */[/* flexSpaceBetween */flexSpaceBetween];

function make(initialViewModel, session, commands, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function () {
              return /* record */[
                      /* viewModel */initialViewModel,
                      /* selfRemoved */ViewModel.isPartner(session[/* userId */0], initialViewModel) === false,
                      /* balance */ViewModel.balance(initialViewModel)
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var partners = $$Array.of_list(List.map((function (partner) {
                          return ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](partner[/* userId */0])], /* None */0, Partner.make(partner, /* array */[]));
                        }), ViewModel.partners(state[/* viewModel */0])));
              var prospects = $$Array.of_list(List.map((function (prospect) {
                          return React.createElement("li", {
                                      key: PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1])
                                    }, ViewCommon.text("'" + (PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1]) + ("' endorsed by: " + List.fold_left((function (state, partnerId) {
                                                    return state + (partnerId + " ");
                                                  }), "", List.map(PrimitiveTypes.UserId[/* toString */0], prospect[/* endorsedBy */2]))))), List.mem(session[/* userId */0], prospect[/* endorsedBy */2]) === false ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePartner */Block.__(0, [prospect[/* processId */0]]));
                                              })
                                          }, ViewCommon.text("Endorse Partner")) : null);
                        }), ViewModel.prospects(state[/* viewModel */0])));
              var removalProspects = $$Array.of_list(List.map((function (prospect) {
                          return React.createElement("li", {
                                      key: PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1])
                                    }, ViewCommon.text("'" + (PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1]) + ("' endorsed by: " + List.fold_left((function (state, partnerId) {
                                                    return state + (partnerId + " ");
                                                  }), "", List.map(PrimitiveTypes.UserId[/* toString */0], prospect[/* endorsedBy */2]))))), List.mem(session[/* userId */0], prospect[/* endorsedBy */2]) === false ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePartnerRemoval */Block.__(1, [prospect[/* processId */0]]));
                                              })
                                          }, ViewCommon.text("Endorse Removal")) : null);
                        }), ViewModel.removalProspects(state[/* viewModel */0])));
              var match = ViewModel.transactions(state[/* viewModel */0]);
              var unconfirmed = match[1];
              var transactions = $$Array.of_list(List.append(List.mapi((function (iter, tx) {
                              var tmp;
                              tmp = tx.tag ? ViewCommon.text("Unconfirmed Payout: '" + (tx[0] + ("' - " + (BTC.format(tx[1]) + "btc")))) : ViewCommon.text("Unconfirmed Income: '" + (tx[0] + ("' - " + (BTC.format(tx[1]) + "btc"))));
                              return React.createElement("li", {
                                          key: String(iter)
                                        }, tmp);
                            }), unconfirmed), List.mapi((function (iter, tx) {
                              var tmp;
                              tmp = tx.tag ? ViewCommon.text("PAYOUT: " + (tx[2].toString() + (" - " + (BTC.format(tx[1]) + "btc")))) : ViewCommon.text("INCOME: " + (tx[2].toString() + (" - " + (BTC.format(tx[1]) + "btc"))));
                              return React.createElement("li", {
                                          key: String(iter + List.length(unconfirmed) | 0)
                                        }, tmp);
                            }), match[0])));
              var payouts = $$Array.of_list(List.map((function (payout) {
                          var match = payout[/* status */4];
                          var tmp;
                          tmp = typeof match === "number" ? "pending" : (
                              match.tag ? "failed (error: '" + (match[0] + "')") : "completed (txId: " + (match[0] + ")")
                            );
                          var match$1 = payout[/* status */4];
                          var match$2 = List.mem(session[/* userId */0], payout[/* endorsedBy */2]);
                          var match$3 = payout[/* status */4];
                          var match$4 = List.mem(session[/* userId */0], payout[/* rejectedBy */3]);
                          var match$5 = List.mem(session[/* userId */0], payout[/* endorsedBy */2]);
                          return React.createElement("li", {
                                      key: PrimitiveTypes.ProcessId[/* toString */0](payout[/* processId */0])
                                    }, ViewCommon.text("'" + (PrimitiveTypes.ProcessId[/* toString */0](payout[/* processId */0]) + ("' status: " + (tmp + (" endorsed by: " + (List.fold_left((function (state, partnerId) {
                                                          return state + (partnerId + " ");
                                                        }), "", List.map(PrimitiveTypes.UserId[/* toString */0], payout[/* endorsedBy */2])) + (" rejected by: " + List.fold_left((function (state, partnerId) {
                                                            return state + (partnerId + " ");
                                                          }), "", List.map(PrimitiveTypes.UserId[/* toString */0], payout[/* rejectedBy */3]))))))))), typeof match$1 === "number" && !match$2 ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePayout */Block.__(4, [payout[/* processId */0]]));
                                              })
                                          }, ViewCommon.text("Endorse Payout")) : null, typeof match$3 === "number" && !(match$4 || match$5) ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* RejectPayout */Block.__(3, [payout[/* processId */0]]));
                                              })
                                          }, ViewCommon.text("Reject Payout")) : null);
                        }), ViewModel.payouts(state[/* viewModel */0])));
              var match$1 = state[/* selfRemoved */1];
              return ReasonReact.element(/* None */0, /* None */0, Body4.make(/* Some */[/* :: */[
                                "Partners",
                                /* :: */[
                                  "Transactions",
                                  /* [] */0
                                ]
                              ]], React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text(ViewModel.ventureName(state[/* viewModel */0]))])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Display2 */-11760688, /* None */0, /* array */[
                                          React.createElement("b", {
                                                key: "currentSpendable"
                                              }, ViewCommon.text(BTC.format(state[/* balance */2][/* currentSpendable */0]))),
                                          ViewCommon.text("BTC")
                                        ])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Subheading */148169314, /* None */0, /* array */[
                                          React.createElement("b", {
                                                key: "reserved"
                                              }, ViewCommon.text(BTC.format(state[/* balance */2][/* reserved */1]))),
                                          ViewCommon.text(" BTC IN RESERVE")
                                        ]))), React.createElement("div", {
                                  className: flexSpaceBetween
                                }, ReasonReact.element(/* None */0, /* None */0, MFabButton.make(/* Aqua */0, /* Venture */Block.__(0, [
                                            ViewModel.ventureId(state[/* viewModel */0]),
                                            /* Receive */3
                                          ]), /* array */[ViewCommon.text("RECEIVE")])), ReasonReact.element(/* None */0, /* None */0, MFabButton.make(/* Orange */1, /* Venture */Block.__(0, [
                                            ViewModel.ventureId(state[/* viewModel */0]),
                                            /* Payout */2
                                          ]), /* array */[ViewCommon.text("PAY OUT")]))), React.createElement("div", undefined, match$1 ? React.createElement("b", undefined, ViewCommon.text("YOU HAVE BEEN REMOVED FROM THIS VENTURE; VENTURE IS IN READ ONLY")) : null, ReasonReact.element(/* None */0, /* None */0, MaterialUi.List[/* make */1](/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[partners])), React.createElement("h4", undefined, ViewCommon.text("Prospects:")), React.createElement("ul", undefined, prospects), React.createElement("h4", undefined, ViewCommon.text("To be removed:")), React.createElement("ul", undefined, removalProspects), ReasonReact.element(/* None */0, /* None */0, LinkButton.make(/* Venture */Block.__(0, [
                                            ViewModel.ventureId(state[/* viewModel */0]),
                                            /* ManagePartners */1
                                          ]), /* Some */[true], /* array */[ViewCommon.text("Add or Remove Partners")]))), React.createElement("div", undefined, React.createElement("h3", undefined, ViewCommon.text("Wallet:")), ReasonReact.element(/* None */0, /* None */0, PayoutInput.make((function (destinations) {
                                            return Curry._1(send, /* ProposePayout */Block.__(2, [destinations]));
                                          }), /* array */[])), React.createElement("h4", undefined, ViewCommon.text("Payout processes:")), React.createElement("ul", undefined, payouts), React.createElement("h4", undefined, ViewCommon.text("Transactions:")), React.createElement("ul", undefined, transactions)), /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewModel */initialViewModel,
                      /* selfRemoved */ViewModel.isPartner(session[/* userId */0], initialViewModel) === false,
                      /* balance */ViewModel.balance(initialViewModel)
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* selfRemoved */1];
              if (match) {
                return /* NoUpdate */0;
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      Curry._1(commands[/* endorsePartner */1], action[0]);
                      return /* NoUpdate */0;
                  case 1 : 
                      Curry._1(commands[/* endorsePartnerRemoval */5], action[0]);
                      return /* NoUpdate */0;
                  case 2 : 
                      Curry._3(commands[/* proposePayout */6], WalletTypes.AccountIndex[/* default */9], action[0], BTC.fromSatoshis(/* int64 */[
                                /* hi */0,
                                /* lo */100
                              ]));
                      return /* NoUpdate */0;
                  case 3 : 
                      Curry._1(commands[/* rejectPayout */8], action[0]);
                      return /* NoUpdate */0;
                  case 4 : 
                      Curry._1(commands[/* endorsePayout */7], action[0]);
                      return /* NoUpdate */0;
                  
                }
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
