// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var MInput = require("./components/MInput.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var MButton = require("./components/MButton.bs.js");
var Partner = require("./components/Partner.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Clipboard = require("../ffi/Clipboard.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Blockstack = require("../ffi/Blockstack.bs.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Autosuggest = require("../ffi/Autosuggest.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ProposeButton = require("./components/ProposeButton.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Step = require("@jsiebern/bs-material-ui/src/MaterialUi_Step.bs.js");
var MaterialUi_Paper = require("@jsiebern/bs-material-ui/src/MaterialUi_Paper.bs.js");
var MaterialUi_Radio = require("@jsiebern/bs-material-ui/src/MaterialUi_Radio.bs.js");
var MaterialUi_Stepper = require("@jsiebern/bs-material-ui/src/MaterialUi_Stepper.bs.js");
var MaterialUi_MenuItem = require("@jsiebern/bs-material-ui/src/MaterialUi_MenuItem.bs.js");
var MaterialUi_StepLabel = require("@jsiebern/bs-material-ui/src/MaterialUi_StepLabel.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");
var MaterialUi_StepContent = require("@jsiebern/bs-material-ui/src/MaterialUi_StepContent.bs.js");
var Match = require("autosuggest-highlight/match");
var Parse = require("autosuggest-highlight/parse");

var component = ReasonReact.reducerComponent("ManagePartners");

var icon = Css.style(/* :: */[
      Css.marginLeft(Css.px(Theme.space(-1))),
      /* :: */[
        Css.height(Css.px(44)),
        /* [] */0
      ]
    ]);

var stepper = Css.style(/* :: */[
      Css.padding2(Css.px(0), Css.px(Theme.space(1))),
      /* [] */0
    ]);

var autoCompleteContianerOverflow = Css.style(/* :: */[
      Css.children(/* :: */[
            Css.important(Css.overflow(Css.visible)),
            /* [] */0
          ]),
      /* [] */0
    ]);

var stepIconText = Css.style(/* :: */[
      Css.fontFamily(Theme.sourceSansPro),
      /* :: */[
        Css.fontWeight(600),
        /* :: */[
          Css.fontSize(Css.px(18)),
          /* :: */[
            Css.fontStyle(Css.normal),
            /* :: */[
              Css.lineHeight(1.0),
              /* :: */[
                Css.letterSpacing(Css.px(1)),
                /* :: */[
                  Css.unsafe("fill", "#" + Colors.uBlack),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var autoCompleteContainer = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

var suggestionsContainerOpen = Css.style(/* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.zIndex(2000),
        /* :: */[
          Css.marginTop(Css.px(Theme.space(1))),
          /* :: */[
            Css.left(Css.px(0)),
            /* :: */[
              Css.right(Css.px(0)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var suggestion = Css.style(/* :: */[
      Css.display(Css.block),
      /* [] */0
    ]);

var suggestionItem = Css.style(/* :: */[
      Css.fontSize(Css.px(14)),
      /* [] */0
    ]);

var suggestionsList = Css.style(/* :: */[
      Css.margin(Css.px(0)),
      /* :: */[
        Css.padding(Css.px(0)),
        /* :: */[
          Css.listStyleType(Css.none),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* icon */icon,
  /* stepper */stepper,
  /* autoCompleteContianerOverflow */autoCompleteContianerOverflow,
  /* stepIconText */stepIconText,
  /* autoCompleteContainer */autoCompleteContainer,
  /* suggestionsContainerOpen */suggestionsContainerOpen,
  /* suggestion */suggestion,
  /* suggestionItem */suggestionItem,
  /* suggestionsList */suggestionsList
];

function subject(name) {
  return encodeURI("Join this Misthos Venture: \"" + (name + "\""));
}

function body(prospect, ventureName, joinUrl, user) {
  return encodeURI("Hello " + (String(prospect) + ("\n\n    I have suggested that you should join the Misthos Venture \"" + (String(ventureName) + ("\".\n    Go to the URL bellow to sync with the Venture as soon as you have been accepted.\n\n    " + (String(joinUrl) + ("\n\n    Sincerely,\n    " + (String(user) + "\n\n    www.misthos.io\n  "))))))));
}

var LinkEmail = /* module */[
  /* subject */subject,
  /* body */body
];

function renderInputComponent(props) {
  return ReasonReact.element(/* None */0, /* None */0, MInput.make(/* Some */["Enter a Blockstack ID"], /* Some */[/* `String */[
                    -976970511,
                    props.value
                  ]], /* Some */[props.onChange], /* Some */[true], /* Some */[true], /* None */0, /* None */0, /* None */0, /* Some */[props], /* None */0, /* None */0, /* array */[]));
}

function renderSuggestionsContainer(options) {
  return React.cloneElement(ReasonReact.element(/* None */0, /* None */0, MaterialUi_Paper.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[])), options.containerProps, options.children);
}

function renderSuggestion(suggestion, vals) {
  var query = vals.query;
  var isHighlighted = vals.isHighlighted;
  var parts = Parse(suggestion, Match(suggestion, query));
  return ReasonReact.element(/* None */0, /* None */0, MaterialUi_MenuItem.make(/* Some */[suggestionItem], /* Some */[/* `String */[
                    -976970511,
                    "div"
                  ]], /* None */0, /* Some */[isHighlighted], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("div", undefined, Belt_Array.mapWithIndexU(parts, (function (index, part) {
                              var match = part.highlight;
                              if (match) {
                                return React.createElement("span", {
                                            key: String(index),
                                            className: Css.style(/* :: */[
                                                  Css.fontWeight(600),
                                                  /* [] */0
                                                ])
                                          }, ViewCommon.text(part.text));
                              } else {
                                return React.createElement("strong", {
                                            key: String(index),
                                            className: Css.style(/* :: */[
                                                  Css.fontWeight(300),
                                                  /* [] */0
                                                ])
                                          }, ViewCommon.text(part.text));
                              }
                            })))]));
}

function filterSuggestions(prospectId, suggestions) {
  var inputLength = prospectId.length;
  var match = inputLength < 3;
  if (match) {
    return /* array */[];
  } else {
    return Belt_Array.keepU(suggestions, (function (s) {
                  return s.slice(0, inputLength) === prospectId;
                }));
  }
}

var addSuggestions = Belt_MapString.set;

function getSuggestions(suggestions, _query) {
  while(true) {
    var query = _query;
    var match = Belt_MapString.get(suggestions, query);
    if (query.length < 3) {
      return /* array */[];
    } else if (match) {
      return match[0];
    } else {
      _query = query.substring(0, query.length - 1 | 0);
      continue ;
    }
  };
}

function onSuggestionsFetchRequested(send, suggestions, arg) {
  var query = arg.value;
  if (arg.reason === "input-changed") {
    Curry._1(send, /* UpdateDisplayedSuggestions */Block.__(1, [query]));
  }
  Blockstack.fetchIds(/* Some */[getSuggestions(suggestions, query)], arg.value).then((function (param) {
          return Promise.resolve(Curry._1(send, /* UpdateSuggestions */Block.__(0, [
                            param[0],
                            param[1]
                          ])));
        }));
  return /* () */0;
}

function make(viewData, proposePartnerCmds, proposeCmdStatus, removePartnerCmds, removeCmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* viewData */viewData,
                      /* canSubmitProposal */state[/* canSubmitProposal */1],
                      /* removeInputFrozen */state[/* removeInputFrozen */2],
                      /* inputs */state[/* inputs */3],
                      /* suggestions */state[/* suggestions */4],
                      /* displayedSuggestions */state[/* displayedSuggestions */5]
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
              var inputs = state[/* inputs */3];
              var viewData = state[/* viewData */0];
              var activeStep;
              activeStep = typeof proposeCmdStatus === "number" || proposeCmdStatus.tag !== 2 ? 0 : 1;
              var partners = $$Array.of_list(Belt_List.keepMapU(viewData[/* partners */2], (function (partner) {
                          var match = partner[/* canProposeRemoval */2];
                          if (match) {
                            return /* Some */[ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](partner[/* userId */0])], /* None */0, Partner.make(partner[/* userId */0], partner[/* name */1], /* Some */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_Radio.make(/* Some */[/* `Bool */[
                                                          737456202,
                                                          Caml_obj.caml_equal(inputs[/* removePartnerId */1], /* Some */[partner[/* userId */0]])
                                                        ]], /* None */0, /* Some */[/* Primary */-791844958], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function (_, _$1) {
                                                            return Curry._1(send, /* SelectRemovePartner */Block.__(3, [partner[/* userId */0]]));
                                                          })], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[]))], /* None */0, /* Some */[(function () {
                                                  return Curry._1(send, /* SelectRemovePartner */Block.__(3, [partner[/* userId */0]]));
                                                })], /* array */[]))];
                          } else {
                            return /* None */0;
                          }
                        })));
              var icon$1 = function (index) {
                return React.createElement("svg", {
                            height: "44",
                            width: "44",
                            viewBox: "0 0 44 44"
                          }, React.createElement("defs", undefined, React.createElement("linearGradient", {
                                    id: "a",
                                    x1: "162.467%",
                                    x2: "-41.102%",
                                    y1: "29.557%",
                                    y2: "66.287%"
                                  }, React.createElement("stop", {
                                        offset: "0%",
                                        stopColor: "#05CFDB"
                                      }), React.createElement("stop", {
                                        offset: "100%",
                                        stopColor: "#02A2B4"
                                      }))), React.createElement("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                transform: "translate(1 1)"
                              }, React.createElement("circle", {
                                    cx: "21",
                                    cy: "21",
                                    r: "21",
                                    stroke: "#000"
                                  }), React.createElement("circle", {
                                    cx: "21",
                                    cy: "21",
                                    fill: "url(#a)",
                                    r: "18"
                                  }), index < activeStep ? React.createElement("polyline", {
                                      fill: "none",
                                      points: "16 0 5 11 0 6",
                                      stroke: "#000",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      transform: "translate(12 16)"
                                    }) : React.createElement("text", {
                                      className: stepIconText,
                                      textAnchor: "middle",
                                      x: "21",
                                      y: "27"
                                    }, ViewCommon.text(String(index + 1 | 0)))));
              };
              var copyButton = React.cloneElement(ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* Some */["copy-btn"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Icons.copy])), {
                    "data-clipboard-text": viewData[/* joinVentureUrl */3]
                  });
              var partial_arg = state[/* suggestions */4];
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Addition Proposal")], /* Some */[ViewCommon.text("Removal Proposal")], /* None */0, /* None */0, /* Some */[React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MaterialUi_Stepper.make(/* Some */[/* `Int */[
                                              3654863,
                                              activeStep
                                            ]], /* None */0, /* Some */[stepper], /* None */0, /* None */0, /* Some */[/* Vertical */-1010337642], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                            ReasonReact.element(/* Some */["enter-id"], /* None */0, MaterialUi_Step.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepLabel.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[icon$1(0)], /* None */0, /* None */0, /* None */0, /* Some */[/* :: */[
                                                                  /* IconContainer */Block.__(9, [icon]),
                                                                  /* [] */0
                                                                ]], /* None */0, /* array */[ViewCommon.text("ADD A BLOCKSTACK ID")])),
                                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepContent.make(/* None */0, /* None */0, /* Some */[autoCompleteContianerOverflow], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                                ReasonReact.element(/* None */0, /* None */0, Autosuggest.make({
                                                                          container: autoCompleteContainer,
                                                                          suggestionsContainerOpen: suggestionsContainerOpen,
                                                                          suggestion: suggestion,
                                                                          suggestionsList: suggestionsList
                                                                        }, state[/* displayedSuggestions */5], (function (param) {
                                                                            return onSuggestionsFetchRequested(send, partial_arg, param);
                                                                          }), (function () {
                                                                            return Curry._1(send, /* ClearSuggestions */0);
                                                                          }), (function (s) {
                                                                            return s;
                                                                          }), (function (value) {
                                                                            return value.trim().length > 2;
                                                                          }), renderSuggestion, renderSuggestionsContainer, renderInputComponent, {
                                                                          value: inputs[/* prospectId */0],
                                                                          onChange: (function (_, change) {
                                                                              return Curry._1(send, /* ChangeNewPartnerId */Block.__(2, [change.newValue]));
                                                                            })
                                                                        }, /* array */[])),
                                                                ReasonReact.element(/* None */0, /* None */0, ProposeButton.make("Propose partner addition", (function () {
                                                                            return Curry._1(send, /* ProposePartner */1);
                                                                          }), /* None */0, /* None */0, state[/* canSubmitProposal */1], /* Some */[false], proposeCmdStatus, /* array */[]))
                                                              ]))
                                                    ])),
                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_Step.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepLabel.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[icon$1(1)], /* None */0, /* None */0, /* None */0, /* Some */[/* :: */[
                                                                  /* IconContainer */Block.__(9, [icon]),
                                                                  /* [] */0
                                                                ]], /* None */0, /* array */[ViewCommon.text("SHARE THE VENTURE URL")])),
                                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_StepContent.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                                ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("\n               Please send the following URL to the proposed Partner so they can access the Venture:\n               ")])),
                                                                ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["mailto:?subject=" + (subject(viewData[/* ventureName */0]) + ("&body=" + body(inputs[/* prospectId */0], viewData[/* ventureName */0], viewData[/* joinVentureUrl */3], PrimitiveTypes.UserId[/* toString */0](viewData[/* localUser */1]))))], /* None */0, /* array */[ViewCommon.text("Email the link ")])),
                                                                ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                                              return Curry._1(send, /* AddAnother */3);
                                                                            })], /* None */0, /* Some */[true], /* Some */[/* Flat */0], /* None */0, /* Some */[false], /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("Propose another Partner")]))
                                                              ]))
                                                    ]))
                                          ])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                            ViewCommon.text(viewData[/* joinVentureUrl */3]),
                                            copyButton
                                          ])))], /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("\n               To propose the removal of a Partner from this Venture,\n               select his or her name below and submit your proposal.\n               When enough Partners endorse this proposal, the Partner will be removed.\n               ")])), ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[partners]))])), ReasonReact.element(/* None */0, /* None */0, ProposeButton.make("Propose Partner Removal", (function () {
                                              return Curry._1(send, /* RemovePartner */2);
                                            }), /* Some */[(function () {
                                                return Curry._1(send, /* FreezeRemoval */4);
                                              })], /* Some */[(function () {
                                                return Curry._1(send, /* ResetRemoval */5);
                                              })], Js_option.isSome(inputs[/* removePartnerId */1]), /* None */0, removeCmdStatus, /* array */[])))], /* None */0, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewData */viewData,
                      /* canSubmitProposal */false,
                      /* removeInputFrozen */false,
                      /* inputs : record */[
                        /* prospectId */"",
                        /* removePartnerId : None */0
                      ],
                      /* suggestions */Belt_MapString.empty,
                      /* displayedSuggestions : array */[]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                switch (action) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs */state[/* inputs */3],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions : array */[]
                                ]]);
                  case 1 : 
                      var prospectId = $$String.trim(state[/* inputs */3][/* prospectId */0]);
                      if (prospectId === "") {
                        return /* NoUpdate */0;
                      } else {
                        Curry._1(proposePartnerCmds[/* proposePartner */1], PrimitiveTypes.UserId[/* fromString */1](prospectId));
                        return /* NoUpdate */0;
                      }
                  case 2 : 
                      Utils.mapOption((function (partnerId) {
                              return Curry._1(removePartnerCmds[/* proposePartnerRemoval */4], partnerId);
                            }), state[/* inputs */3][/* removePartnerId */1]);
                      var init = state[/* inputs */3];
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs : record */[
                                    /* prospectId */init[/* prospectId */0],
                                    /* removePartnerId : None */0
                                  ],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */state[/* displayedSuggestions */5]
                                ]]);
                  case 3 : 
                      var init$1 = state[/* inputs */3];
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs : record */[
                                    /* prospectId */"",
                                    /* removePartnerId */init$1[/* removePartnerId */1]
                                  ],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */state[/* displayedSuggestions */5]
                                ],
                                (function () {
                                    return Curry._1(proposePartnerCmds[/* reset */0], /* () */0);
                                  })
                              ]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */true,
                                  /* inputs */state[/* inputs */3],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */state[/* displayedSuggestions */5]
                                ]]);
                  case 5 : 
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */false,
                                  /* inputs */state[/* inputs */3],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */state[/* displayedSuggestions */5]
                                ],
                                (function () {
                                    return Curry._1(removePartnerCmds[/* reset */0], /* () */0);
                                  })
                              ]);
                  
                }
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      var suggestions = Belt_MapString.set(state[/* suggestions */4], action[0], action[1]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs */state[/* inputs */3],
                                  /* suggestions */suggestions,
                                  /* displayedSuggestions */filterSuggestions(state[/* inputs */3][/* prospectId */0], getSuggestions(suggestions, state[/* inputs */3][/* prospectId */0]))
                                ]]);
                  case 1 : 
                      var value = action[0];
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */state[/* canSubmitProposal */1],
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs */state[/* inputs */3],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */filterSuggestions(value, getSuggestions(state[/* suggestions */4], value))
                                ]]);
                  case 2 : 
                      var text = action[0];
                      var init$2 = state[/* inputs */3];
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* canSubmitProposal */text !== "",
                                  /* removeInputFrozen */state[/* removeInputFrozen */2],
                                  /* inputs : record */[
                                    /* prospectId */text,
                                    /* removePartnerId */init$2[/* removePartnerId */1]
                                  ],
                                  /* suggestions */state[/* suggestions */4],
                                  /* displayedSuggestions */state[/* displayedSuggestions */5]
                                ]]);
                  case 3 : 
                      var match = state[/* removeInputFrozen */2];
                      var exit = 0;
                      if (typeof removeCmdStatus === "number") {
                        if (match) {
                          return /* NoUpdate */0;
                        } else {
                          exit = 1;
                        }
                      } else {
                        switch (removeCmdStatus.tag | 0) {
                          case 0 : 
                              return /* NoUpdate */0;
                          case 1 : 
                          case 2 : 
                              exit = 1;
                              break;
                          
                        }
                      }
                      if (exit === 1) {
                        var init$3 = state[/* inputs */3];
                        return /* UpdateWithSideEffects */Block.__(2, [
                                  /* record */[
                                    /* viewData */state[/* viewData */0],
                                    /* canSubmitProposal */state[/* canSubmitProposal */1],
                                    /* removeInputFrozen */false,
                                    /* inputs : record */[
                                      /* prospectId */init$3[/* prospectId */0],
                                      /* removePartnerId : Some */[action[0]]
                                    ],
                                    /* suggestions */state[/* suggestions */4],
                                    /* displayedSuggestions */state[/* displayedSuggestions */5]
                                  ],
                                  (function () {
                                      return Curry._1(removePartnerCmds[/* reset */0], /* () */0);
                                    })
                                ]);
                      }
                      break;
                  
                }
              }
            }),
          /* subscriptions */(function () {
              return /* :: */[
                      /* Sub */[
                        (function () {
                            return Clipboard.make(".copy-btn", "modal");
                          }),
                        (function (clipboard) {
                            clipboard.destroy();
                            return /* () */0;
                          })
                      ],
                      /* [] */0
                    ];
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.LinkEmail = LinkEmail;
exports.renderInputComponent = renderInputComponent;
exports.renderSuggestionsContainer = renderSuggestionsContainer;
exports.renderSuggestion = renderSuggestion;
exports.filterSuggestions = filterSuggestions;
exports.addSuggestions = addSuggestions;
exports.getSuggestions = getSuggestions;
exports.onSuggestionsFetchRequested = onSuggestionsFetchRequested;
exports.make = make;
/* component Not a pure module */
