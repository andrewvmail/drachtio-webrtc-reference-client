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
        password: "1234",
        iceServers: [
          { url: "stun:stun.l.google.com:19302", username: "", credential: "" }
        ]
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
      addIceServer: [
        function addIceServer({ state }) {
          let iceServers = state.get("settings.iceServers");
          iceServers.push({
            url: "",
            username: "",
            credential: ""
          });

          state.set("settings.iceServers", iceServers);
        }
      ],
      deleteIceServer: [
        function deleteIceServer({ props, state }) {
          const { index } = props;
          let iceServers = state.get("settings.iceServers");
          iceServers.splice(index, 1);

          state.set("settings.iceServers", iceServers);
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
