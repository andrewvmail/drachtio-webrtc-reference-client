import { Component } from "@angular/core";
import { DialerPage } from '../dialer/dialer'
import {
  SettingsPage
} from '../settings/settings'

@Component({
  templateUrl: 'tabs.html'
})
export class RegistrarTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  dialer = DialerPage;
  settings = SettingsPage;

  constructor() {

  }
}
