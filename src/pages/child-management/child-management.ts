import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { StudentRegisterPage } from '../student-register/student-register';

/**
 * Generated class for the ChildManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child-management',
  templateUrl: 'child-management.html',
})
export class ChildManagementPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildManagementPage');
  }
  savedUserLogins(){
    this.navCtrl.push(SavedLoginsUsersPage);
  }
  studentRegister(){
    this,this.navCtrl.push(StudentRegisterPage);
  }

}
