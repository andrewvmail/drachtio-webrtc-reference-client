import StorageModule from "@cerebral/storage";
import { Module } from "cerebral";
import SimpleDrachtioRegistrar from "./simple-drachtio-registrar";
import Sip from "./providers/Sip";
import { onAccepted, onCancel, onInvite, onRejected, onTerminated, onRegistrationFailed } from './simple-drachtio-registrar/sequences'
import Modal from './providers/Modal'

export function cerebralFactory(modal) {
  return Module({
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
      ]
    },
    modules: {
      simpleDrachtioRegistrar: SimpleDrachtioRegistrar,
      storage: StorageModule({
        target: localStorage,
        json: true,
        sync: {
          "simpleDrachtioRegistrar.settings":
            "simpleDrachtioRegistrar.settings",
          "simpleDrachtioRegistrar.lastDialed":
            "simpleDrachtioRegistrar.lastDialed"
        }
      })
    }
  });
}
