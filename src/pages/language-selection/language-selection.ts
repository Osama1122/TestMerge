import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';


/**
 * Generated class for the LanguageSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language-selection',
  templateUrl: 'language-selection.html',
})
export class LanguageSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguageSelectionPage');
  }
  savedLoginUsers(){
    this.navCtrl.push(SavedLoginsUsersPage);
  }

}
