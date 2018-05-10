import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { SubjectSelectionPage } from '../subject-selection/subject-selection';

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
  classes = [
    {
      name: 'Play Group',
      image : 'class0.png'
    },
    {
      name: 'First Class',
      image : 'class1.png'
    },
    {
      name: 'Second Class',
      image : 'class2.png'
    },
    {
      name: 'Third Class',
      image : 'class3.png'
    },
    {
      name: 'Forth Class',
      image : 'class4.png'
    },
    {
      name: 'Fifth Class',
      image : 'class5.png'
    },
    {
      name: 'Sixth Class',
      image : 'class6.png'
    },
    {
      name: 'Seventh Class',
      image : 'class7.png'
    },
    {
      name: 'Eighth Class',
      image : 'class8.png'
    },
    {
      name: 'Ninth Class',
      image : 'class9.png'
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  subjectSelection(){
    this.navCtrl.push(SubjectSelectionPage);
  }
}
