import StorageModule from "@cerebral/storage";
import {Module} from "cerebral"
import SimpleDrachtioRegistrar from "./simple-drachtio-registrar"

export default Module({
  state: {
    hello: "world"
  },
  catch: [],
  providers: [],
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
