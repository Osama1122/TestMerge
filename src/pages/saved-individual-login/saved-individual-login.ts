import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { ShareService } from '../services/share';

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
 public user;
 public userProfilePhoto;
 public dp;
 public userUserName;
 public userEmail;
 public userFullName;
 private myForm : FormGroup;   
public serverUrl = "http://192.168.1.107:3000/";  
constructor(public navCtrl: NavController , public navParams: NavParams , public shareService: ShareService, public loadingCtrl: LoadingController , private http: Http , private formBuilder: FormBuilder ,public toastCtrl: ToastController) {
  var test = navParams.get('userdata');  
  this.userUserName = test['username'];       
  this.userProfilePhoto = test['image'];
  this.userEmail = test['email'];
  this.userFullName = test['firstname'];
   this.myForm = this.formBuilder.group({
      pass:  ['', Validators.required],
    }); 
   this.user = test;
  }  

  ionViewDidLoad() {
  //this.userProfilePhoto = this.user['image'];
    console.log('ionViewDidLoad SavedIndividualLoginPage');
  }
  
  Login(){
         let loading = this.loadingCtrl.create({
     content: 'Logging In .. '
     });
      loading.present(); 
     var password=this.myForm.get('pass').value;
      let payload = {"username" : this.userUserName , "password" : password}
      this.http.post("http://192.168.1.107:3000/authenticate"  , payload)
        .subscribe(data => {
          var dataSuccess = data.json();
                  var mesg = dataSuccess['message'];
                  let toast = this.toastCtrl.create({
                   message: mesg,
                   duration: 3000,
                   position: 'top'
                 });    
                 toast.present();       
          console.log("Success" , dataSuccess); 
          if(dataSuccess['success'] == true){
             //Getting data from User ID
             var userid = dataSuccess['userid']; 
             var token = dataSuccess['token'];
              let headers = new Headers;
              headers.append('Access-Control-Allow-Origin', '*' );
              headers.append('enctype', 'multipart/form-data');  
              headers.append('Accept', 'application/json');
              headers.append('x-access-token', token);
              let options = new RequestOptions({ headers: headers });
              this.http.get("http://192.168.1.107:3000/users/profile/"+userid , options ) 
                .subscribe(data => {
                  var users = data.json();
                   loading.dismiss(); 
                  var userVerified  = users[0]['isemailverified']['data'][0];
                  if(userVerified == 0){
                      let toast = this.toastCtrl.create({
                       message: "Account is not Verified! Please Verify",
                       duration: 3000,
                       position: 'top'
                       }); 
                       toast.present();
                   }
                  else{
                    var successData = {'userId' : users[0]['userid'] , 'token' : token , 'languageId' : users[0]['languageid'] , 'usertype' : users[0]['usertypeid'] };
                   console.log("----------", successData);
                    this.shareService.setSuccessData(successData); 
                    this.navCtrl.setRoot(TabsPage); 
                  }
                 }, error => {  
                   loading.dismiss(); 
                console.log(error);// Error getting the data
              });
           }
            else if(dataSuccess['success'] == false){
               loading.dismiss(); 
             }
         }, error => {  
          loading.dismiss();  
        console.log(error);// Error getting the  data   
        }); 

    //this.navCtrl.setRoot(TabsPage);
  }
 
}
