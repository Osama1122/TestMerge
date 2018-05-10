import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguageSelectionPage } from './language-selection';

@NgModule({
  declarations: [
    LanguageSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LanguageSelectionPage),
  ],
})
export class LanguageSelectionPageModule {}
