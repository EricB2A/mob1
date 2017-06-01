import { NgModule } from '@angular/core';
import {IonicPageModule, NavController} from 'ionic-angular';
import { JobsPage } from './jobs';
// import {ConnectionBackend, Http} from "@angular/http";
// import { HTTP_PROVIDERS } from '@angular2/http';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
  ],
  exports: [
    JobsPage
  ],
  // providers: [
  //   Http,
  //   ConnectionBackend,
  //   HTTP_PROVIDERS
  // ]
})
export class JobsPageModule {
  constructor(public navCtrl: NavController){

  }
}
