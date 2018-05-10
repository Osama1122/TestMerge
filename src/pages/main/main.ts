import { IonicPage, NavController, ToastController,NavParams , Slides} from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { SubjectSelectionPage } from '../subject-selection/subject-selection';
import { ShareService } from '../services/share';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Component, ViewChild, OnInit} from '@angular/core';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage implements OnInit {
    @ViewChild(Slides) slides: Slides; 

  onSlideTapped() {
    console.log(`Slide tapped: ${this.slides.clickedIndex}`);
  }

  ngOnInit(): void {
    this.slides.ionSlideProgress.subscribe(progress => this.onProgress(progress));
    this.slides.ionSlideTouchStart.subscribe(() => this.toggleTransitions(false));
    this.slides.ionSlideTouchEnd.subscribe(() => this.toggleTransitions(true));
  }
  
  toggleTransitions(enable: boolean): void {
    let count = this.slides._slides.length;
    for (let index = 0; index < count; index++) {
      this.slides._slides[index].style.transition = `transform ${this.slides.speed}ms`;
    }
  }

  onProgress(centerX: number): void {
    let maxScale = 2;
    let slideCount = this.slides._slides.length;
    let slideDelta = 1 / (slideCount - 1)
    let slope = (maxScale - 1) / slideDelta;
    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
      let slideX = slideIndex * slideDelta;
      let slideScale = 1;
      if (slideX > centerX - slideDelta) {
        if (slideX <= centerX) {
          slideScale += (slideX - (centerX - slideDelta)) * slope;
        } else if (slideX < centerX + slideDelta) {
          slideScale += ((centerX + slideDelta) - slideX) * slope;
        }
      }
      this.slides._slides[slideIndex].style.transform = `scale(${slideScale})`;
    }
  }
  
  //for date picker
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  myDate: String = new Date().toISOString();
//for progressbar
    //@Input('propertyName') myValue;
    //@Output() someEvent = new EventEmitter();

  //for class slider images
  most_watched = [
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
    {
      name: 'Maths-KG1',
      image : 'maths.png'
    },
  ]
  public serverUrl = "http://192.168.1.107:3000/";
  public classes;
  public name;
  public profilePic;
  public points;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService  , public loadingCtrl: LoadingController , private http: Http ,public toastCtrl: ToastController) {
   var suuccessData = this.shareService.getSuccessData();
   var userTypeId = suuccessData['usertype'];
   var token = suuccessData['token'];
   var languageId = suuccessData['languageId'];
   var userId = suuccessData['userId'];
   if(userTypeId==1){
   //Student
    console.log("S T U D E N T"); 
    this.getStudentProfile(userId);
   }
   else if(userTypeId ==2){   
    //Parent
    console.log("P A R E N T");
    this.getParentProfile(userId);
   }

   //Get Classes
   this.getGrades();
   }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
   ionViewDidEnter() {
      console.log('ionViewDidLoad MainPage');
      var suuccessData = this.shareService.getSuccessData();
      console.log("Token =", suuccessData);
      var profileData = this.shareService.getProfile(); 
      //get grades on enter 
       //this.getGrades();
      //get answers stats of user
     //  this.getAnswerStats();
       //Get Profile in Session Share service
           
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage); 
  }
  subjectSelection(obj){
    //Get Subjects of Class
    console.log(obj); 
    var gradeID = obj['gradeid'];
    this.navCtrl.push(SubjectSelectionPage , { gradeid : gradeID});
  } 

  getStudentProfile(id){
    let loading = this.loadingCtrl.create({
         content: 'Getting Profile Data .. '
         }); 
    loading.present();  
    this.http.get("http://192.168.1.107:3000/students/profile/"+id) 
      .subscribe(data => {
        var users = data.json();
        this.shareService.setProfile(users);
        this.name = users[0]['firstname'] +" "+users[0]['lastname'];
        this.profilePic = users[0]['image'];
        loading.dismiss(); 
       }, error => {  
         loading.dismiss(); 
      console.log(error);// Error getting the data
    });
  }

  getParentProfile(id){
    let loading = this.loadingCtrl.create({
         content: 'Getting Profile Data ..'
         });
    loading.present(); 
    this.http.get("http://192.168.1.107:3000/parent/profile/"+id) 
      .subscribe(data => { 
        var users = data.json(); 
        loading.dismiss(); 
       }, error => {  
         loading.dismiss(); 
      console.log(error);// Error getting the data
    });
  }

  /// GET CLASSES TO SELECT http://localhost:3000/grades    

  getGrades(){
      this.http.get("http://192.168.1.107:3000/grades") 
      .subscribe(data => {
        this.classes = data.json();
       }, error => {  
      console.log(error);// Error getting the data
    });
  }

  // GET ANSWERS STATS API - N O - 48 on D O C U M E N T A T I O N
  getAnswerStats(){
     var suuccessData = this.shareService.getSuccessData();
     var token = suuccessData['token'];
     var userId = suuccessData['userId'];
     let headers = new Headers;
      headers.append('Access-Control-Allow-Origin', '*' );
      headers.append('Accept', 'application/json');
      headers.append('x-access-token', token);
      let options = new RequestOptions({ headers: headers });
     this.http.get("http://192.168.1.107:3000/ExerciseResults/answeredStat/"+userId , options) 
      .subscribe(data => {
        var answerStats = data.json();
        var CorrectAnswers = answerStats['TotalResult']['Correct Answers'];
        var totalQuestions = answerStats['TotalResult']['Total Questions '];
        var WrongAnswers = answerStats['TotalResult']['Wrong Answers'];
        console.log("- A N S W E R S T A T S =" , CorrectAnswers , totalQuestions , WrongAnswers);
       }, error => {  
      console.log(error);// Error getting the data
    });
  }



     
}
