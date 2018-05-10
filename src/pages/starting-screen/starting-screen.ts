import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController,NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LanguageSelectionPage } from '../language-selection/language-selection';
import { RegisterAsPage } from '../register-as/register-as';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoginPage } from '../login/login';
import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../services/share';

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
 public deviceUniqueID;
 public screenState;
 public users;
 private myForm : FormGroup;    
  constructor(private device: Device , public plt: Platform , public navCtrl: NavController, public shareService: ShareService, public navParams: NavParams , public loadingCtrl: LoadingController , private formBuilder: FormBuilder , private http: Http ,public toastCtrl: ToastController ) {
   this.myForm = this.formBuilder.group({
      usr:  ['', Validators.required],
      pass:  ['', Validators.required],
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartingScreenPage');
  }
   ionViewDidEnter() {
    console.log('ionViewDidEnter RegisterAsPage');
     if (this.plt.is('core')) {
     
         console.log("Browser");
         var id = "101010";
         //Get Id & fetch details of User
         this.getUsersOnThisDevice(id);
    }
   else if(this.plt.is('android')){

      console.log("Android Mobile");
      console.log('Device UUID is: ' + this.device.uuid);
      let id =  this.device.uuid;
      //Get Id & fetch details of User
       this.getUsersOnThisDevice(id);
   }
   else if(this.plt.is('ios')){
      
      console.log("Ios Mobile");
      console.log('Device UUID is: ' + this.device.uuid);
      let id =  this.device.uuid;
      //Get Id & fetch details of User
       this.getUsersOnThisDevice(id);
   }
   }   


  //LOGIN FOR PWA SCREEN 
    Login(){ 
         let loading = this.loadingCtrl.create({
         content: 'Logging In .. '
         });
          loading.present(); 
         var username=this.myForm.get('usr').value;
         var password=this.myForm.get('pass').value;
          let payload = {"username" : username , "password" : password}
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
                        var successData = {'userId' : users[0]['userid'] , 'token' : users[0]['sessiontoken'] , 'languageId' : users[0]['languageid'] , 'usertype' : users[0]['usertypeid'] };
                        this.shareService. setSuccessData(successData);
                        console.log("----------", successData);
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


  //GO TO SPECIFIC PAGE AFTER CHECKING TO WHERE IT SHOULD GO , IN BELOW METHOD 

  languageSelection(){ 
 
  if(this.screenState =="LoginPage"){
          this.navCtrl.setRoot(LoginPage); 
        }
  else{
          this.navCtrl.setRoot(SavedLoginsUsersPage , {data : this.users}); 
         }
  }

  registerAs(){
    this.navCtrl.push(LanguageSelectionPage); 
  }

   //Get Users on Saved Device ID 
   getUsersOnThisDevice(id){ 
    console.log("Checking ID");
    var uuid = id;
    let loading = this.loadingCtrl.create({
    content: 'Getting Device Details For Previous Logins .. '
     });
    loading.present();    
     this.http.get("http://192.168.1.107:3000/deviceIdCheck/"+uuid) 
      .subscribe(data => {
        this.users = data.json(); 
          loading.dismiss();
        if(this.users.length!=0){
          //Go to Recent Logins Screen
          this.screenState = "SavedLoginsUsersPage";
        }
        else {
          //Go to Norml Login Screen
          this.screenState = "LoginPage";

        }
        console.log("Users = " , this.users); 
       }, error => {  
         this.screenState = "LoginPage";
         loading.dismiss(); 
      console.log(error);// Error getting the data
      });
     }
     
}
