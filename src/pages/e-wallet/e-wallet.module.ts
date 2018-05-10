import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EWalletPage } from './e-wallet';

@NgModule({
  declarations: [
    EWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(EWalletPage),
  ],
})
export class EWalletPageModule {}
