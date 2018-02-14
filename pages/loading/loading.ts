import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class Loading {
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