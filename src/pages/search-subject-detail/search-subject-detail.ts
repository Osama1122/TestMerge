import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';

import { ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchSubjectDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-subject-detail',
  templateUrl: 'search-subject-detail.html',
})
export class SearchSubjectDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSubjectDetailPage');
  }

  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}

@Component({
  template: `
<ion-content text-center>
  <div class="modal_video"> 
        <video controls src="assets/videos/video-placeholder.mp4" style="width:100%; max-width: 100%;"></video>
  </div>
</ion-content>
`
})
export class ModalContentPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ){}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

