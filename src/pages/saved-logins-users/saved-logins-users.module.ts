import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedLoginsUsersPage } from './saved-logins-users';

@NgModule({
  declarations: [
    SavedLoginsUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedLoginsUsersPage),
  ],
})
export class SavedLoginsUsersPageModule {}
