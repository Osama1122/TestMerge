import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentRegisterPage } from '../student-register/student-register';
import { ParentRegisterPage } from '../parent-register/parent-register';
import { TeacherRegisterPage } from '../teacher-register/teacher-register';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';

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
  public firstTwoUsers =[];
  public userType =[];
  public buttonText;
  public languageId;
  constructor(public navCtrl: NavController, public navParams: NavParams , private http: Http , public loadingCtrl: LoadingController) {
  this.languageId = navParams.get('lang'); 
  this.buttonText = "Select One";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAsPage');
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter RegisterAsPage');
    this.getUserTypes();
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

  Register(user){
    this.userType = [];
    this.userType.push(user);
    this.buttonText = "Register As " + user['description'];

  } 

  Next(){
      if(this.userType.length !=0){
          if(this.userType[0]['description']=='Student'){
              this.navCtrl.push(StudentRegisterPage , { langId : this.languageId });
          }
          else if (this.userType[0]['description']=='Parent'){
          this.navCtrl.push(ParentRegisterPage , { langId : this.languageId });
          } 
      }
      else {
        this.buttonText = "Please Select One";

      }
  }
 

  getUserTypes(){
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
     });
    loading.present();
      this.http.get("http://192.168.1.107:3000/usertypes")
      .subscribe(data => {
        var userTypesList = data.json();
        this.firstTwoUsers =[];
        //Picking Only Two USers Student / Teacher For Phase-1 Development 
        this.firstTwoUsers.push(userTypesList[0]);
        this.firstTwoUsers.push(userTypesList[1]);
        console.log(this.firstTwoUsers); 
        loading.dismiss();
       }, error => { 
       loading.dismiss();   
      console.log(error);// Error getting the data
      });
  }

}
