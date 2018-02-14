import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ProfilPage } from '../ptofil/profil';
import { Accueil } from '../accueil/accueil';
import { MapPage } from '../map/map';
import { Personnalisation } from '../perso/personnalisation';
import { ProfilePage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Accueil;
  tab2Root = Personnalisation;
  tab3Root = MapPage;
  tab4Root = ProfilePage;
  //tab3Root = ContactPage;

  constructor() {

  }
}