import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SavedLoginsUsersPage } from '../saved-logins-users/saved-logins-users';
import { UnitSelectionPage } from '../unit-selection/unit-selection';

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
  subjects = [
    {
      name: 'Chemistry',
      image : 'chemistry.png'
    },
    {
      name: 'Mathematics',
      image : 'maths.png'
    },
    {
      name: 'Drawing',
      image : 'drawing.png'
    },
    {
      name: 'Biology',
      image : 'bio.png'
    },
    {
      name: 'English',
      image : 'eng.png'
    },
    {
      name: 'Geography',
      image : 'geography.png'
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
    console.log('ionViewDidLoad SubjectSelectionPage');
  }
  savedUserLogins(){
    this.navCtrl.setRoot(SavedLoginsUsersPage);
  }
  unitSelection(){
    this.navCtrl.push(UnitSelectionPage);
  }
}
