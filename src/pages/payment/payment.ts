import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { UnitDetailsPage } from '../unit-details/unit-details';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you want to pay it from your E-Wallet',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'alertSuccess',
          handler: () => {
            console.log('Yes clicked');
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alertDanger',
          handler: () => {
            console.log('No clicked');
          }
        },
      ]
    });
    alert.present();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  description(){
    this.navCtrl.push(UnitDetailsPage);
  }
}
