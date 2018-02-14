import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { RecuperationForm } from '../recuperationForm/recuperationForm';


@Component({
  selector: 'page-recuperation',
  templateUrl: 'recuperation.html'
})
export class Recuperation {

  email: string;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {

  }
  
  
  valider() {
  let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Patienter s'il vous plaît..."
    });
      
      loader.present();

      setTimeout(() => {
        loader.dismiss();
      }, 2000);

      this.navCtrl.push(RecuperationForm,{
        email: this.email
      });
    
      this.showAlertPseudo();
      
    
  }
   
  showAlertPseudo() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'Un code d\'activation a été envoyé à votre email!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Veuillez recopiez ci-dessous le code de reinitialisation qui vous a été envoyé !",
      inputs: [
        {
          name: 'Code',
          placeholder: 'Code'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(RecuperationForm,{
                email: this.email
            });
          
          }
          
        }
      ]
    });
    prompt.present();
  }

}
