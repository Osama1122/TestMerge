import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherRegisterPage } from './teacher-register';

@NgModule({
  declarations: [
    TeacherRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherRegisterPage),
  ],
})
export class TeacherRegisterPageModule {}
