import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { RegisterAsPage } from '../register-as/register-as';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController , private http: Http) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguageSelectionPage');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter LanguageSelectionPage');
    this.getLanguages();
  }
  arabic(){
    var langId = 1;
    this.navCtrl.push( RegisterAsPage , {lang : langId});
  }
  english(){
    var langId = 2;
    this.navCtrl.push( RegisterAsPage , {lang : langId});
  }

  getLanguages(){
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
     });
    loading.present();
      this.http.get("http://192.168.1.107:3000/usertypes")
      .subscribe(data => {
        var LangugesTypes = data.json();
        console.log(LangugesTypes); 
        loading.dismiss();
       }, error => { 
       loading.dismiss();   
      console.log(error);// Error getting the data
      });

  }

}
