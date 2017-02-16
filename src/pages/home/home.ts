import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../services/places.service";
import { PlacePage } from '../place/place';
import { Place } from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place) {
    this.modalCtrl.create(PlacePage, place).present();
  }

}
