import { Component } from '@angular/core';

import { MainPage } from '../main/main';
import { EWalletPage } from '../e-wallet/e-wallet';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = SearchPage;
  tab3Root = EWalletPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
