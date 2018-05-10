import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitSelectionPage } from './unit-selection';

@NgModule({
  declarations: [
    UnitSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitSelectionPage),
  ],
})
export class UnitSelectionPageModule {}
