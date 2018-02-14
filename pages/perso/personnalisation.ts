import { Component } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
import { LookappsService } from '../../services/lookappsdb.service';
import { LookappsArticles } from '../../models/lookapp-articles.model';

@Component({
    selector: 'page-personnalisation',
    templateUrl: 'personnalisation.html'
})
export class Personnalisation {


    sexe: string;

    articles: Array<LookappsArticles> = new Array<LookappsArticles>();
    
    constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public lookappsService: LookappsService) {
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',  
            content: 'Veuillez patienter...'
        });

        loading.present();
        this.lookappsService.getArticlesByCategorie(2)  //vetement de haut
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
/*
        loading.present();
        this.lookappsService.getArticlesBySousCategorie(this.sexe)  //vetement de haut
        .then(newFetched => {
            if(newFetched.length!=0){
              loading.dismiss();
            }
            else{
              this.doAlert('Erreur', 'Erreur lors du chargement des articles');
            }
            this.articles = newFetched;
            console.log(this.articles);
            
        });*/
    }
  
    private doAlert(titre: string, message: string){
        let alert = this.alertCtrl.create({
            title: titre,
            message: message,
            buttons: ['OK']
        });
  
        alert.present();
    }
  
    presentLoading() {
        let loader = this.loadingCtrl.create({
        content: "Patienter s'il vous plaît...",
        duration: 3000
        });
        loader.present();
    }
}