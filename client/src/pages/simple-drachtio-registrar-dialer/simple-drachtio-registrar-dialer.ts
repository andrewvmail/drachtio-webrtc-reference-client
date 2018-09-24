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
  selector: "page-simple-drachtio-registrar-dialer",
  templateUrl: "simple-drachtio-registrar-dialer.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  toCall: state(["simpleDrachtioRegistrar.toCall"]),
  registered: state(["simpleDrachtioRegistrar.registered"]),
  call: signal(["simpleDrachtioRegistrar.call"]),
  register: signal(["simpleDrachtioRegistrar.register"]),
  unregister: signal(["simpleDrachtioRegistrar.unregister"]),
  saveInput: signal(["saveInput"]),
})
export class SimpleDrachtioRegistrarDialerPage extends CerebralComponent{
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
