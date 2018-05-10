import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentRegisterPage } from './parent-register';

@NgModule({
  declarations: [
    ParentRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentRegisterPage),
  ],
})
export class ParentRegisterPageModule {}
