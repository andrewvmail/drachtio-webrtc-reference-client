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
import { NavController } from 'ionic-angular'
import { LibrariesWeUse } from '../libraries-we-use/libraries-we-use'

@Component({
  template: `
    <ion-list>
    <ion-list-header color="primary">Menu</ion-list-header>
    <button ion-item (tap)="addIceServer()">
      <ion-icon name="add" item-start></ion-icon>Add an Ice Server
    </button>
    <button ion-item (tap)="navigate(LibrariesWeUse)">
      <ion-icon name="book" item-start></ion-icon>
      Libraries We Use
    </button>  
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
    public navCtrl: NavController
  ) {
    super(cdr, controller);
  }

  navigate() {
    this.navCtrl.push(LibrariesWeUse)
  }
}



