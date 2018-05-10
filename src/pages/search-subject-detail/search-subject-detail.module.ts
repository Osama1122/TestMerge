import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSubjectDetailPage } from './search-subject-detail';

@NgModule({
  declarations: [
    SearchSubjectDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSubjectDetailPage),
  ],
})
export class SearchSubjectDetailPageModule {}
