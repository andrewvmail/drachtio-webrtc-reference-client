import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import SIP from "sip.js";
import { SimpleDrachtioRegistrarDialerPage } from '../simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer'
import {
  SimpleDrachtioRegistrarSettingsPage
} from '../simple-drachtio-registrar-settings/simple-drachtio-registrar-settings'

@Component({
  templateUrl: 'simple-drachtio-registrar-tabs.html'
})
export class SimpleDrachtioRegistrarTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  dialer = SimpleDrachtioRegistrarDialerPage;
  settings = SimpleDrachtioRegistrarSettingsPage;

  constructor() {

  }
}
