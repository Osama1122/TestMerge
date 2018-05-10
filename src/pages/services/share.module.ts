import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareService } from '../services/share';

@NgModule({
  declarations: [
    ShareService,
  ],
  imports: [
    IonicPageModule.forChild(ShareService),
  ],
})
export class ShareServiceModule {}
