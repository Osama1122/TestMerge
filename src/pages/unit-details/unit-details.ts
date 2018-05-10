import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the UnitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit-details',
  templateUrl: 'unit-details.html',
})
export class UnitDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitDetailsPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  payment(){
    this.navCtrl.push(PaymentPage);
  }
}
