import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LanguageSelectionPage } from '../language-selection/language-selection';
import { RegisterAsPage } from '../register-as/register-as';

/**
 * Generated class for the StartingScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starting-screen',
  templateUrl: 'starting-screen.html',
})
export class StartingScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartingScreenPage');
  }

  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);
  }
  languageSelection(){
    this.navCtrl.setRoot(LanguageSelectionPage);
  }
  registerAs(){
    this.navCtrl.push(RegisterAsPage);
  }

}
