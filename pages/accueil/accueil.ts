import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController} from 'ionic-angular';
import{ MapPage } from '../map/map';

import { LookappsService } from '../../services/lookappsdb.service';

import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';

//import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {
  searchQuery: string = '';
  items: string[];
  
    pseudo: string;
    mdp: string;  
    
    utilisateurs: Array<LookappsUtilisateur> = new Array<LookappsUtilisateur>();
    
    
    constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private lookappsService: LookappsService ) {
      this.initializeItems();  
      this.pseudo = this.navParams.get('pseudo');
        this.mdp = this.navParams.get('mdp');
        console.log(this.pseudo);
        console.log(this.mdp);

        this.lookappsService.getUtilisateurs()
        .then(newFetched => {
            this.utilisateurs = newFetched;
            console.log(this.utilisateurs);
            
        });
    }

    voirMap() {
        let loader = this.loadingCtrl.create({
          spinner: 'crescent',
          content: "Tentative de connexion..."
        });
        
        loader.present();
    
        setTimeout(() => {
          loader.dismiss();
        }, 1000);
        this.navCtrl.push(MapPage);
      
      }
      quitter() {
      
        this.navCtrl.setRoot(HomePage);
      
      }
    

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'gogogo',
      'tygha',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
    
}