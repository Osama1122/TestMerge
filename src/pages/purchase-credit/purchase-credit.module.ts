import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseCreditPage } from './purchase-credit';

@NgModule({
  declarations: [
    PurchaseCreditPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseCreditPage),
  ],
})
export class PurchaseCreditPageModule {}
