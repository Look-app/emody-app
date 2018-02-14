import { Component } from '@angular/core';
import { LoadingController, AlertController, RadioButton } from 'ionic-angular';
import { LookappsService } from '../../services/lookappsdb.service';
import { LookappsArticles } from '../../models/lookapp-articles.model';
import { LookappsUtilisateur } from '../../models/lookapp-utilisateur.model';

@Component({
    selector: 'page-personnalisation',
    templateUrl: 'personnalisation.html'
})
export class Personnalisation {
  
    sexe: string = '1';
    autoSexe: RadioButton;

    utilisateur: LookappsUtilisateur = new LookappsUtilisateur();

    articles: Array<LookappsArticles> = new Array<LookappsArticles>();
    articles2: Array<LookappsArticles> = new Array<LookappsArticles>();
    constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public lookappsService: LookappsService) {
        this.utilisateur = this.lookappsService.getUtilisateurConnecter();
        console.log("sexe ="+this.utilisateur.sexe+" est connecter !!!");
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',  
            content: 'Chargement...'
        });

        this.sexe = this.utilisateur.sexe;

        loading.present();
        this.lookappsService.getArticleByAll2(2 ,  this.sexe== "M" ? "Homme":"Femme" )  //vetement de haut
        .then(newFetched => {
            if(newFetched.length!=0){
                loading.dismiss();
                
                this.articles = newFetched;
                console.log(this.articles[0].image);
            }
            else{
                loading.dismiss();
                this.doAlert('Erreur', 'Erreur lors du chargement des articles');
            }
            
        });

        
        this.lookappsService.getArticleByAll2(3 , this.sexe)  //vetement de bas
        .then(newFetched => {
            this.articles2 = newFetched;
            console.log(this.articles2);
            
        });

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