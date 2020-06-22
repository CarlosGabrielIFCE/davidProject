import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserPage } from '../pages/browser/browser';
import { IonicStorageModule } from '@ionic/storage';
import { ContactProvider } from '../providers/contact/contact';
import { ContactsPage } from '../pages/contacts/contacts';
import { DatePipe } from '@angular/common';

import { GoogleMapComponent } from '../components/google-map/google-map';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BrowserPage,
    ContactsPage,
    GoogleMapsPage,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BrowserPage,
    ContactsPage,
    GoogleMapsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    DatePipe
  ]
})
export class AppModule {}
