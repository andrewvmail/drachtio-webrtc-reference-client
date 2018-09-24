import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SimpleDrachtioRegistrarTabsPage } from '../pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs'
import { SimpleDrachtioRegistrarDialerPage } from '../pages/simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer'
import { SimpleDrachtioRegistrarSettingsPage } from '../pages/simple-drachtio-registrar-settings/simple-drachtio-registrar-settings'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SimpleDrachtioRegistrarTabsPage,
    SimpleDrachtioRegistrarDialerPage,
    SimpleDrachtioRegistrarSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SimpleDrachtioRegistrarTabsPage,
    SimpleDrachtioRegistrarDialerPage,
    SimpleDrachtioRegistrarSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
