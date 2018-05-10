import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams , Slides } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { UnitDetailsPage } from '../unit-details/unit-details';
import { ShareService } from '../services/share';
import { Http, Headers,RequestOptions , URLSearchParams , Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the UnitSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit-selection',
  templateUrl: 'unit-selection.html',
})
export class UnitSelectionPage implements OnInit {
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
  units = [
    {
      name: 'Unit 1',
      image : 'unit1.png'
    },
    {
      name: 'Unit 2',
      image : 'unit2.png'
    },
    {
      name: 'Unit 3',
      image : 'unit3.png'
    },
    {
      name: 'Unit 4',
      image : 'unit4.png'
    },
    {
      name: 'Unit 5',
      image : 'unit5.png'
    },
  ]

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

  public unit;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public shareService: ShareService  , public loadingCtrl: LoadingController , private http: Http) {
  var unitid = navParams.get('subjectid'); 
  this.getUnitsOfSubject(unitid);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitSelectionPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  unitdetails(){
    this.navCtrl.push(UnitDetailsPage);  
  }

    // GET UNITS OF SUBJECTS API - N O - 16 on D O C U M E N T A T I O N
  getUnitsOfSubject(id){
     var suuccessData = this.shareService.getSuccessData();
     var token = suuccessData['token'];
     var userId = suuccessData['userId'];
     let loading = this.loadingCtrl.create({
         content: 'Getting Units .. '
         });
     loading.present();
     var headers = new Headers(); 
     headers.append('Content-Type', 'application/json' );
     headers.append('x-access-token', token); 
     let options = new RequestOptions({ headers: headers} );
     this.http.get("http://192.168.1.107:3000/units/subject/"+id, options ) 
      .subscribe(data => {
        this.unit = data.json();
        loading.dismiss(); 
       }, error => {  
         loading.dismiss(); 
      console.log(error);// Error getting the data
    });

  }
}
