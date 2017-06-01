import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';


/**
 * Generated class for the AuthentificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  // providers: [Auth],
  selector: 'page-authentification',
  templateUrl: 'authentification.html',
  providers: [Auth]
})
export class AuthentificationPage {
  details = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public user: User) {

  }

  logForm(){
      console.log(this.details);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');

    // this.auth.login('basic', details).then(() => {
    //   console.log(details)
    // });
  }

}
