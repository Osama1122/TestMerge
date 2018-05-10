import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EwalletTransactionHistoryPage } from './ewallet-transaction-history';

@NgModule({
  declarations: [
    EwalletTransactionHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(EwalletTransactionHistoryPage),
  ],
})
export class EwalletTransactionHistoryPageModule {}
