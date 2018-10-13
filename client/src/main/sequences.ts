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
  set(state(["call.type"]), "outgoing"),
  set(
    state(["call.name"]),
    state(["toCall"])
  ),

  decideWhatToDo,
  {
    setToCallWithLastRedialed: [
      set(
        state(["toCall"]),
        state(["lastDialed"])
      )
    ],
    doNothing: [],
    call: [
      set(
        state(["lastDialed"]),
        state(["toCall"])
      ),
      call,
      {
        next: [set(state(["toCall"]), "")],
        error: [set(state(["toCall"]), "")]
      },
      openInCallModal,
      set(state(["call.connected"]), false)
    ]
  }
];

export const registerSequence = [
  shouldRegister,
  {
    register: [
      register,
      {
        next: [set(state(["registered"]), true)],
        error: []
      }
    ],
    checkSettings: [

    ],
  }
];

export const unregisterSequence = [unregister];

export const onInvite = [
  set(state(["call.type"]), "incoming"),
  setCallName,
  openInCallModal
];

export const hangupSequence = [
  hangup,
  closeModal,
  set(state(["call.connected"]), false)
];

export const answerSequence = [
  answer,
  set(state(["call.connected"]), true)
];

export const onAccepted = [
  set(state(["call.connected"]), true)
];

export const onTerminated = [
  set(state(["call.connected"]), false),
  closeModal
];

export const onBye = [
  set(state(["call.connected"]), false),
  closeModal
];

export const onRejected = [
  set(state(["call.connected"]), false),
  closeModal
];

export const onCancel = [
  set(state(["call.connected"]), false),
  closeModal
];

export const onRegistrationFailed = [
  set(state(["registered"]), false),
]
