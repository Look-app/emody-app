import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    nom: string;
  
    constructor(public navCtrl: NavController) {
       
    }

}