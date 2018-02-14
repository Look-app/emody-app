import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as TreeMapping from '../../models/tree.mapping';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  private trees: TreeMapping.TreeMap[];


  latitude: string = "-18.9065";
  longitude: string = "47.5269";
  constructor(public navCtrl: NavController) {
    
      //Data
      this.trees = TreeMapping.TreeMappingMock;
      console.log(this.trees.length);
      console.log(this.trees);
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  }
 
}