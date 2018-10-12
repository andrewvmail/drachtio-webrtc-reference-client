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
  selector: "page-settings",
  templateUrl: "settings.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  server: state(["settings.server"]),
  domain: state(["settings.domain"]),
  username: state(["settings.username"]),
  password: state(["settings.password"]),
  // autoRegister: state(["settings.autoRegister"]),

  saveInput: signal(["saveInput"]),
})
export class SettingsPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
