import { Component } from "@angular/core";
import { SimpleDrachtioRegistrarDialerPage } from '../simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer'
import {
  SimpleDrachtioRegistrarSettingsPage
} from '../simple-drachtio-registrar-settings/simple-drachtio-registrar-settings'
import { DrachtioSimpleServerChatPage } from '../drachtio-simple-server-chat/drachtio-simple-server-chat'
import { DrachtioSimpleServerSettingsPage } from '../drachtio-simple-server-settings/drachtio-simple-server-settings'

@Component({
  templateUrl: 'drachtio-simple-server-tabs.html'
})
export class DrachtioSimpleServerTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  chat = DrachtioSimpleServerChatPage;
  settings = DrachtioSimpleServerSettingsPage;

  constructor() {

  }
}
