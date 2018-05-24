// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../application/wallet/BTC.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Address = require("../../application/wallet/Address.bs.js");
var AccountKeyChain = require("../../application/wallet/AccountKeyChain.bs.js");
var PayoutTransaction = require("../../application/wallet/PayoutTransaction.bs.js");

function make() {
  return /* record */[
          /* network : Testnet */1,
          /* accountKeyChains */AccountKeyChain.Collection[/* empty */0],
          /* balance : [] */0,
          /* payoutProcesses : [] */0
        ];
}

function accountBalance(accountIdx, param) {
  return List.assoc(accountIdx, param[/* balance */2]);
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */6],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance */state[/* balance */2],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 14 : 
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    $$event[0][/* data */2][/* accountIdx */0],
                    /* record */[
                      /* currentSpendable */BTC.zero,
                      /* reserved */BTC.zero
                    ]
                  ],
                  state[/* balance */2]
                ],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 25 : 
        var match = $$event[0];
        var data = match[/* data */6];
        var balance = List.assoc(data[/* accountIdx */0], state[/* balance */2]);
        var payoutSummary = PayoutTransaction.summary(state[/* network */0], data[/* payoutTx */1]);
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    data[/* accountIdx */0],
                    /* record */[
                      /* currentSpendable */balance[/* currentSpendable */0].minus(payoutSummary[/* reserved */0]),
                      /* reserved */balance[/* reserved */1].plus(payoutSummary[/* reserved */0])
                    ]
                  ],
                  List.remove_assoc(data[/* accountIdx */0], state[/* balance */2])
                ],
                /* payoutProcesses : :: */[
                  /* tuple */[
                    match[/* processId */0],
                    /* tuple */[
                      data[/* accountIdx */0],
                      data[/* payoutTx */1]
                    ]
                  ],
                  state[/* payoutProcesses */3]
                ]
              ];
    case 29 : 
        var match$1 = List.assoc($$event[0][/* processId */0], state[/* payoutProcesses */3]);
        var accountIdx = match$1[0];
        var balance$1 = List.assoc(accountIdx, state[/* balance */2]);
        var payoutSummary$1 = PayoutTransaction.summary(state[/* network */0], match$1[1]);
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    accountIdx,
                    /* record */[
                      /* currentSpendable */balance$1[/* currentSpendable */0].plus(payoutSummary$1[/* reserved */0]),
                      /* reserved */balance$1[/* reserved */1].minus(payoutSummary$1[/* reserved */0])
                    ]
                  ],
                  List.remove_assoc(accountIdx, state[/* balance */2])
                ],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 32 : 
        var match$2 = List.assoc($$event[0][/* processId */0], state[/* payoutProcesses */3]);
        var accountIdx$1 = match$2[0];
        var balance$2 = List.assoc(accountIdx$1, state[/* balance */2]);
        var payoutSummary$2 = PayoutTransaction.summary(state[/* network */0], match$2[1]);
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    accountIdx$1,
                    /* record */[
                      /* currentSpendable */balance$2[/* currentSpendable */0].plus(payoutSummary$2[/* reserved */0]).minus(payoutSummary$2[/* spentWithFees */2]),
                      /* reserved */balance$2[/* reserved */1].minus(payoutSummary$2[/* reserved */0])
                    ]
                  ],
                  List.remove_assoc(accountIdx$1, state[/* balance */2])
                ],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 34 : 
        var match$3 = List.assoc($$event[0][/* processId */0], state[/* payoutProcesses */3]);
        var accountIdx$2 = match$3[0];
        var balance$3 = List.assoc(accountIdx$2, state[/* balance */2]);
        var payoutSummary$3 = PayoutTransaction.summary(state[/* network */0], match$3[1]);
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    accountIdx$2,
                    /* record */[
                      /* currentSpendable */balance$3[/* currentSpendable */0].plus(payoutSummary$3[/* reserved */0]),
                      /* reserved */balance$3[/* reserved */1].minus(payoutSummary$3[/* reserved */0])
                    ]
                  ],
                  List.remove_assoc(accountIdx$2, state[/* balance */2])
                ],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 36 : 
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], state[/* accountKeyChains */1]),
                /* balance */state[/* balance */2],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    case 39 : 
        var match$4 = $$event[0];
        var accountIdx$3 = Address.Coordinates[/* accountIdx */3](match$4[/* coordinates */1]);
        var balance$4 = List.assoc(accountIdx$3, state[/* balance */2]);
        return /* record */[
                /* network */state[/* network */0],
                /* accountKeyChains */state[/* accountKeyChains */1],
                /* balance : :: */[
                  /* tuple */[
                    accountIdx$3,
                    /* record */[
                      /* currentSpendable */balance$4[/* currentSpendable */0].plus(match$4[/* amount */4]),
                      /* reserved */balance$4[/* reserved */1]
                    ]
                  ],
                  List.remove_assoc(accountIdx$3, state[/* balance */2])
                ],
                /* payoutProcesses */state[/* payoutProcesses */3]
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.accountBalance = accountBalance;
exports.apply = apply;
/* BTC Not a pure module */
