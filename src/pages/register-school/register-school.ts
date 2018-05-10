import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentRegisterPage } from '../student-register/student-register';

/**
 * Generated class for the RegisterSchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-school',
  templateUrl: 'register-school.html',
})
export class RegisterSchoolPage {
 public cities;
 public city;
 public cityId;
 public countries;
 public country;
 private myForm : FormGroup;    
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http , public loadingCtrl: LoadingController  , private formBuilder: FormBuilder ,public toastCtrl: ToastController) {
   this.myForm = this.formBuilder.group({
      schoolname:  ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      address:  ['', Validators.required],
    });  
  } 
    
  ionViewDidLoad() {   
    console.log('ionViewDidLoad RegisterSchoolPage');
  }

  ionViewDidEnter() {
  this.getCountries();
  }

  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);  
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


  // GET COUNTRY ID SELECTED AND POPULATE CITIES OF IT
  getCountry(){
  var selectedCountry = this.country;
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

  getCity(){
    var SelectedCity = this.city;
    this.cityId = SelectedCity['cityid'];
    var cityName = SelectedCity['fullname']; 
  }

  RegisterSchool(){ 
     var schoolname=this.myForm.get('schoolname').value;
     var address=this.myForm.get('address').value;
     let payload = {"fullname" : schoolname , "cityid" :  this.cityId  , "address" : address , "lat": 0.000000 , "lng" : 0.00000}
     this.http.post("http://192.168.1.107:3000/schools/addschool" , payload) 
          .subscribe(data => {   
            var response  = data.json();
               var mesg = response['message']
                let toast = this.toastCtrl.create({
                 message: mesg,
                 duration: 3000,
                 position: 'top'
               });   
               toast.present();
               if(response['success']===true){
                //GET BACK TO REGISTRATION PAGE , WHEN SCHOOL ADDED
                 this.navCtrl.popTo(this.navCtrl.getByIndex(2));
               }
               console.log("Response = " , response);  
           }, error => {     
          console.log(error);// Error getting the data
        });  

  }

}
