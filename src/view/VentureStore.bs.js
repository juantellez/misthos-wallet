// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Router = require("./Router.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ViewModel = require("./model/ViewModel.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var DataWorkerClient = require("../workers/DataWorkerClient.bs.js");
var PersistWorkerClient = require("../workers/PersistWorkerClient.bs.js");
var VentureWorkerClient = require("../workers/VentureWorkerClient.bs.js");
var VentureWorkerMessage = require("../workers/VentureWorkerMessage.bs.js");

function loadVentureAndIndex(session, currentRoute, param) {
  var ventureWorker = param[/* ventureWorker */5];
  var selectedVenture = param[/* selectedVenture */1];
  if (Caml_obj.caml_notequal(param[/* session */2], session)) {
    VentureWorkerClient.updateSession(ventureWorker[0]);
  }
  if (typeof session === "number" || !(session.tag === 1 && typeof currentRoute !== "number")) {
    return /* None */0;
  } else if (currentRoute.tag) {
    var ventureId = currentRoute[0];
    return /* JoiningVenture */Block.__(1, [
              ventureId,
              /* Pending */Block.__(2, [VentureWorkerClient.joinVia(ventureId, currentRoute[1], ventureWorker[0])])
            ]);
  } else {
    var ventureId$1 = currentRoute[0];
    var exit = 0;
    if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
      exit = 1;
    } else {
      var loadedId = selectedVenture[0];
      if (PrimitiveTypes.VentureId[/* eq */5](ventureId$1, loadedId)) {
        return selectedVenture;
      } else if (PrimitiveTypes.VentureId[/* neq */6](ventureId$1, loadedId)) {
        return /* LoadingVenture */Block.__(2, [
                  ventureId$1,
                  /* Pending */Block.__(2, [VentureWorkerClient.load(ventureId$1, ventureWorker[0])])
                ]);
      } else {
        exit = 1;
      }
    }
    if (exit === 1) {
      return /* LoadingVenture */Block.__(2, [
                ventureId$1,
                /* Pending */Block.__(2, [VentureWorkerClient.load(ventureId$1, ventureWorker[0])])
              ]);
    }
    
  }
}

var component = ReasonReact.reducerComponent("VentureStore");

function updateOtherTabs(msg) {
  var encodedMsg = VentureWorkerMessage.encodeOutgoing(msg);
  localStorage.setItem("tab-sync", Json.stringify(encodedMsg));
  return /* () */0;
}

