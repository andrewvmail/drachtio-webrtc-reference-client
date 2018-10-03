import { Component, ViewChild } from '@angular/core'
import { MenuController, NavController, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { connect, ControllerService } from "@cerebral/angular";
import { SimpleDrachtioRegistrarTabsPage } from '../pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs'
import { DrachtioSimpleServerTabsPage } from '../pages/drachtio-simple-server-tabs/drachtio-simple-server-tabs'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  // rootPage:any = SimpleDrachtioRegistrarTabsPage;
  rootPage:any = DrachtioSimpleServerTabsPage;

  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goTo(where) {
    if(where === 'drachtio-simple-server') {
      this.nav.setRoot(DrachtioSimpleServerTabsPage);
    } else {
      this.nav.setRoot(SimpleDrachtioRegistrarTabsPage);
    }
    this.menuCtrl.close();
  }
}

