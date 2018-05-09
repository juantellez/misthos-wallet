// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Policy = require("../application/Policy.bs.js");
var Address = require("../application/wallet/Address.bs.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var ViewModel__WalletState = require("./ViewModel__WalletState.bs.js");

function make() {
  return /* record */[
          /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
          /* name */"",
          /* partners : [] */0,
          /* prospects : [] */0,
          /* removalProspects : [] */0,
          /* metaPolicy */Policy.unanimous,
          /* partnerPolicy */Policy.unanimous,
          /* incomeAddresses : [] */0,
          /* payouts : [] */0,
          /* wallet */ViewModel__WalletState.make(/* () */0)
        ];
}

function apply($$event, state) {
  var state_000 = /* ventureId */state[/* ventureId */0];
  var state_001 = /* name */state[/* name */1];
  var state_002 = /* partners */state[/* partners */2];
  var state_003 = /* prospects */state[/* prospects */3];
  var state_004 = /* removalProspects */state[/* removalProspects */4];
  var state_005 = /* metaPolicy */state[/* metaPolicy */5];
  var state_006 = /* partnerPolicy */state[/* partnerPolicy */6];
  var state_007 = /* incomeAddresses */state[/* incomeAddresses */7];
  var state_008 = /* payouts */state[/* payouts */8];
  var state_009 = /* wallet */ViewModel__WalletState.apply($$event, state[/* wallet */9]);
  var state$1 = /* record */[
    state_000,
    state_001,
    state_002,
    state_003,
    state_004,
    state_005,
    state_006,
    state_007,
    state_008,
    state_009
  ];
  switch ($$event.tag | 0) {
    case 0 : 
        var match = $$event[0];
        var metaPolicy = match[/* metaPolicy */4];
        return /* record */[
                /* ventureId */match[/* ventureId */0],
                /* name */match[/* ventureName */1],
                state_002,
                state_003,
                state_004,
                /* metaPolicy */metaPolicy,
                /* partnerPolicy */metaPolicy,
                state_007,
                state_008,
                state_009
              ];
    case 1 : 
        var match$1 = $$event[0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                /* prospects : :: */[
                  /* record */[
                    /* processId */match$1[/* processId */0],
                    /* userId */match$1[/* data */5][/* id */1],
                    /* endorsedBy : :: */[
                      match$1[/* supporterId */3],
                      /* [] */0
                    ]
                  ],
                  state_003
                ],
                state_004,
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 3 : 
        var match$2 = $$event[0];
        var supporterId = match$2[/* supporterId */1];
        var processId = match$2[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                /* prospects */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* userId */p[/* userId */1],
                                  /* endorsedBy : :: */[
                                    supporterId,
                                    p[/* endorsedBy */2]
                                  ]
                                ];
                        } else {
                          return p;
                        }
                      }), state_003),
                state_004,
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 4 : 
        var data = $$event[0][/* data */2];
        return /* record */[
                state_000,
                state_001,
                /* partners : :: */[
                  /* record */[
                    /* userId */data[/* id */1],
                    /* name : None */0
                  ],
                  state_002
                ],
                /* prospects */List.filter((function (p) {
                          return PrimitiveTypes.UserId[/* neq */6](p[/* userId */1], data[/* id */1]);
                        }))(state_003),
                state_004,
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 5 : 
        var match$3 = $$event[0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                /* removalProspects : :: */[
                  /* record */[
                    /* processId */match$3[/* processId */0],
                    /* userId */match$3[/* data */5][/* id */0],
                    /* endorsedBy : :: */[
                      match$3[/* supporterId */3],
                      /* [] */0
                    ]
                  ],
                  state_004
                ],
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 7 : 
        var match$4 = $$event[0];
        var supporterId$1 = match$4[/* supporterId */1];
        var processId$1 = match$4[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                /* removalProspects */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$1);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* userId */p[/* userId */1],
                                  /* endorsedBy : :: */[
                                    supporterId$1,
                                    p[/* endorsedBy */2]
                                  ]
                                ];
                        } else {
                          return p;
                        }
                      }), state_004),
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 8 : 
        var match$5 = $$event[0];
        var id = match$5[/* data */2][/* id */0];
        var processId$2 = match$5[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                /* partners */List.filter((function (p) {
                          return PrimitiveTypes.UserId[/* neq */6](p[/* userId */0], id);
                        }))(state_002),
                state_003,
                /* removalProspects */List.filter((function (p) {
                          return PrimitiveTypes.ProcessId[/* neq */6](p[/* processId */0], processId$2);
                        }))(state_004),
                state_005,
                state_006,
                state_007,
                state_008,
                state_009
              ];
    case 12 : 
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                /* incomeAddresses : :: */[
                  /* tuple */[
                    $$event[0][/* data */2][/* accountIdx */0],
                    /* [] */0
                  ],
                  /* [] */0
                ],
                state_008,
                state_009
              ];
    case 21 : 
        var match$6 = $$event[0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                state_007,
                /* payouts : :: */[
                  /* record */[
                    /* processId */match$6[/* processId */0],
                    /* payoutTx */match$6[/* data */5][/* payoutTx */1],
                    /* endorsedBy : :: */[
                      match$6[/* supporterId */3],
                      /* [] */0
                    ],
                    /* rejectedBy : [] */0,
                    /* status : PayoutPending */0
                  ],
                  state_008
                ],
                state_009
              ];
    case 22 : 
        var match$7 = $$event[0];
        var rejectorId = match$7[/* rejectorId */1];
        var processId$3 = match$7[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                state_007,
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$3);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy */p[/* endorsedBy */2],
                                  /* rejectedBy : :: */[
                                    rejectorId,
                                    p[/* rejectedBy */3]
                                  ],
                                  /* status */p[/* status */4]
                                ];
                        } else {
                          return p;
                        }
                      }), state_008),
                state_009
              ];
    case 23 : 
        var match$8 = $$event[0];
        var supporterId$2 = match$8[/* supporterId */1];
        var processId$4 = match$8[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                state_007,
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$4);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy : :: */[
                                    supporterId$2,
                                    p[/* endorsedBy */2]
                                  ],
                                  /* rejectedBy */p[/* rejectedBy */3],
                                  /* status */p[/* status */4]
                                ];
                        } else {
                          return p;
                        }
                      }), state_008),
                state_009
              ];
    case 26 : 
        var match$9 = $$event[0];
        var transactionId = match$9[/* transactionId */1];
        var processId$5 = match$9[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                state_007,
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$5);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy */p[/* endorsedBy */2],
                                  /* rejectedBy */p[/* rejectedBy */3],
                                  /* status : PayoutCompleted */Block.__(0, [transactionId])
                                ];
                        } else {
                          return p;
                        }
                      }), state_008),
                state_009
              ];
    case 28 : 
        var match$10 = $$event[0];
        var errorMessage = match$10[/* errorMessage */1];
        var processId$6 = match$10[/* processId */0];
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                state_007,
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$6);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy */p[/* endorsedBy */2],
                                  /* rejectedBy */p[/* rejectedBy */3],
                                  /* status : PayoutFailed */Block.__(1, [errorMessage])
                                ];
                        } else {
                          return p;
                        }
                      }), state_008),
                state_009
              ];
    case 31 : 
        var match$11 = $$event[0];
        var accountIdx = Address.Coordinates[/* accountIdx */3](match$11[/* coordinates */0]);
        return /* record */[
                state_000,
                state_001,
                state_002,
                state_003,
                state_004,
                state_005,
                state_006,
                /* incomeAddresses : :: */[
                  /* tuple */[
                    accountIdx,
                    /* :: */[
                      match$11[/* address */1],
                      List.assoc(accountIdx, state_007)
                    ]
                  ],
                  state_007
                ],
                state_008,
                state_009
              ];
    default:
      return state$1;
  }
}

