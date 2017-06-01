import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthentificationPage} from '../pages/authentification/authentification'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JobsPage } from "../pages/jobs/jobs";
import { JobsProvider } from '../providers/jobs/jobs';
import {HttpModule} from "@angular/http";
import {CloudModule} from "@ionic/cloud-angular";
import {CloudSettings} from "@ionic/cloud/dist/es5";

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '1'
//   }
// };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JobsPage,
    AuthentificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JobsPage,
    AuthentificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobsProvider
  ]
})
export class AppModule {}
