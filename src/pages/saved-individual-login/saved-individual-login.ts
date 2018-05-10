import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SavedIndividualLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-individual-login',
  templateUrl: 'saved-individual-login.html',
})
export class SavedIndividualLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedIndividualLoginPage');
  }

  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);
  }
 
}
