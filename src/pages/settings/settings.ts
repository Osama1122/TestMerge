import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';

import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ChildManagementPage } from '../child-management/child-management';
import { SearchParentPage } from '../search-parent/search-parent';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ApplicationSettingsPage, characterNum);
    modal.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  profileSettings(){
    this.navCtrl.push(ProfileSettingsPage);
  }
  childManagement(){
    this.navCtrl.push(ChildManagementPage);
  }
  associateParent(){
    this.navCtrl.push(SearchParentPage);
  }
}

@Component({
  template: `
<ion-content text-center>
  <div class="p-3">
    <!--<button ion-button (click)="dismiss()" class="modal_close_btn">
      <ion-icon name="md-close"></ion-icon>
    </button>-->
    <ion-list class="transparent_list">
    <ion-item class="microphone">
      <ion-toggle checked="false"></ion-toggle>
      <ion-label>
        Microphone Settings
      </ion-label>
      <ion-icon name='md-mic' item-start></ion-icon>
    </ion-item>
    <ion-item class="bell">
      <ion-toggle checked="false"></ion-toggle>
      <ion-label>
        Notifications
      </ion-label>
      <ion-icon name='md-notifications' item-start></ion-icon>
    </ion-item>
  </ion-list>
  <div class="modal_buttons">
  <button class="alertSuccess" ion-button (click)="dismiss()"> Ok </button>
  <button class="alertDanger" ion-button (click)="dismiss()"> Cancel </button>
  </div>
  </div>
</ion-content>
`
})
export class ApplicationSettingsPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ){}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

