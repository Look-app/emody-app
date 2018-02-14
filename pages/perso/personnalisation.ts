import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-personnalisation',
    templateUrl: 'personnalisation.html'
})
export class Personnalisation {
    constructor(public loadingCtrl: LoadingController) {
  
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
        content: "Patienter s'il vous plaît...",
        duration: 3000
        });
        loader.present();
    }
}