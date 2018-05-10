import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedIndividualLoginPage } from './saved-individual-login';

@NgModule({
  declarations: [
    SavedIndividualLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedIndividualLoginPage),
  ],
})
export class SavedIndividualLoginPageModule {}
