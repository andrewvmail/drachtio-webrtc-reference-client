import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { state, signal } from "cerebral/tags";

@Component({
  selector: "page-drachtio-simple-server-chat",
  templateUrl: "drachtio-simple-server-chat.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  // name: state(["simpleDrachtioRegistrar.username"]),
  // authUsername: state(["simpleDrachtioRegistrar.settings.username"]),
  // toCall: state(["simpleDrachtioRegistrar.toCall"]),
  // registered: state(["simpleDrachtioRegistrar.registered"]),
  // call: signal(["simpleDrachtioRegistrar.call"]),
  register: signal(["drachtioSimpleServer.register"]),
  // unregister: signal(["simpleDrachtioRegistrar.unregister"]),
  // saveInput: signal(["saveInput"])
})
export class DrachtioSimpleServerChatPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
