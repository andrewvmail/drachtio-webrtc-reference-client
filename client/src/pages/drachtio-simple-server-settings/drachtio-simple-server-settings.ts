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
  selector: "page-drachtio-simple-server-settings",
  templateUrl: "drachtio-simple-server-settings.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  server: state(["drachtioSimpleServer.settings.server"]),
  domain: state(["drachtioSimpleServer.settings.domain"]),
  username: state(["drachtioSimpleServer.settings.username"]),
  password: state(["drachtioSimpleServer.settings.password"]),
  saveInput: signal(["saveInput"]),
})
export class DrachtioSimpleServerSettingsPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
