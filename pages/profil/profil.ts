import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LookappsService } from '../../services/lookappsdb.service';
import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profil.html',
})
export class ProfilePage {

    posts = [];
    imageUrl: string = 'assets/imgs/profile/profile.jpg';
    email: string ;
    mdp: string;
  
    utilisateur: LookappsUtilisateur = new LookappsUtilisateur();

    constructor(public navCtrl: NavController, public navParams: NavParams, public lookappsService: LookappsService) {
      this.email = this.navParams.get('pseudo');
      this.mdp = this.navParams.get('mdp');
      this.utilisateur = this.lookappsService.getUtilisateurConnecter();
        
    }

}