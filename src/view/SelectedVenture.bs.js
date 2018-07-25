// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var Router = require("./Router.bs.js");
var Balance = require("./components/Balance.bs.js");
var MButton = require("./components/MButton.bs.js");
var Partner = require("./components/Partner.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var MFabButton = require("./components/MFabButton.bs.js");
var ScrollList = require("./components/ScrollList.bs.js");
var StatusChip = require("./components/StatusChip.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Environment = require("../web/Environment.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Transaction = require("./components/Transaction.bs.js");
var WarningsText = require("./text/WarningsText.bs.js");
var AlertListItem = require("./components/AlertListItem.bs.js");
var MListSubheader = require("./components/MListSubheader.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");

var component = ReasonReact.reducerComponent("SelectedVenture");

var addressesButtonIcon = Css.style(/* :: */[
      Css.marginTop(Css.px(Caml_int32.imul(Theme.space(2), -1))),
      /* :: */[
        Css.marginBottom(Css.px(Caml_int32.imul(Theme.space(1), -1))),
        /* :: */[
          Css.transform(Css.rotate(Css.deg(90))),
          /* [] */0
        ]
      ]
    ]);

var atRiskAddressButtonIcon = Css.style(/* :: */[
      Css.marginTop(Css.px(Caml_int32.imul(Theme.space(2), -1))),
      /* :: */[
        Css.marginBottom(Css.px(Caml_int32.imul(Theme.space(1), -1))),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* addressesButtonIcon */addressesButtonIcon,
  /* atRiskAddressButtonIcon */atRiskAddressButtonIcon
];

function updateLoggedInStatus(partners, send) {
  return Belt_List.forEach(Belt_List.keep(partners, (function (p) {
                    return p[/* joinedWallet */5] === false;
                  })), (function (p) {
                p[/* hasLoggedIn */4].then((function (known) {
                        return Promise.resolve(Curry._1(send, /* SetHasLoggedIn */[
                                        p[/* userId */0],
                                        known
                                      ]));
                      }));
                return /* () */0;
              }));
}

function make(viewData, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              updateLoggedInStatus(viewData[/* partners */4], param[/* send */3]);
              return /* record */[
                      /* viewData */viewData,
                      /* loggedInStatus */param[/* state */1][/* loggedInStatus */1]
                    ];
            }),
          /* didMount */(function (param) {
              return updateLoggedInStatus(viewData[/* partners */4], param[/* send */3]);
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var match = param[/* state */1];
              var loggedInStatus = match[/* loggedInStatus */1];
              var viewData = match[/* viewData */0];
              var match$1 = Environment.get(/* () */0)[/* network */5];
              var warning = match$1 !== 1 ? /* None */0 : /* Some */[WarningsText.testnet];
              var getPartnerStatusChip = function (endorsed, joinedWallet, hasLoggedIn) {
                if (endorsed) {
                  if (joinedWallet) {
                    return null;
                  } else {
                    var exit = 0;
                    if (hasLoggedIn && !hasLoggedIn[0]) {
                      return ReasonReact.element(/* None */0, /* None */0, StatusChip.make(/* Pending */1, "SIGN IN REQUIRED", /* array */[]));
                    } else {
                      exit = 1;
                    }
                    if (exit === 1) {
                      return ReasonReact.element(/* None */0, /* None */0, StatusChip.make(/* Pending */1, "SYNC REQUIRED", /* array */[]));
                    }
                    
                  }
                } else {
                  return ReasonReact.element(/* None */0, /* None */0, StatusChip.make(/* Pending */1, "PENDING", /* array */[]));
                }
              };
              var alerts = Belt_List.keepMap(viewData[/* prospects */5], (function (prospect) {
                      var match = prospect[/* canVote */3];
                      if (match) {
                        var match$1 = prospect[/* data */5][/* processType */1];
                        var partial_arg_000 = viewData[/* ventureId */0];
                        var partial_arg_001 = /* Partner */Block.__(0, [prospect[/* processId */0]]);
                        var partial_arg = /* Venture */Block.__(0, [
                            partial_arg_000,
                            partial_arg_001
                          ]);
                        var match$2 = prospect[/* data */5][/* processType */1];
                        return /* Some */[ReasonReact.element(/* Some */[PrimitiveTypes.ProcessId[/* toString */0](prospect[/* processId */0])], /* None */0, AlertListItem.make(match$1 ? /* Plus */0 : /* Minus */1, (function (param) {
                                            return Router.clickToRoute(partial_arg, param);
                                          }), ViewCommon.text((
                                              match$2 ? "Addition" : "Removal"
                                            ) + (" of '" + (PrimitiveTypes.UserId[/* toString */0](prospect[/* data */5][/* userId */0]) + "'"))), /* Some */[ViewCommon.text("proposed by " + PrimitiveTypes.UserId[/* toString */0](prospect[/* proposedBy */2]))], /* array */[]))];
                      } else {
                        return /* None */0;
                      }
                    }));
              var prospects = Belt_List.map(viewData[/* prospects */5], (function (partner) {
                      var partial_arg_000 = viewData[/* ventureId */0];
                      var partial_arg_001 = /* Partner */Block.__(0, [partner[/* processId */0]]);
                      var partial_arg = /* Venture */Block.__(0, [
                          partial_arg_000,
                          partial_arg_001
                        ]);
                      return ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](partner[/* data */5][/* userId */0]) + "-prospect"], /* None */0, Partner.make(partner[/* data */5][/* userId */0], /* None */0, /* None */0, /* Some */[getPartnerStatusChip(false, false, /* Some */[false])], /* Some */[(function (param) {
                                          return Router.clickToRoute(partial_arg, param);
                                        })], /* None */0, /* array */[]));
                    }));
              var currentPartners = Belt_List.map(viewData[/* partners */4], (function (partner) {
                      var partial_arg_000 = viewData[/* ventureId */0];
                      var partial_arg_001 = /* Partner */Block.__(0, [partner[/* processId */1]]);
                      var partial_arg = /* Venture */Block.__(0, [
                          partial_arg_000,
                          partial_arg_001
                        ]);
                      return ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](partner[/* userId */0])], /* None */0, Partner.make(partner[/* userId */0], partner[/* name */2], /* None */0, /* Some */[getPartnerStatusChip(true, partner[/* joinedWallet */5], Belt_Map.get(loggedInStatus, partner[/* userId */0]))], /* Some */[(function (param) {
                                          return Router.clickToRoute(partial_arg, param);
                                        })], /* None */0, /* array */[]));
                    }));
              var stickyHeader = function ($staropt$star, header) {
                var first = $staropt$star ? $staropt$star[0] : false;
                return /* :: */[
                        ReasonReact.element(/* None */0, /* None */0, MListSubheader.make(/* Some */[first], /* array */[ViewCommon.text(header)])),
                        /* [] */0
                      ];
              };
              var showHeaders = Belt_List.length(prospects) !== 0;
              var partners = Belt_List.toArray(Belt_List.concatMany(/* array */[
                        alerts,
                        showHeaders ? stickyHeader(/* Some */[true], "Pending Approval") : /* [] */0,
                        prospects,
                        showHeaders ? stickyHeader(/* None */0, "Current") : /* [] */0,
                        currentPartners
                      ]));
              var payouts = Belt_List.toArray(Belt_List.map(viewData[/* payoutsPendingBroadcast */8], (function (param) {
                          var processId = param[/* processId */0];
                          var partial_arg_000 = viewData[/* ventureId */0];
                          var partial_arg_001 = /* Payout */Block.__(1, [processId]);
                          var partial_arg = /* Venture */Block.__(0, [
                              partial_arg_000,
                              partial_arg_001
                            ]);
                          return ReasonReact.element(/* Some */[PrimitiveTypes.ProcessId[/* toString */0](processId)], /* None */0, AlertListItem.make(/* ArrowUp */2, (function (param) {
                                            return Router.clickToRoute(partial_arg, param);
                                          }), ViewCommon.text("Payout of " + (BTC.format(param[/* data */5][/* summary */1][/* spentWithFees */2]) + " BTC")), /* Some */[ViewCommon.text("proposed by " + PrimitiveTypes.UserId[/* toString */0](param[/* proposedBy */2]))], /* array */[]));
                        })));
              var unconfirmed = viewData[/* unconfirmedTxs */6];
              var confirmed = viewData[/* confirmedTxs */7];
              var transactions = Belt_List.toArray(Belt_List.concatMany(/* array */[
                        Belt_List.mapWithIndex(unconfirmed, (function (iter, tx) {
                                var match = tx[/* txType */0];
                                var match$1 = match ? /* tuple */[
                                    /* Payout */1,
                                    "unconfirmed payout"
                                  ] : /* tuple */[
                                    /* Income */0,
                                    "unconfirmed income"
                                  ];
                                var partial_arg = tx[/* detailsLink */5];
                                return ReasonReact.element(/* Some */[String(iter)], /* None */0, Transaction.make(match$1[0], match$1[1], tx[/* amount */3], tx[/* date */4], /* None */0, /* Some */[(function (param) {
                                                    return Router.clickToRoute(partial_arg, param);
                                                  })], /* array */[]));
                              })),
                        Belt_List.mapWithIndex(confirmed, (function (iter, tx) {
                                var match = tx[/* txType */0];
                                var match$1 = match ? /* tuple */[
                                    /* Payout */1,
                                    "payout"
                                  ] : /* tuple */[
                                    /* Income */0,
                                    "income"
                                  ];
                                var partial_arg = tx[/* detailsLink */5];
                                return ReasonReact.element(/* Some */[String(iter + Belt_List.length(unconfirmed) | 0)], /* None */0, Transaction.make(match$1[0], match$1[1], tx[/* amount */3], tx[/* date */4], /* None */0, /* Some */[(function (param) {
                                                    return Router.clickToRoute(partial_arg, param);
                                                  })], /* array */[]));
                              }))
                      ]));
              var match$2 = viewData[/* atRiskWarning */1];
              var partial_arg_000 = viewData[/* ventureId */0];
              var partial_arg = /* Venture */Block.__(0, [
                  partial_arg_000,
                  /* Addresses */4
                ]);
              var match$3 = viewData[/* atRiskWarning */1];
              var match$4 = viewData[/* readOnly */3];
              var partial_arg_000$1 = viewData[/* ventureId */0];
              var partial_arg$1 = /* Venture */Block.__(0, [
                  partial_arg_000$1,
                  /* ManagePartners */1
                ]);
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Partners")], /* Some */[ViewCommon.text("Transactions")], /* Some */[React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                            ViewCommon.text(viewData[/* ventureName */2]),
                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* Some */[match$2 ? atRiskAddressButtonIcon : addressesButtonIcon], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function (param) {
                                                          return Router.clickToRoute(partial_arg, param);
                                                        })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[match$3 ? Icons.alert : Icons.arrowUpCircle]))
                                          ])), ReasonReact.element(/* None */0, /* None */0, Balance.make(viewData[/* balance */9][/* currentSpendable */0], /* Some */[viewData[/* balance */9][/* reserved */1]], /* array */[])))], /* Some */[React.createElement("div", {
                                    className: Css.style(/* :: */[
                                          Css.display(/* flex */-1010954439),
                                          /* [] */0
                                        ])
                                  }, ReasonReact.element(/* None */0, /* None */0, MFabButton.make(/* Aqua */0, /* Venture */Block.__(0, [
                                              viewData[/* ventureId */0],
                                              /* Receive */5
                                            ]), /* array */[ViewCommon.text("RECEIVE")])), React.createElement("div", {
                                        className: Css.style(/* :: */[
                                              Css.width(Css.px(Theme.space(8))),
                                              /* [] */0
                                            ])
                                      }), ReasonReact.element(/* None */0, /* None */0, MFabButton.make(/* Orange */1, /* Venture */Block.__(0, [
                                              viewData[/* ventureId */0],
                                              /* CreatePayout */2
                                            ]), /* array */[ViewCommon.text("PAY OUT")])))], /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, match$4 ? React.createElement("b", undefined, ViewCommon.text("YOU HAVE BEEN REMOVED FROM THIS VENTURE; VENTURE IS IN READ ONLY")) : null, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[partners]))])), ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function (param) {
                                                return Router.clickToRoute(partial_arg$1, param);
                                              })], /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Add or Remove Partners")])))], /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[
                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[payouts])),
                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[transactions]))
                                          ])))], /* None */0, warning, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewData */viewData,
                      /* loggedInStatus */PrimitiveTypes.UserId[/* makeMap */8](/* () */0)
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [/* record */[
                          /* viewData */state[/* viewData */0],
                          /* loggedInStatus */Belt_Map.set(state[/* loggedInStatus */1], action[0], action[1])
                        ]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.updateLoggedInStatus = updateLoggedInStatus;
exports.make = make;
/* component Not a pure module */
