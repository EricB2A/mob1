import { NgModule } from '@angular/core';
import {IonicPageModule, NavController} from 'ionic-angular';
import { JobsPage } from './jobs';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
  ],
  exports: [
    JobsPage
  ]
})
export class JobsPageModule {
  constructor(public navCtrl: NavController){

  }
}
