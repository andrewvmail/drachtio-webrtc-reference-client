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
  selector: "page-simple-drachtio-registrar-settings",
  templateUrl: "simple-drachtio-registrar-settings.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  server: state(["simpleDrachtioRegistrar.settings.server"]),
  domain: state(["simpleDrachtioRegistrar.settings.domain"]),
  username: state(["simpleDrachtioRegistrar.settings.username"]),
  password: state(["simpleDrachtioRegistrar.settings.password"]),
  autoRegister: state(["simpleDrachtioRegistrar.settings.autoRegister"]),

  saveInput: signal(["saveInput"]),
})
export class SimpleDrachtioRegistrarSettingsPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
