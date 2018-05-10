import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PurchaseCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-credit',
  templateUrl: 'purchase-credit.html',
})
export class PurchaseCreditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  purchaseAlert() {
    let alert = this.alertCtrl.create({
      title: 'Credit!',
      subTitle: 'Purchased Successfully!',
      buttons: ['OK'],
      cssClass: 'alertSuccess'
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseCreditPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
}