var partial_arg = make(/* () */0);

function init(param) {
  return List.fold_left((function (m, e) {
                return apply(e, m);
              }), partial_arg, param);
}

function applyAll(events, model) {
  return List.fold_left((function (m, e) {
                return apply(e, m);
              }), model, events);
}

function partners(state) {
  return state[/* partners */2];
}

function prospects(state) {
  return state[/* prospects */3];
}

function removalProspects(state) {
  return state[/* removalProspects */4];
}

function ventureName(state) {
  return state[/* name */1];
}

function incomeAddresses(state) {
  return List.assoc(WalletTypes.AccountIndex[/* default */9], state[/* incomeAddresses */7]);
}

function payouts(state) {
  return state[/* payouts */8];
}

function balance(state) {
  return List.assoc(WalletTypes.AccountIndex[/* default */9], state[/* wallet */9][/* balance */2]);
}

function isPartner(id, param) {
  return List.exists((function (param) {
                return PrimitiveTypes.UserId[/* eq */5](param[/* userId */0], id);
              }), param[/* partners */2]);
}

var Wallet = 0;

exports.Wallet = Wallet;
exports.make = make;
exports.apply = apply;
exports.init = init;
exports.applyAll = applyAll;
exports.partners = partners;
exports.prospects = prospects;
exports.removalProspects = removalProspects;
exports.ventureName = ventureName;
exports.incomeAddresses = incomeAddresses;
exports.payouts = payouts;
exports.balance = balance;
exports.isPartner = isPartner;
/* partial_arg Not a pure module */
