import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { SearchSubjectDetailPage } from '../search-subject-detail/search-subject-detail';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
// public searcharray = new Array(10);
 items;
 subjects;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.subjects = "lessons";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }

  searchSubjectDetail(){
    this.navCtrl.push(SearchSubjectDetailPage);
  }

  initializeItems() {
    this.items = [
      'English',
      'Urdu',
      'Drawing',
      'Computer Science',
      'Physics',
      'Chemistry',
      'Biology',
      'Mathematics',
      'Political Science',
      'Geography',
      'History',
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
