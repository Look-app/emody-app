import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-recuperationForm',
  templateUrl: 'recuperationForm.html'
})
export class RecuperationForm {

  email: string;
  mdp1: string;
  mdp2: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
      console.log('votre email:'+this.email);
  }
  
      
  valider() {
    let loader = this.loadingCtrl.create({
        spinner: 'crescent',
        content: "Patienter s'il vous plaît..."
      });
      
      if(this.mdp1 == this.mdp2){
            loader.present();
  
            this.showAlertMdp();
            setTimeout(() => {
              loader.dismiss();
            }, 1000);
  
            //this.navCtrl.push(Login);
      }else{
            this.showAlertMdp();
      }
     
    }
    showAlertMdp() {
      var titre = (this.mdp1!=this.mdp2) ? 'Mot de passe non identique!' : 'Réinitialisation :';
      var texte = (this.mdp1!=this.mdp2) ? 'Mot de passe ne sont pas identique!' : 'Votre mot de passe a été renouveler avec succés!';
     
      let alert = this.alertCtrl.create({
        title: titre,
        subTitle: texte,
        buttons: ['OK']
      });
      alert.present();
    }
  
}
