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
      /*let loading = this.loadingCtrl.create({
        spinner: 'crescent',  
          content: 'Veuillez patienter...'
      });
    
      loading.present();
      this.lookappsService.getUtilisateurs()
      .then(newFetched => {
        if(newFetched.length!=0){
            loading.dismiss();
        }
        this.utilisateurs = newFetched;
        console.log(this.utilisateurs);
          
      });
  */
    }

  login() {

        this.navCtrl.push(Login);
    }
    inscription() {
     /* let loader = this.loadingCtrl.create({
          spinner: 'crescent',
          content: "Patienter s'il vous plaît..."
        });
        
          loader.present();
  
          setTimeout(() => {
            loader.dismiss();
          }, 1000);*/
  
          this.navCtrl.push(Inscription);
      }
    


}