function handler(send, msg) {
  var match = msg.key;
  if (match === "tab-sync") {
    try {
      return Curry._1(send, /* TabSync */Block.__(1, [VentureWorkerMessage.decodeOutgoing(Json.parseOrRaise(Js_option.getExn(Js_primitive.nullable_to_opt(msg.newValue))))]));
    }
    catch (exn){
      return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

function make(currentRoute, session, children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* index */state[/* index */0],
                      /* selectedVenture */loadVentureAndIndex(session, currentRoute, state),
                      /* session */session,
                      /* dataWorker */state[/* dataWorker */3],
                      /* persistWorker */state[/* persistWorker */4],
                      /* ventureWorker */state[/* ventureWorker */5]
                    ];
            }),
          /* didMount */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              loadVentureAndIndex(session, currentRoute, state);
              var eventListener = function (param) {
                return handler(send, param);
              };
              window.addEventListener("storage", eventListener);
              state[/* dataWorker */3][0].terminate();
              var worker = Curry._1(DataWorkerClient.make, (function (message) {
                      return Curry._1(send, /* DataWorkerMessage */Block.__(2, [message]));
                    }));
              state[/* dataWorker */3][0] = worker;
              state[/* ventureWorker */5][0].terminate();
              var worker$1 = Curry._1(VentureWorkerClient.make, (function (message) {
                      return Curry._1(send, /* VentureWorkerMessage */Block.__(3, [message]));
                    }));
              state[/* ventureWorker */5][0] = worker$1;
              return Curry._1(param[/* onUnmount */4], (function () {
                            window.removeEventListener("storage", eventListener);
                            state[/* dataWorker */3][0].terminate();
                            state[/* persistWorker */4][0].terminate();
                            state[/* ventureWorker */5][0].terminate();
                            return /* () */0;
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var match = param[/* state */1];
              return Curry._3(children, match[/* index */0], match[/* selectedVenture */1], (function (name, accountSettings, initialPolicies) {
                            return Curry._1(send, /* CreateVenture */Block.__(0, [
                                          name,
                                          accountSettings,
                                          initialPolicies
                                        ]));
                          }));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* index */undefined,
                      /* selectedVenture : None */0,
                      /* session : Unknown */0,
                      /* dataWorker : record */[/* contents */Curry._1(DataWorkerClient.make, (function (prim) {
                                console.log(prim);
                                return /* () */0;
                              }))],
                      /* persistWorker : record */[/* contents */Curry._1(PersistWorkerClient.make, (function (prim) {
                                console.log(prim);
                                return /* () */0;
                              }))],
                      /* ventureWorker : record */[/* contents */Curry._1(VentureWorkerClient.make, (function (prim) {
                                console.log(prim);
                                return /* () */0;
                              }))]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* session */2];
              var exit = 0;
              if (typeof match === "number" || match.tag !== 1) {
                exit = 1;
              } else {
                var sessionData = match[0];
                switch (action.tag | 0) {
                  case 0 : 
                      var createCmdId = VentureWorkerClient.create(action[0], action[1], action[2], state[/* ventureWorker */5][0]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* index */state[/* index */0],
                                  /* selectedVenture : CreatingVenture */Block.__(0, [/* Pending */Block.__(2, [createCmdId])]),
                                  /* session */state[/* session */2],
                                  /* dataWorker */state[/* dataWorker */3],
                                  /* persistWorker */state[/* persistWorker */4],
                                  /* ventureWorker */state[/* ventureWorker */5]
                                ]]);
                  case 1 : 
                      var msg = action[0];
                      if (typeof msg === "number") {
                        return /* NoUpdate */0;
                      } else {
                        switch (msg.tag | 0) {
                          case 2 : 
                              return /* Update */Block.__(0, [/* record */[
                                          /* index */msg[0],
                                          /* selectedVenture */state[/* selectedVenture */1],
                                          /* session */state[/* session */2],
                                          /* dataWorker */state[/* dataWorker */3],
                                          /* persistWorker */state[/* persistWorker */4],
                                          /* ventureWorker */state[/* ventureWorker */5]
                                        ]]);
                          case 5 : 
                              var newItems = msg[1];
                              var ventureId = msg[0];
                              Curry._2(VentureWorkerClient.postMessage, state[/* ventureWorker */5][0], /* SyncTabs */Block.__(18, [
                                      ventureId,
                                      newItems
                                    ]));
                              var match$1 = state[/* selectedVenture */1];
                              if (typeof match$1 === "number" || !(match$1.tag === 3 && PrimitiveTypes.VentureId[/* eq */5](match$1[0], ventureId))) {
                                return /* NoUpdate */0;
                              } else {
                                return /* Update */Block.__(0, [/* record */[
                                            /* index */state[/* index */0],
                                            /* selectedVenture : VentureLoaded */Block.__(3, [
                                                ventureId,
                                                ViewModel.applyAll(newItems, match$1[1]),
                                                match$1[2]
                                              ]),
                                            /* session */state[/* session */2],
                                            /* dataWorker */state[/* dataWorker */3],
                                            /* persistWorker */state[/* persistWorker */4],
                                            /* ventureWorker */state[/* ventureWorker */5]
                                          ]]);
                              }
                          default:
                            return /* NoUpdate */0;
                        }
                      }
                  case 2 : 
                      Curry._2(VentureWorkerClient.postMessage, state[/* ventureWorker */5][0], action[0]);
                      return /* NoUpdate */0;
                  case 3 : 
                      var msg$1 = action[0];
                      Curry._2(PersistWorkerClient.postMessage, state[/* persistWorker */4][0], msg$1);
                      Curry._2(DataWorkerClient.postMessage, state[/* dataWorker */3][0], msg$1);
                      var match$2 = state[/* selectedVenture */1];
                      if (typeof msg$1 === "number") {
                        return /* NoUpdate */0;
                      } else {
                        switch (msg$1.tag | 0) {
                          case 2 : 
                              updateOtherTabs(msg$1);
                              return /* Update */Block.__(0, [/* record */[
                                          /* index */msg$1[0],
                                          /* selectedVenture */state[/* selectedVenture */1],
                                          /* session */state[/* session */2],
                                          /* dataWorker */state[/* dataWorker */3],
                                          /* persistWorker */state[/* persistWorker */4],
                                          /* ventureWorker */state[/* ventureWorker */5]
                                        ]]);
                          case 3 : 
                              var log = msg$1[1];
                              var ventureId$1 = msg$1[0];
                              if (typeof match$2 === "number") {
                                return /* NoUpdate */0;
                              } else {
                                switch (match$2.tag | 0) {
                                  case 1 : 
                                      if (PrimitiveTypes.VentureId[/* eq */5](ventureId$1, match$2[0])) {
                                        return /* UpdateWithSideEffects */Block.__(2, [
                                                  /* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : VentureLoaded */Block.__(3, [
                                                        ventureId$1,
                                                        Curry._1(ViewModel.init(sessionData[/* userId */0]), log),
                                                        VentureWorkerClient.Cmd[/* make */0](state[/* ventureWorker */5][0], ventureId$1)
                                                      ]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ],
                                                  (function () {
                                                      return Router.goTo(/* Venture */Block.__(0, [
                                                                    ventureId$1,
                                                                    /* None */0
                                                                  ]));
                                                    })
                                                ]);
                                      } else {
                                        return /* NoUpdate */0;
                                      }
                                  case 2 : 
                                      if (PrimitiveTypes.VentureId[/* eq */5](ventureId$1, match$2[0])) {
                                        return /* Update */Block.__(0, [/* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : VentureLoaded */Block.__(3, [
                                                        ventureId$1,
                                                        Curry._1(ViewModel.init(sessionData[/* userId */0]), log),
                                                        VentureWorkerClient.Cmd[/* make */0](state[/* ventureWorker */5][0], ventureId$1)
                                                      ]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ]]);
                                      } else {
                                        return /* NoUpdate */0;
                                      }
                                  default:
                                    return /* NoUpdate */0;
                                }
                              }
                          case 4 : 
                              var ventureId$2 = msg$1[0];
                              return /* UpdateWithSideEffects */Block.__(2, [
                                        /* record */[
                                          /* index */state[/* index */0],
                                          /* selectedVenture : VentureLoaded */Block.__(3, [
                                              ventureId$2,
                                              Curry._1(ViewModel.init(sessionData[/* userId */0]), msg$1[1]),
                                              VentureWorkerClient.Cmd[/* make */0](state[/* ventureWorker */5][0], ventureId$2)
                                            ]),
                                          /* session */state[/* session */2],
                                          /* dataWorker */state[/* dataWorker */3],
                                          /* persistWorker */state[/* persistWorker */4],
                                          /* ventureWorker */state[/* ventureWorker */5]
                                        ],
                                        (function () {
                                            return Router.goTo(/* Venture */Block.__(0, [
                                                          ventureId$2,
                                                          /* None */0
                                                        ]));
                                          })
                                      ]);
                          case 5 : 
                              if (typeof match$2 === "number" || match$2.tag !== 3) {
                                return /* NoUpdate */0;
                              } else {
                                var ventureId$3 = msg$1[0];
                                if (PrimitiveTypes.VentureId[/* eq */5](ventureId$3, match$2[0])) {
                                  updateOtherTabs(msg$1);
                                  return /* Update */Block.__(0, [/* record */[
                                              /* index */state[/* index */0],
                                              /* selectedVenture : VentureLoaded */Block.__(3, [
                                                  ventureId$3,
                                                  ViewModel.applyAll(msg$1[1], match$2[1]),
                                                  match$2[2]
                                                ]),
                                              /* session */state[/* session */2],
                                              /* dataWorker */state[/* dataWorker */3],
                                              /* persistWorker */state[/* persistWorker */4],
                                              /* ventureWorker */state[/* ventureWorker */5]
                                            ]]);
                                } else {
                                  return /* NoUpdate */0;
                                }
                              }
                          case 6 : 
                              var response = msg$1[2];
                              var correlationId = msg$1[1];
                              if (typeof match$2 === "number") {
                                return /* NoUpdate */0;
                              } else {
                                switch (match$2.tag | 0) {
                                  case 0 : 
                                      var match$3 = match$2[0];
                                      if (typeof match$3 === "number" || !(match$3.tag === 2 && correlationId === match$3[0])) {
                                        return /* NoUpdate */0;
                                      } else {
                                        var tmp;
                                        tmp = response.tag ? /* Error */Block.__(3, [response[0]]) : /* Success */Block.__(4, [response[0]]);
                                        return /* Update */Block.__(0, [/* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : CreatingVenture */Block.__(0, [tmp]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ]]);
                                      }
                                  case 1 : 
                                      var match$4 = match$2[1];
                                      if (typeof match$4 === "number" || !(match$4.tag === 2 && correlationId === match$4[0])) {
                                        return /* NoUpdate */0;
                                      } else {
                                        var tmp$1;
                                        tmp$1 = response.tag ? /* Error */Block.__(3, [response[0]]) : /* Success */Block.__(4, [response[0]]);
                                        return /* Update */Block.__(0, [/* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : JoiningVenture */Block.__(1, [
                                                        match$2[0],
                                                        tmp$1
                                                      ]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ]]);
                                      }
                                  case 2 : 
                                      var match$5 = match$2[1];
                                      if (typeof match$5 === "number" || !(match$5.tag === 2 && correlationId === match$5[0])) {
                                        return /* NoUpdate */0;
                                      } else {
                                        var tmp$2;
                                        tmp$2 = response.tag ? /* Error */Block.__(3, [response[0]]) : /* Success */Block.__(4, [response[0]]);
                                        return /* Update */Block.__(0, [/* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : LoadingVenture */Block.__(2, [
                                                        match$2[0],
                                                        tmp$2
                                                      ]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ]]);
                                      }
                                  case 3 : 
                                      var loadedId = match$2[0];
                                      if (PrimitiveTypes.VentureId[/* eq */5](msg$1[0], loadedId)) {
                                        return /* Update */Block.__(0, [/* record */[
                                                    /* index */state[/* index */0],
                                                    /* selectedVenture : VentureLoaded */Block.__(3, [
                                                        loadedId,
                                                        ViewModel.captureResponse(correlationId, response, match$2[1]),
                                                        match$2[2]
                                                      ]),
                                                    /* session */state[/* session */2],
                                                    /* dataWorker */state[/* dataWorker */3],
                                                    /* persistWorker */state[/* persistWorker */4],
                                                    /* ventureWorker */state[/* ventureWorker */5]
                                                  ]]);
                                      } else {
                                        return /* NoUpdate */0;
                                      }
                                  
                                }
                              }
                          default:
                            return /* NoUpdate */0;
                        }
                      }
                  
                }
              }
              if (exit === 1) {
                if (action.tag === 3) {
                  var msg$2 = action[0];
                  Curry._2(PersistWorkerClient.postMessage, state[/* persistWorker */4][0], msg$2);
                  Curry._2(DataWorkerClient.postMessage, state[/* dataWorker */3][0], msg$2);
                }
                return /* NoUpdate */0;
              }
              
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var L = 0;

exports.loadVentureAndIndex = loadVentureAndIndex;
exports.component = component;
exports.L = L;
exports.updateOtherTabs = updateOtherTabs;
exports.handler = handler;
exports.make = make;
/* component Not a pure module */
