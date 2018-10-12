import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule,
  ModalController
} from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { ControllerService } from "@cerebral/angular";

import { MyApp } from "./app.component";
import { RegistrarTabsPage } from "../pages/tabs/tabs";
import { DialerPage } from "../pages/dialer/dialer";
import { SettingsPage } from "../pages/settings/settings";
import { ModalPage } from "../pages/in-call-modal/in-call-modal";

import { cerebralFactory } from "../main";
import Devtools from "cerebral/devtools";

function configureController(modal: ModalController) {
  const cerebral = cerebralFactory(modal);

  return new ControllerService(cerebral, {
    // devtools: Devtools({
    //   host: "localhost:9999",
    //   reconnect: true,
    //   storeMutations: true,
    //   bigComponentsWarning: 5,
    //   warnStateProps: true
    // })
  });
}

@NgModule({
  declarations: [
    MyApp,
    RegistrarTabsPage,
    DialerPage,
    SettingsPage,
    ModalPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrarTabsPage,
    DialerPage,
    SettingsPage,
    ModalPage
  ],
  providers: [
    {
      provide: ControllerService,
      useFactory: configureController,
      deps: [ModalController]
    },
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
