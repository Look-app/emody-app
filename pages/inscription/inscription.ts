import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Login } from '../login/login';

import { LookappsService } from '../../services/lookappsdb.service';

//import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class Inscription {

  nom: string;
  prenom: string;
  
  jour: string;
  mois: string;
  annee: string;

  sexe: string;
  email: string;
  mdp1: string;
  mdp2: string;

  naissance: string;
  statusInscription: string ;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private lookappsService: LookappsService) {
   /* */
  }
  
  getDaty() {
     this.naissance = this.annee+ '-' + this.mois + '-' + this.jour;
  }
  getInscription(){
    this.getDaty();
    this.lookappsService.inscription(this.nom, this.prenom, this.naissance, this.sexe, this.email, this.mdp1)
    .then(newFetched => {
        this.statusInscription = newFetched;
        console.log(this.statusInscription);
        
    });
  }
  inscrire() {
  //this.getDaty();
  let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
    });
    
    if(this.mdp1 == this.mdp2){
          loader.present();

          this.getInscription();  //go inscription

          this.showAlertMdp();    //alert
          setTimeout(() => {
            loader.dismiss();
          }, 1000);

          this.navCtrl.push(Login);
    }else{
          this.showAlertMdp();
    }
   
  }
   

  showAlertMdp() {
    var titre = (this.mdp1!=this.mdp2) ? 'Mot de passe non identique!' : 'information :';
    var texte = (this.mdp1!=this.mdp2) ? 'Mot de passe non identique!' : 'Votre compte a été crée avec succées!';
   
    let alert = this.alertCtrl.create({
      title: titre,
      subTitle: texte,
      buttons: ['OK']
    });
    alert.present();
  }

}
