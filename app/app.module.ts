import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Mes pages
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { Loading } from '../pages/loading/loading';
import { Accueil } from '../pages/accueil/accueil';
import { Login } from '../pages/login/login';
import { Inscription } from '../pages/inscription/inscription';
import { Recuperation } from '../pages/recuperation/recuperation';
import { RecuperationForm } from '../pages/recuperationForm/recuperationForm';
import { TabsPage } from '../pages/tabs/tabs';
import { Personnalisation } from '../pages/perso/personnalisation';


import { LookappsService } from '../services/lookappsdb.service';
import { HttpModule } from '@angular/http';
import { ProfilePage } from '../pages/profil/profil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    Loading,
    Accueil,
    Login,
    Inscription,
    Recuperation,
    RecuperationForm,
    TabsPage,
    Personnalisation,
    ProfilePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    Loading,
    Accueil,
    Login,
    Inscription,
    Recuperation,
    RecuperationForm,
    TabsPage,
    Personnalisation,
    ProfilePage
  ],
  providers: [
    LookappsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
