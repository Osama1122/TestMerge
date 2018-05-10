import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectSelectionPage } from './subject-selection';

@NgModule({
  declarations: [
    SubjectSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectSelectionPage),
  ],
})
export class SubjectSelectionPageModule {}
