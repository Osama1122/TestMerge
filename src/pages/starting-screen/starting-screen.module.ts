import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartingScreenPage } from './starting-screen';

@NgModule({
  declarations: [
    StartingScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(StartingScreenPage),
  ],
})
export class StartingScreenPageModule {}
