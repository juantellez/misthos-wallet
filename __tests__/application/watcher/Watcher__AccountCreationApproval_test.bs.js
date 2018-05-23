// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Generators = require("../../helpers/Generators.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var PrimitiveTypes = require("../../../src/application/PrimitiveTypes.bs.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var Watcher__AccountCreationApproval = require("../../../src/application/watcher/Watcher__AccountCreationApproval.bs.js");

describe("With 1 partner and a proposal", (function () {
        var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
        var log = Generators.Log[/* withAccountCreationProposed */23](user1)(Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
        var proposal = Event.getAccountCreationProposedExn(Generators.Log[/* lastEvent */5](log));
        var watcher = Watcher__AccountCreationApproval.make(proposal, Generators.Log[/* eventLog */6](log));
        return WatcherHelpers.testWatcherHasEventPending("AccountCreationAccepted", watcher, Generators.Log[/* systemIssuer */3](log), (function (param) {
                      if (param.tag === 14) {
                        return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                      } else {
                        return false;
                      }
                    }));
      }));

describe("Completes when the account is accepted", (function () {
        var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
        var log = Generators.Log[/* withAccountCreationProposed */23](user1)(Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
        var proposal = Event.getAccountCreationProposedExn(Generators.Log[/* lastEvent */5](log));
        var watcher = Watcher__AccountCreationApproval.make(proposal, Generators.Log[/* eventLog */6](log));
        var log$1 = Generators.Log[/* withAccountCreationAccepted */24](proposal)(log);
        Caml_oo_curry.js2(710435299, 1, watcher, Generators.Log[/* lastItem */4](log$1));
        return WatcherHelpers.testWatcherHasCompleted(watcher);
      }));

var AccountCreationApproval = 0;

exports.AccountCreationApproval = AccountCreationApproval;
/*  Not a pure module */
