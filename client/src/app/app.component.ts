import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { connect, ControllerService } from "@cerebral/angular";
import { SimpleDrachtioRegistrarTabsPage } from '../pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SimpleDrachtioRegistrarTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

