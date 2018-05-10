import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentRegisterPage } from '../student-register/student-register';
import { ParentRegisterPage } from '../parent-register/parent-register';
import { TeacherRegisterPage } from '../teacher-register/teacher-register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterAsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-as',
  templateUrl: 'register-as.html',
})
export class RegisterAsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAsPage');
  }

  studentRegister(){
    this.navCtrl.push(StudentRegisterPage);
  }
  parentRegister(){
    this.navCtrl.push(ParentRegisterPage);
  }
  teacherRegister(){
    this.navCtrl.push(TeacherRegisterPage);
  }
  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);
  }
}
