import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { ControllerService } from "@cerebral/angular";

import { MyApp } from "./app.component";
import { SimpleDrachtioRegistrarTabsPage } from "../pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs";
import { SimpleDrachtioRegistrarDialerPage } from "../pages/simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer";
import { SimpleDrachtioRegistrarSettingsPage } from "../pages/simple-drachtio-registrar-settings/simple-drachtio-registrar-settings";

import cerebral from "../cerebral";
import Devtools from "cerebral/devtools";

function configureController() {
  return new ControllerService(cerebral, {
    // devtools: Devtools({
    //   host: "localhost:9999",
    //   reconnect: true,
    //   storeMutations: true,
    //   bigComponentsWarning: 5,
    //   warnStateProps: true
    // }),
  });
}

@NgModule({
  declarations: [
    MyApp,
    SimpleDrachtioRegistrarTabsPage,
    SimpleDrachtioRegistrarDialerPage,
    SimpleDrachtioRegistrarSettingsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SimpleDrachtioRegistrarTabsPage,
    SimpleDrachtioRegistrarDialerPage,
    SimpleDrachtioRegistrarSettingsPage
  ],
  providers: [
    {
      provide: ControllerService,
      useFactory: configureController,
      deps: []
    },
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
