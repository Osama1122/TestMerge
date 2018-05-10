import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';

/**
 * Generated class for the EwalletTransactionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ewallet-transaction-history',
  templateUrl: 'ewallet-transaction-history.html',
})
export class EwalletTransactionHistoryPage {
  public transaction_history = new Array(3);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EwalletTransactionHistoryPage');
  }
  savedUserLogins(){
    this.navCtrl.push(SavedLoginsUsersPage);
  }
}
