import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Login } from '../login/login';
import { Inscription } from '../inscription/inscription';
/*import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';*/

import { LookappsService } from '../../services/lookappsdb.service';

import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';



/*import { Accueil } from '../accueil/accueil';
import { MapPage } from '../map/map';
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  utilisateurs: Array<LookappsUtilisateur> = new Array<LookappsUtilisateur>();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private lookappsService: LookappsService) {
      this.lookappsService.getUtilisateurs()
      .then(newFetched => {
          this.utilisateurs = newFetched;
          console.log(this.utilisateurs);
          
      });
  
  }

  login() {
    let loader = this.loadingCtrl.create({
        spinner: 'crescent',
        content: "Patienter s'il vous plaît..."
      });
      
        loader.present();

        setTimeout(() => {
          loader.dismiss();
        }, 500);

        this.navCtrl.push(Login);
    }
    inscription() {
      let loader = this.loadingCtrl.create({
          spinner: 'crescent',
          content: "Patienter s'il vous plaît..."
        });
        
          loader.present();
  
          setTimeout(() => {
            loader.dismiss();
          }, 1000);
  
          this.navCtrl.push(Inscription);
      }
    









      
  /*presentLoading() {
  let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
    });
    
    if(this.pseudo=='Angelo' && this.mdp=='azerty'){
        loader.present();

        setTimeout(() => {
          loader.dismiss();
        }, 2000);

        this.navCtrl.push(Accueil,{
          pseudo: this.pseudo,
          mdp: this.mdp
        });

    }
    else{
      this.showAlert();
    }
  }
   
  goMapLoading() {
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Tentative de connexion..."
    });
    
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000);
    this.navCtrl.push(MapPage);
  
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erreur de connexion',
      subTitle: 'Veuillez-vous connecter s\'il vous plaît !',
      buttons: ['OK']
    });
    alert.present();
  }*/

}
