import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterSchoolPage } from '../register-school/register-school';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the StudentRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-register',
  templateUrl: 'student-register.html',
})
export class StudentRegisterPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentRegisterPage');
  }

  registerSchool(){
    this.navCtrl.push(RegisterSchoolPage);
  }

  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);
  }

}
