import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchParentPage } from './search-parent';

@NgModule({
  declarations: [
    SearchParentPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchParentPage),
  ],
})
export class SearchParentPageModule {}
