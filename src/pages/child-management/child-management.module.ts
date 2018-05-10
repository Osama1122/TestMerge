import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildManagementPage } from './child-management';

@NgModule({
  declarations: [
    ChildManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildManagementPage),
  ],
})
export class ChildManagementPageModule {}
