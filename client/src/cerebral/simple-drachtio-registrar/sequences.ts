import { set } from "cerebral/operators";
import { state } from "cerebral/tags";
import {
  decideWhatToDo,
  shouldRegister,
  register,
  unregister,
  call,
  openInCallModal,
  setCallName,
  answer,
  hangup,
  closeModal
} from "./actions";

export const callSequence = [
  set(state(["simpleDrachtioRegistrar.call.type"]), "outgoing"),
  set(
    state(["simpleDrachtioRegistrar.call.name"]),
    state(["simpleDrachtioRegistrar.toCall"])
  ),

  decideWhatToDo,
  {
    setToCallWithLastRedialed: [
      set(
        state(["simpleDrachtioRegistrar.toCall"]),
        state(["simpleDrachtioRegistrar.lastDialed"])
      )
    ],
    doNothing: [],
    call: [
      set(
        state(["simpleDrachtioRegistrar.lastDialed"]),
        state(["simpleDrachtioRegistrar.toCall"])
      ),
      call,
      {
        next: [set(state(["simpleDrachtioRegistrar.toCall"]), "")],
        error: [set(state(["simpleDrachtioRegistrar.toCall"]), "")]
      },
      openInCallModal,
      set(state(["simpleDrachtioRegistrar.call.connected"]), false)
    ]
  }
];

export const registerSequence = [
  shouldRegister,
  {
    register: [
      register,
      {
        next: [set(state(["simpleDrachtioRegistrar.registered"]), true)],
        error: []
      }
    ]
  }
];

export const unregisterSequence = [unregister];

export const onInvite = [
  set(state(["simpleDrachtioRegistrar.call.type"]), "incoming"),
  setCallName,
  openInCallModal
];

export const hangupSequence = [
  hangup,
  closeModal,
  set(state(["simpleDrachtioRegistrar.call.connected"]), false)
];

export const answerSequence = [
  answer,
  set(state(["simpleDrachtioRegistrar.call.connected"]), true)
];

export const onAccepted = [
  set(state(["simpleDrachtioRegistrar.call.connected"]), true)
];

export const onTerminated = [
  set(state(["simpleDrachtioRegistrar.call.connected"]), false),
  closeModal
];

export const onBye = [
  set(state(["simpleDrachtioRegistrar.call.connected"]), false),
  closeModal
];

export const onRejected = [
  set(state(["simpleDrachtioRegistrar.call.connected"]), false),
  closeModal
];

export const onCancel = [
  set(state(["simpleDrachtioRegistrar.call.connected"]), false),
  closeModal
];
