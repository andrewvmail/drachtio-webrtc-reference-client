import StorageModule from "@cerebral/storage";
import { Module } from "cerebral";
import SimpleDrachtioRegistrar from "./simple-drachtio-registrar";
import Sip from "./providers/Sip";

export default Module({
  catch: [],
  providers: {
    sip: Sip({
      onAccepted: [],
      onRejected: [],
      onFailed: [],
      onConnecting: [],
      onTerminated: [],
      onCancel: [],
      onRefer: [],
      onBye: [],
      onProgress: [],
      onDtmf: [],
      // onMuted: [],
      // onUnmuted: [],
      onInfo: [],
      onInvite: [
        
      ]
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
        "simpleDrachtioRegistrar.settings": "simpleDrachtioRegistrar.settings",
        "simpleDrachtioRegistrar.lastDialed":
          "simpleDrachtioRegistrar.lastDialed"
      }
    })
  }
});
