import StorageModule from "@cerebral/storage";
import { Module } from "cerebral";
import Sip from "./providers/Sip";
import {
  onAccepted,
  onCancel,
  onInvite,
  onRejected,
  onTerminated,
  onRegistrationFailed
} from "./sequences";
import Modal from "./providers/Modal";
import * as sequences from "./sequences";

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

export function cerebralFactory(modal) {
  return Module({
    state: {
      settings: {
        server: "127.0.0.1",
        domain: "ctel.com",
        username: "1234",
        password: "1234"
        // autoRegister: true,
      },
      lastDialed: "",
      toCall: "",
      registered: false,
      username: username || "",
      call: {
        type: "",
        name: "",
        connected: false
      }
    },
    catch: [],
    providers: {
      modal: Modal(modal),
      sip: Sip({
        onAccepted,
        onRejected,
        onFailed: onCancel,
        onConnecting: [],
        onTerminated,
        onCancel,
        onRegistrationFailed,
        onRefer: [],
        onBye: onCancel,
        onProgress: [],
        onDtmf: [],
        // onMuted: [],
        // onUnmuted: [],
        onInfo: [],
        onInvite
      })
    },
    signals: {
      saveInput: [
        function saveInput({ props, state }) {
          state.set(props.target, props.value);
        }
      ],
      call: sequences.callSequence,
      register: sequences.registerSequence,
      unregister: sequences.unregisterSequence,
      hangup: sequences.hangupSequence,
      answer: sequences.answerSequence,
      onRegistrationFailed: sequences.onRegistrationFailed
    },
    modules: {
      storage: StorageModule({
        target: localStorage,
        json: true,
        sync: {
          settings: "settings",
          lastDialed: "lastDialed"
        }
      })
    }
  });
}
