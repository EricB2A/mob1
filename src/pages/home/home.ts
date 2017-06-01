import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { AuthentificationPage } from '../authentification/authentification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  template: `<ion-nav [root]="rootPage"></ion-nav>`

})

export class HomePage {
    rootPage;
    constructor(public navCtrl: NavController, public auth:Auth) {

    }

    ionViewDidLoad() {
        console.log("FIRST");
        if(!this.auth.isAuthenticated()){
            this.rootPage = AuthentificationPage;
        }
    }

}
