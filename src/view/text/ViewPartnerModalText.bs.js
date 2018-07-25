// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';


var AlertBox = /* module */[
  /* signInRequired */" has not yet signed into Misthos and is therefore\n                        missing a public key. Please remind them to sign in to\n                        automatically expose a public key before joining the\n                        Venture.",
  /* syncRequired */" has been fully endorsed and is ready to sync data with\n                      the Venture. Please send them the Venture sync URL to\n                      complete the process.",
  /* pendingApproval */" has to be accepted before onboarding can proceed.",
  /* fullyOnboarded */" is fully onboarded to this Venture."
];

function signInRequired(userId, venture, appDomain) {
  return "mailto:?subject=" + (encodeURI("I want to add you to a Misthos Venture: " + (String(venture) + "")) + ("&body=" + encodeURI("Hi " + (String(userId) + (",\n\nI want to add you to the " + (String(venture) + (" Venture on Misthos, a multisig bitcoin wallet to collaboratively handle our income and payouts.\n\nBefore I can send you the invite, please sign into " + (String(appDomain) + " to create your public key. Let me know when you’ve done so, and I can send you the Venture invite link.\n\nIf you have any questions about Misthos, check out their FAQ.\n\nThanks!\n"))))))));
}

function syncRequired(userId, venture, joinUrl) {
  return "mailto:?subject=" + (encodeURI("Misthos Venture Invite: " + (String(venture) + "")) + ("&body=" + encodeURI("Hi " + (String(userId) + (",\n\nPlease join the " + (String(venture) + (" Venture on Misthos, a multisig bitcoin wallet to collaboratively handle our income and payouts. Use the link below to join the Venture:\n\n" + (String(joinUrl) + "\n\nIf you have any questions about Misthos, check out their FAQ.\n\nThanks!\n\n"))))))));
}

var Email = /* module */[
  /* signInRequired */signInRequired,
  /* syncRequired */syncRequired
];

exports.AlertBox = AlertBox;
exports.Email = Email;
/* No side effect */
