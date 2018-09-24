import { when, set } from "cerebral/operators";
import { state } from "cerebral/tags";
import {
  decideWhatToDo,
  shouldRegister,
  register,
  unregister,
  call
} from "./actions";

export const callSequence = [
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
        next: [
          set(state(["simpleDrachtioRegistrar.toCall"]), ""),
        ],
        error: [
          set(state(["simpleDrachtioRegistrar.toCall"]), ""),
        ]
      }
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
