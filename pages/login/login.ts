import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//import { Accueil } from '../accueil/accueil';
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
    
  }

  chargerUlisateurs(){
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Veuillez Patienter..."
    });
    loader.present();
    this.lookappsService.getUtilisateurs()
        .then(newFetched => {
          if(newFetched.length != 0){
              loader.dismiss();
              this.utilisateurs = newFetched;
              console.log(this.utilisateurs);

               //loader.present();
              let isLa = false;
              for(let i=0; i< this.utilisateurs.length; i++){
                if(this.utilisateurs[i].nom==this.email || this.utilisateurs[i].email==this.email || this.utilisateurs[i].prenom==this.email){
                  
                    if(this.utilisateurs[i].password==this.passwordCrypted){
                          //loader.dismiss();
                          this.lookappsService.setUtilisateurConnecter(this.utilisateurs[i]);
                          isLa=true;
                          this.navCtrl.setRoot(TabsPage,{
                            pseudo: this.email,
                            mdp: this.mdp
                          });
                    }
                    else if(this.utilisateurs[i].password!=this.passwordCrypted){
                          //loader.dismiss();
                          this.doAlert("Erreur", "Le mot de passe que vous aviez tapez est incorrect!!");
                          break;
                    }
                }
                else{
                    isLa = false;
                }
            }
            //loader.dismiss();
            if(isLa==false ){
                this.doAlert("Erreur", "Votre compte est introuvable nooo!!");
            }


          } 
          else{
            loader.dismiss();
              this.doAlert('Erreur', 'Nous sommes désolé car une erreur est survenue lors du chargement');
          }
         });
  }
/*
  
  appel(){
  let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Veuillez Patienter..."
  });

  loader.present();
    this.lookappsService.sha1(this.mdp)
    .then(newFetched => {
      if(newFetched.length != 0){
          loader.dismiss();
      } 
          this.passwordCrypted = newFetched.valeur; 
          console.log(this.passwordCrypted);
 
    });
  }

  testUser(): any{
    this.chargerUlisateurs();

    let retour = [false, false];
    for(let i=0; i< this.utilisateurs.length; i++){
        if(this.utilisateurs[i].nom==this.email || this.utilisateurs[i].email==this.email || this.utilisateurs[i].prenom==this.email){
            retour[0] = true;
            if(this.utilisateurs[i].password==this.passwordCrypted){
                  retour[1] = true;
                  this.lookappsService.setUtilisateurConnecter(this.utilisateurs[i]);
                  return retour;//testUser == vraie
            }
            else{
                  retour[1] = false;
                  return retour;
            }
        }
        else{
            retour[0] = false;
        }
    }
    return retour;
  }
  */
  presentLoading() {
    this.lookappsService.sha1(this.mdp)
    .then(newFetched => {
          this.passwordCrypted = newFetched.valeur; 
          console.log("votre password crypted ="+this.passwordCrypted);

    });
    this.chargerUlisateurs();
  }
   /* this.appel();

    let test2 =  this.testUser();
    console.log("test = "+test2);
    if(test2[0]==true){
        if(test2[1]==true){
        
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
    } */
 /* showAlertPseudo() {
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
  }*/
  recuperation(){
    /*let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
    });
    
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);*/

    this.navCtrl.push(Recuperation);
  }
  private doAlert(titre: string, message: string){
    let alert = this.alertCtrl.create({
        title: titre,
        message: message,
        buttons: ['OK']
    });

    alert.present();
  }
}
