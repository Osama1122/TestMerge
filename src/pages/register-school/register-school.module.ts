import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterSchoolPage } from './register-school';

@NgModule({
  declarations: [
    RegisterSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterSchoolPage),
  ],
})
export class RegisterSchoolPageModule {}
