import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResallerSearchPage } from './resaller-search';

@NgModule({
  declarations: [
    ResallerSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ResallerSearchPage),
  ],
})
export class ResallerSearchPageModule {}
