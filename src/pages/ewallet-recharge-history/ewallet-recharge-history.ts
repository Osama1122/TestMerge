import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';

/**
 * Generated class for the EwalletRechargeHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ewallet-recharge-history',
  templateUrl: 'ewallet-recharge-history.html',
})
export class EwalletRechargeHistoryPage {
  public recharge_history = new Array(3);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EwalletRechargeHistoryPage');
  }
  savedUserLogins(){
    this.navCtrl.push(SavedLoginsUsersPage);
  }

}
