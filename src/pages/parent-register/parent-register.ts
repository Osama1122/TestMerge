import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentRegisterPage } from '../student-register/student-register';
import { StartingScreenPage } from '../starting-screen/starting-screen';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ParentRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-register',
  templateUrl: 'parent-register.html',
})
export class ParentRegisterPage {
  public countries;
  public cities;
  public country;
  public cityId;
  public city;
  public profilePhoto;
  public uploadedImage;
  public gender;
  public languageId;
  public deviceUniqueID;
  private myForm : FormGroup;    
  constructor(private device: Device , public navCtrl: NavController, public navParams: NavParams, private http: Http , public loadingCtrl: LoadingController  , private formBuilder: FormBuilder ,public toastCtrl: ToastController , public plt: Platform ) {
   this.languageId = navParams.get('langId'); 
   this.myForm = this.formBuilder.group({
      name:  ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      usr:  ['', Validators.required],
      mobile:  ['', Validators.required],
      pass:  ['', Validators.required],
      email:  ['', Validators.required],
      dob:  ['', Validators.required],
    }); 
   this.profilePhoto = "assets/imgs/father.png";
  }  

  ionViewDidLoad() {
     console.log('ionViewDidLoad ParentRegisterPage');
  } 
  ionViewDidEnter() {
    console.log('ionViewDidEnter ParentRegisterPage');
    this.getCountries();
   if (this.plt.is('core')) {
     
         console.log("Browser");

    }
   else if(this.plt.is('android')){

      console.log("Android Mobile");
      console.log('Device UUID is: ' + this.device.uuid);
      this.deviceUniqueID =  this.device.uuid;
   }
    else if(this.plt.is('ios')){
      
      console.log("Ios Mobile");
      console.log('Device UUID is: ' + this.device.uuid);
      this.deviceUniqueID =  this.device.uuid;
   }
  }
  mainPageJump(){
    this.navCtrl.setRoot(LoginPage);
  }

  //GET PHOTO WHICH USER UPLOADS
  fileChangeEvent(event: any){ 
     if(event.target.files && event.target.files[0]){
         let reader = new FileReader();
         reader.onload = (event:any) => {
         this.profilePhoto = event.target.result; 
          } 
         reader.readAsDataURL(event.target.files[0]);
       }
       let fileList: FileList = event.target.files;  
       let file: File = fileList[0]; 
       console.log(file);
       this.uploadedImage = file;   
   }

  //GET GEnder of Selected Value
  getGender(){
   var genderType = this.gender;
  }

  //GET LIST OF COUNTRIES 
   getCountries(){
     let loading = this.loadingCtrl.create({
    content: 'Please wait...'
     });
    loading.present();
      this.http.get("http://192.168.1.107:3000/countries")
      .subscribe(data => {
        loading.dismiss();
        this.countries = data.json();  
        console.log("Countries : " , this.countries); 
       }, error => {   
        loading.dismiss();
      console.log(error);// Error getting the data
      });
  }

  //When City Selected Value comes here
   getCity(){
    var SelectedCity = this.city;
    this.cityId = SelectedCity['cityid'];
    var cityName = SelectedCity['fullname']; 
  }

  //POPULATE THE CITIES OF SELECTED COUNTRY
  getCountryCities(){
    var selectedCountry = this.country; //here comes selected country value
    var countryId = selectedCountry['countryid'];
    var countryName = selectedCountry['fullname'];
    this.http.get("http://192.168.1.107:3000/cities/country/"+countryId)
        .subscribe(data => {
          this.cities = data.json();    
          console.log("Cities in "+countryName+"are :" , this.cities); 
         }, error => {   
        console.log(error);// Error getting the data   
        }); 
  }

  //RegisterParents Mathod
  RegisterParent(){

     var firtname =this.myForm.get('name').value;
     var lastname = " ";
     var mobileNo=this.myForm.get('mobile').value; 
     var password=this.myForm.get('pass').value;
     var email=this.myForm.get('email').value;
     var username =this.myForm.get('usr').value;
     var dob =this.myForm.get('dob').value;
     var cityId = this.cityId;  
     var parentType = this.gender; 
     var image =  this.uploadedImage;
     var usertypeId =  2;
     var deviceId =  202120110;
     if(this.deviceUniqueID){
      let deviceId : number = this.deviceUniqueID;
     }
     var languageid = 1;
     var resellerid = 1;
     //Now set headers / Form Data for Image Upload of User
          let formData = new FormData();
          let headers = new Headers;
          headers.append('Access-Control-Allow-Origin', '*' );
          headers.append('enctype', 'multipart/form-data');  
          headers.append('Accept', 'application/json');
          formData.append('mobileno', mobileNo);  
          formData.append('email', email);   
          formData.append('username', username);
          formData.append('usertypeid', usertypeId.toString());
          formData.append('password', password);
          formData.append('languageid', languageid.toString());
          formData.append('deviceid', deviceId.toString());
          formData.append('firstname', firtname);
          formData.append('lastname', lastname);
          formData.append('mode', "email");
          formData.append('cityid', cityId);    
          formData.append('dob', dob);
          formData.append('gender',parentType);
          formData.append('resellerid', resellerid.toString());
          //If Image Uploaded - this patch will exicute
            if(this.uploadedImage){
             formData.append('file', this.uploadedImage, this.uploadedImage.name);
            }
        let options = new RequestOptions({ headers: headers });
        let loading = this.loadingCtrl.create({
        content: 'Registering...'   
         }); 
        loading.present(); 
           this.http.post("http://192.168.1.107:3000/parents" ,formData, options) 
          .subscribe(data => { 
            var response  = data.json(); 
              // var mesg = response['message']
                var mesg = "Kindly Visit Your Email , to Activate your Account!";
                let toast = this.toastCtrl.create({
                 message: mesg,
                 duration: 3000,
                 position: 'top'
               });   
               toast.present();
                if(response['success']===true){
                   this.navCtrl.setRoot(StartingScreenPage);
                 }
            loading.dismiss();    
            console.log("Response = " , response);  
           }, error => { 
           loading.dismiss();     
          console.log(error);// Error getting the data
          });

  }
}
  