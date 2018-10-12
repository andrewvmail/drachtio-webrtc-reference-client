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
import { PopoverController } from 'ionic-angular'
import { SettingsMenu } from './menu'

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
  iceServers: state(["settings.iceServers"]),

  saveInput: signal(["saveInput"]),
  addIceServer: signal(["addIceServer"]),
  deleteIceServer: signal(["deleteIceServer"]),
})
export class SettingsPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService,
    private popoverCtrl: PopoverController
  ) {
    super(cdr, controller);
  }

  presentRadioPopover(ev: UIEvent) {
    this.popoverCtrl.create(SettingsMenu).present({
      ev: ev
    });
  }
}
