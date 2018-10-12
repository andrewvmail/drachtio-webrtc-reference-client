import {
  Component,
  ChangeDetectorRef,
} from "@angular/core";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { signal } from "cerebral/tags";

@Component({
  template: `
    <ion-list>
    <ion-list-header color="primary">Menu</ion-list-header>
    <button ion-item (tap)="addIceServer()">
      <ion-icon name="add" item-start></ion-icon>Add an Ice Server</button>
  </ion-list>
  `
})
@connect({
  addIceServer: signal(["addIceServer"]),
})
export class SettingsMenu  extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService,
  ) {
    super(cdr, controller);
  }
}



