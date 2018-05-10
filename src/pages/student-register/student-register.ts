import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { RegisterSchoolPage } from '../register-school/register-school';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StartingScreenPage } from '../starting-screen/starting-screen';
import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { LoginPage } from '../login/login';

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
  public profilePhoto;
  public cities =[];
  public schools =[];  
  public grades =[];
  public gender;
  public deviceUniqueID;     
  cityObject:any;
  schoolObject:any;
  gradeObject:any;
  uploadedImage:any;
  private myForm : FormGroup; 
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'  
  }
  public languageId  ;
  constructor(private device: Device , public plt: Platform , public navCtrl: NavController, public navParams: NavParams , private http: Http , public loadingCtrl: LoadingController  , private formBuilder: FormBuilder ,public toastCtrl: ToastController) {
   this.languageId = navParams.get('langId'); 
    this.profilePhoto = "assets/imgs/boy.png";
    this.myForm = this.formBuilder.group({
      Image: [Validators.required],  
      fname:  ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      lname:  ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      usr: ['', Validators.required], 
      mobile: ['', Validators.required],
      email: ['', Validators.required],  
      dob: ['', Validators.required],  
      pass: ['', Validators.required],     
      city: [''],       
      school: [''],       
    });  
    this.getCities();    
    this.getGrades();         
  }     

  ionViewDidLoad() {   
    console.log('ionViewDidLoad StudentRegisterPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter RegisterAsPage');
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

  getGender(){
    var genderSelected = this.gender;
  } 

  registerSchool(){  
    this.navCtrl.push(RegisterSchoolPage);
  }

  mainPageJump(){ 
    this.navCtrl.setRoot(LoginPage);   
  }

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

   //GET LIST OF CITIES 
   getCities(){
      this.http.get("http://192.168.1.107:3000/cities")
      .subscribe(data => {
        this.cities = data.json(); 
        console.log("Cities : " , this.cities); 
       }, error => {   
      console.log(error);// Error getting the data
      });
  }

   //GET LIST OF SCHOOLS On Selected City
    getSchoolsofCities(){     
    var SelectedCity = this.cityObject;
    console.log(SelectedCity['fullname']);  
    var cityId = SelectedCity['cityid'];
     this.http.get("http://192.168.1.107:3000/schools/city/"+cityId) 
      .subscribe(data => {
        this.schools = data.json(); 
        console.log("Schools in "+SelectedCity['fullname']+" are  : " , this.schools); 
       }, error => {   
      console.log(error);// Error getting the data
      });
     }

  // GET GRADES LIST FOR STUDENT
   getGrades(){
      this.http.get("http://192.168.1.107:3000/grades") 
      .subscribe(data => { 
        this.grades = data.json(); 
        console.log("Grades List" , this.grades);  
       }, error => {   
      console.log(error);// Error getting the data
      });
   } 

   getSchooldetail(){
   
     var selectdSchool = this.schoolObject;
    var schoolId = selectdSchool['schoolid'];
   }

   // REGISTER STUDENT METHOD

   Register(){     
    
        var fname=this.myForm.get('fname').value;
        var lname=this.myForm.get('lname').value;
        var usr=this.myForm.get('usr').value;
        var mobile=this.myForm.get('mobile').value;
        var email=this.myForm.get('email').value;
        var dob= this.myForm.get('dob').value;
        var pass= this.myForm.get('pass').value;
        var SelectedCity = this.cityObject;
        var cityId = SelectedCity['cityid'];
        var selectdSchool = this.schoolObject; 
        var schoolId = selectdSchool['schoolid'];
        var selectedGrade = this.gradeObject;   
        var gradeId = selectedGrade['gradeid']; 
        var languageid = 1;
        var gender = this.gender;
        var usertypeid = 1; //Student
        var deviceid = 101010;
        if(this.deviceUniqueID){
           let deviceid : number = this.deviceUniqueID;
        }
        var parentuserid = 1;
        var teacheruserid = 1;
        var resellerid = 1;
        //Now set headers / Form Data for Image Upload of User
          let formData = new FormData();
          let headers = new Headers;
          headers.append('Access-Control-Allow-Origin', '*' );
          headers.append('enctype', 'multipart/form-data');  
          headers.append('Accept', 'application/json');
          formData.append('mobileno', mobile);  
          formData.append('email', email);  
          formData.append('username', usr);
          formData.append('usertypeid', usertypeid.toString());
          formData.append('password', pass);
          formData.append('languageid', languageid.toString());
          formData.append('deviceid', deviceid.toString());
          formData.append('firstname', fname);
          formData.append('lastname', lname);
          formData.append('mode', "email");
          formData.append('cityid', cityId);    
          formData.append('dob', dob);
          formData.append('gender',gender);
          formData.append('schoolid', schoolId);
          formData.append('parentuserid', parentuserid.toString());
          formData.append('teacheruserid', teacheruserid.toString());
          formData.append('resellerid', resellerid.toString());
          //If Image Uploaded - this patch will exicute
          if(this.uploadedImage){
           formData.append('file', this.uploadedImage, this.uploadedImage.name);
          }
          let options = new RequestOptions({ headers: headers });
        let loading = this.loadingCtrl.create({
        content: 'Please wait...'   
         }); 
        loading.present();  
        this.http.post("http://192.168.1.107:3000/students" ,formData, options) 
          .subscribe(data => { 
            var response  = data.json();
              // var mesg = response['message']
               var mesg = "Please Visit Your Email For Verification Of Account";
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
     