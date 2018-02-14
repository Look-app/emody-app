import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Accueil } from '../accueil/accueil';
import { Recuperation } from '../recuperation/recuperation';

import { LookappsService } from '../../services/lookappsdb.service';

import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';
import { TabsPage } from '../tabs/tabs';
//import { JsonPassword } from '../../models/lookapp-json';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  email: string;
  mdp: string;

 // passwordCrypted: JsonPassword = new JsonPassword();   //mot de passe en JSON
  passwordCrypted: string;
  utilisateurs: Array<LookappsUtilisateur> = new Array<LookappsUtilisateur>();

  test: string[];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public lookappsService: LookappsService) {
      this.lookappsService.getUtilisateurs()
      .then(newFetched => {
          this.utilisateurs = newFetched;
          console.log(this.utilisateurs);
          
      });

    
  }
  appel(){
  let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
  });

  loader.present();
    this.lookappsService.sha1(this.mdp)
    .then(newFetched => {
      if(newFetched.valeur != null){
          loader.dismiss();
          //this.showAlertMdp(); 
          this.passwordCrypted = newFetched.valeur; 
        console.log(this.passwordCrypted);
      } 
     
        //console.log(this.passwordCrypted.valeur);
       // this.test = this.testUser(); 
       // console.log("test =");
         
    });
  }

  testUser(): any{
    
    let retour = [false, false];
    for(let i=0; i< this.utilisateurs.length; i++){
        if(this.utilisateurs[i].nom==this.email || this.utilisateurs[i].email==this.email || this.utilisateurs[i].prenom==this.email){
            retour[0] = true;
            
        //    console.log(this.utilisateurs[i].nom+" == "+this.email);
          //  console.log(this.utilisateurs[i].password+" == "+this.passwordCrypted);
         

          if(this.utilisateurs[i].password==this.passwordCrypted){
                retour[1] = true;
                return retour;//testUser == vraie
              }
          else{
                retour[1] = false;
                break;
              }
        }
        else{
            retour[0] = false;
        }
    }
    return retour;
  }
  
  presentLoading() {
  /*let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
  });

  loader.present();*/

    //console.log("MDP MDP = "+this.mdp);
    this.appel();
    let test2 =  this.testUser();
    console.log("test = "+test2);
    if(test2[0]==true){
        if(test2[1]==true){
            

     /*   setTimeout(() => {
          loader.dismiss();
        }, 3000);*/
        
        this.navCtrl.setRoot(TabsPage,{
          pseudo: this.email,
          mdp: this.mdp
        });

        }else if(test2[1]!=true){
          this.showAlertMdp();
        }

    }
    else{
      this.showAlertPseudo();
    }
  }
   
  showAlertPseudo() {
    let alert = this.alertCtrl.create({
      title: 'Erreur de connexion',
      subTitle: 'Identifiant incorrect !',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertMdp() {
    let alert = this.alertCtrl.create({
      title: 'Erreur de connexion',
      subTitle: 'Mot de passe incorrect !',
      buttons: ['OK']
    });
    alert.present();
  }
  recuperation(){
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
    });
    
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);

    this.navCtrl.push(Recuperation);
  }
}
