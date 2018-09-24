import StorageModule from "@cerebral/storage";
import {Module} from "cerebral"
import SimpleDrachtioRegistrar from "./simple-drachtio-registrar"

export default Module({
  catch: [],
  providers: [],
  signals: {
    saveInput: [
      function saveInput({props, state}) {
        state.set(props.target, props.value)
      }
    ]
  },
  modules: {
    simpleDrachtioRegistrar: SimpleDrachtioRegistrar,
    storage: StorageModule({
      target: localStorage,
      json: true,
      sync: {
        "simpleDrachtioRegistrar": "simpleDrachtioRegistrar"
      }
    })
  }
});
