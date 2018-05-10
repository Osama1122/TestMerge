import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResallerProfilePage } from './resaller-profile';

@NgModule({
  declarations: [
    ResallerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ResallerProfilePage),
  ],
})
export class ResallerProfilePageModule {}
