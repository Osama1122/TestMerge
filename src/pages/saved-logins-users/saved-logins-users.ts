import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SavedIndividualLoginPage } from '../saved-individual-login/saved-individual-login';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SavedLoginsUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-logins-users',
  templateUrl: 'saved-logins-users.html',
})
export class SavedLoginsUsersPage implements OnInit  {
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

  images = [
    {
      name: 'Ahmed',
      image : 'ahmed.png'
    },
    {
      name: 'Ali',
      image : 'ali.png'
    },
    {
      name: 'Waqas',
      image : 'waqas.png'
    },
    {
      name: 'Asad',
      image : 'naughty-boy.jpg'
    },
    {
      name: 'Hina',
      image : 'write-number.jpg'
    },
  ]
constructor(public navCtrl: NavController, public navParams: NavParams) {

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedLoginsUsersPage');
  }

  savedIndividualUser(){
    this.navCtrl.push(SavedIndividualLoginPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  mainPageJump(){
    this.navCtrl.setRoot(TabsPage);
  }
}
