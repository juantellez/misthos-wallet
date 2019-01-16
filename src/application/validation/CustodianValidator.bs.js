// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

function make(param) {
  return /* record */[
          /* custodians : [] */0,
          /* areCurrent */(function (param, param$1) {
              return false;
            }),
          /* isCustodian */(function (param, param$1) {
              return false;
            })
        ];
}

function update($$event, param) {
  var custodians = param[/* custodians */0];
  var custodians$1;
  switch ($$event.tag | 0) {
    case 15 : 
        custodians$1 = /* :: */[
          /* tuple */[
            $$event[0][/* data */2][/* accountIdx */0],
            /* [] */0
          ],
          custodians
        ];
        break;
    case 19 : 
        var match = $$event[0][/* data */2];
        var accountIdx = match[/* accountIdx */3];
        custodians$1 = /* :: */[
          /* tuple */[
            accountIdx,
            /* :: */[
              match[/* partnerId */0],
              List.assoc(accountIdx, custodians)
            ]
          ],
          List.remove_assoc(accountIdx, custodians)
        ];
        break;
    case 24 : 
        var match$1 = $$event[0][/* data */2];
        var accountIdx$1 = match$1[/* accountIdx */1];
        var custodianId = match$1[/* custodianId */0];
        var partial_arg = PrimitiveTypes.UserId[/* neq */6];
        custodians$1 = /* :: */[
          /* tuple */[
            accountIdx$1,
            List.filter((function (param) {
                      return partial_arg(custodianId, param);
                    }))(List.assoc(accountIdx$1, custodians))
          ],
          List.remove_assoc(accountIdx$1, custodians)
        ];
        break;
    default:
      custodians$1 = custodians;
  }
  return /* record */[
          /* custodians */custodians$1,
          /* areCurrent */(function (accountIdx, testCustodians) {
              var accountCustodians = List.assoc(accountIdx, custodians$1);
              return List.fold_left((function (r, v) {
                            if (r) {
                              return v;
                            } else {
                              return false;
                            }
                          }), true, List.map((function (c) {
                                return List.mem(c, accountCustodians);
                              }), testCustodians));
            }),
          /* isCustodian */(function (accountIdx, testCustodian) {
              return List.mem(testCustodian, List.assoc(accountIdx, custodians$1));
            })
        ];
}

exports.make = make;
exports.update = update;
/* PrimitiveTypes Not a pure module */
