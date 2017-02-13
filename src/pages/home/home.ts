import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../services/places.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public navCtrl: NavController, private placesService: PlacesService) {

  }

  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

}
