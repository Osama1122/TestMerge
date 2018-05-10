import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//plugins
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
//pages
import { MainPage } from '../pages/main/main';
import { EWalletPage } from '../pages/e-wallet/e-wallet';
import { SearchPage } from '../pages/search/search';
import { SettingsPage, ApplicationSettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { StartingScreenPage } from '../pages/starting-screen/starting-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LanguageSelectionPage } from '../pages/language-selection/language-selection';
import { SavedLoginsUsersPage } from '../pages/saved-logins-users/saved-logins-users';
import { SavedIndividualLoginPage } from '../pages/saved-individual-login/saved-individual-login';
import { RegisterAsPage } from '../pages/register-as/register-as';
import { LoginPage } from '../pages/login/login';
import { StudentRegisterPage } from '../pages/student-register/student-register';
import { ParentRegisterPage } from '../pages/parent-register/parent-register';
import { TeacherRegisterPage } from '../pages/teacher-register/teacher-register';
import { RegisterSchoolPage } from '../pages/register-school/register-school';
import { SubjectSelectionPage } from '../pages/subject-selection/subject-selection';
import { UnitSelectionPage } from '../pages/unit-selection/unit-selection';
import { UnitDetailsPage } from '../pages/unit-details/unit-details';
import { PaymentPage } from '../pages/payment/payment';
import { SearchSubjectDetailPage, ModalContentPage } from '../pages/search-subject-detail/search-subject-detail';
import { PurchaseCreditPage } from '../pages/purchase-credit/purchase-credit';
import { ResallerSearchPage } from '../pages/resaller-search/resaller-search';
import { EwalletRechargeHistoryPage } from '../pages/ewallet-recharge-history/ewallet-recharge-history';
import { EwalletTransactionHistoryPage } from '../pages/ewallet-transaction-history/ewallet-transaction-history';
import { ResallerProfilePage } from '../pages/resaller-profile/resaller-profile';
import { ProfileSettingsPage } from '../pages/profile-settings/profile-settings';
import { ChildManagementPage } from '../pages/child-management/child-management';
import { SearchParentPage } from '../pages/search-parent/search-parent';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MainPage,
    SearchPage,
    EWalletPage,
    SettingsPage, 
    StartingScreenPage, LanguageSelectionPage, SavedLoginsUsersPage, SavedIndividualLoginPage, RegisterAsPage,
    LoginPage, StudentRegisterPage, ParentRegisterPage, TeacherRegisterPage, RegisterSchoolPage, ProgressBarComponent ,
    SubjectSelectionPage, UnitSelectionPage, UnitDetailsPage, PaymentPage, SearchSubjectDetailPage, 
    ModalContentPage, PurchaseCreditPage, ResallerSearchPage, EwalletRechargeHistoryPage, EwalletTransactionHistoryPage,
    ResallerProfilePage, ApplicationSettingsPage, ProfileSettingsPage, ChildManagementPage, SearchParentPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MainPage,
    SearchPage,
    EWalletPage,
    SettingsPage,
    StartingScreenPage, LanguageSelectionPage, SavedLoginsUsersPage, SavedIndividualLoginPage, RegisterAsPage,
    LoginPage, StudentRegisterPage, ParentRegisterPage, TeacherRegisterPage, RegisterSchoolPage,
    SubjectSelectionPage, UnitSelectionPage, UnitDetailsPage, PaymentPage, SearchSubjectDetailPage,
    ModalContentPage, PurchaseCreditPage, ResallerSearchPage, EwalletRechargeHistoryPage, EwalletTransactionHistoryPage,
    ResallerProfilePage, ApplicationSettingsPage, ProfileSettingsPage, ChildManagementPage, SearchParentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
