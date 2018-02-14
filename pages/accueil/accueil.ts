import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController, AlertController} from 'ionic-angular';
import{ MapPage } from '../map/map';

import { LookappsService } from '../../services/lookappsdb.service';

import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';

//import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { LookappsArticles } from '../../models/lookapp-articles.model';

@Component({
    selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {
  searchQuery: string = '';
  items: string[];
  
    pseudo: string;
    mdp: string;  
    
  
    articles: Array<LookappsArticles> = new Array<LookappsArticles>();
    
    constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,  public loadingCtrl: LoadingController, private lookappsService: LookappsService ) {
      
      this.init();
  
      this.initializeItems();  

      //this.utilisateur = this.lookappsService.getUtilisateurConnecter();

    }
    
    private doAlert(titre: string, message: string){
      let alert = this.alertCtrl.create({
          title: titre,
          message: message,
          buttons: ['OK']
      });

      alert.present();
    }

    init(){
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',  
        content: 'Veuillez patienter...'
      });
      loading.present();

        this.lookappsService.getAllArticles()
        .then(newFetched => {
            if(newFetched.length!=0){
              loading.dismiss();
            }
            else{
              this.doAlert('Erreur', 'Erreur lors du chargement des articles');
            }
            this.articles = newFetched;
            console.log(this.articles);
            
        });
    }

  initializeItems() {
  
      for (let i = 0; i < this.articles.length; i++) {
          this.items.push(this.articles[i].nom);
      }
    
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