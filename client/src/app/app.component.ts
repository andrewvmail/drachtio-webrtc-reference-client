import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { connect, ControllerService } from "@cerebral/angular";
import { RegistrarTabsPage } from '../pages/tabs/tabs'
import { PrivacyPolicy } from '../pages/privacy-policy/privacy-policy'

declare const window

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // push to privacy policy if we have #privacy in the url for store use
  rootPage:any = window.location.href.indexOf('#privacy') > -1 ? PrivacyPolicy : RegistrarTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
