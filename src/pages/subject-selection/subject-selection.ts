import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams ,Slides } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { UnitSelectionPage } from '../unit-selection/unit-selection';
import { ShareService } from '../services/share';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the SubjectSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-selection',
  templateUrl: 'subject-selection.html',
})
export class SubjectSelectionPage implements OnInit {
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
  // most_watched = [
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  //   {
  //     name: 'Maths-KG1',
  //     image : 'maths.png'
  //   },
  // ]
  public serverUrl = "http://192.168.1.107:3000/"; 
  public subjects;
  public name;
  public profilePic;  
  constructor(public navCtrl: NavController, public navParams: NavParams ,public shareService: ShareService  , public loadingCtrl: LoadingController , private http: Http ,public toastCtrl: ToastController) {
  var gradeid = navParams.get('gradeid'); 
  this.getSubjectsOfGrades(gradeid);
  var profileData = this.shareService.getProfile();
  this.name = profileData[0]['firstname'] +" "+profileData[0]['lastname']; 
  this.profilePic = profileData[0]['image']; 
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectSelectionPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  unitSelection(obj){ 
    //Get Unit of Class
    console.log(obj);  
    var subjectid = obj['subjectid'];
    this.navCtrl.push(UnitSelectionPage , { subjectid : subjectid}); 
  }

  // GET SUBJECTS OF GRADES API - N O - 14 on D O C U M E N T A T I O N 
  getSubjectsOfGrades(id){
     var suuccessData = this.shareService.getSuccessData();  
     var token = suuccessData['token'];
     var userId = suuccessData['userId'];
     let loading = this.loadingCtrl.create({
         content: 'Getting Subjects .. '
         });  
     loading.present();
     // let headers = new Headers;
     // headers.append('Accept', 'application/json');
     // let options = new RequestOptions({ headers: headers });
     var headers = new Headers(); 
     headers.append('Content-Type', 'application/json' );
     headers.append('x-access-token', token); 
     let options = new RequestOptions({ headers: headers} );
     this.http.get("http://192.168.1.107:3000/subjects/grade/"+id, options ) 
      .subscribe(data => {
        this.subjects = data.json();
        loading.dismiss(); 
       }, error => {  
         loading.dismiss(); 
      console.log(error);// Error getting the data
    });

  }
}
