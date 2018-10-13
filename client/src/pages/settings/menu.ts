import { Component, ChangeDetectorRef } from "@angular/core";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { signal } from "cerebral/tags";
import { NavController } from "ionic-angular";
import { LibrariesWeUse } from "../libraries-we-use/libraries-we-use";
import { About } from "../about/about";

@Component({
  template: `
    <ion-list>
    <ion-list-header color="primary">Menu</ion-list-header>
    <button ion-item (tap)="addIceServer()">
      <ion-icon name="add" item-start></ion-icon>Add an Ice Server
    </button>
    <button ion-item (tap)="navigate()">
      <ion-icon name="book" item-start></ion-icon>
      Libraries We Use
    </button>
    <button ion-item (tap)="navigate('about')">
      <ion-icon name="information" item-start></ion-icon>
      About
    </button>
    </ion-list>
  `
})
@connect({
  addIceServer: signal(["addIceServer"])
})
export class SettingsMenu extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService,
    public navCtrl: NavController
  ) {
    super(cdr, controller);
  }

  navigate(component) {
    if (component === "about") {
      this.navCtrl.push(About);
      return;
    }

    this.navCtrl.push(LibrariesWeUse);
  }
}
