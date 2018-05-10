import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { PurchaseCreditPage } from '../purchase-credit/purchase-credit';
import { ResallerSearchPage } from '../resaller-search/resaller-search';
import { EwalletRechargeHistoryPage } from '../ewallet-recharge-history/ewallet-recharge-history';
import { EwalletTransactionHistoryPage } from '../ewallet-transaction-history/ewallet-transaction-history';

/**
 * Generated class for the EWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e-wallet',
  templateUrl: 'e-wallet.html',
})
export class EWalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EWalletPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  purchaseCredit(){
    this.navCtrl.push(PurchaseCreditPage);
  }
  resallerSearch(){
    this.navCtrl.push(ResallerSearchPage);
  }
  ewalletRechargeHistory(){
    this.navCtrl.push(EwalletRechargeHistoryPage);
  }
  ewalletTransactionHistory(){
    this.navCtrl.push(EwalletTransactionHistoryPage);
  }
}
