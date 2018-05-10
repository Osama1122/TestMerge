import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { ResallerProfilePage } from '../resaller-profile/resaller-profile';

/**
 * Generated class for the ResallerSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resaller-search',
  templateUrl: 'resaller-search.html',
})
export class ResallerSearchPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResallerSearchPage');
  }
  savedUserLogins(){
    this.navCtrl.push(SavedLoginsUsersPage);
  }

  resallerProfile()
  {
    this.navCtrl.push(ResallerProfilePage);
  }

  initializeItems() {
    this.items = [
      'Hamza Khan',
      'Usama Afzal',
      'Ali Younas',
      'Shahid Afridi',
      'Suleman Khan',
      'Zara Sheikh',
      'Shaheryar Tariq',
      'Asad Ijaz',
      'Fazeelat Suleman',
      'Kiran',
      'Darya Khan',
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
