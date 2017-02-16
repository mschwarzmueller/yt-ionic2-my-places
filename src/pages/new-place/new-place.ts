import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Geolocation } from 'ionic-native';

import { PlacesService } from "../../services/places.service";

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(private placesService: PlacesService, private navCtrl: NavController) {}

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace({title: value.title, location: this.location});
    this.navCtrl.pop();
  }

  onLocateUser() {
    Geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully');
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
        }
      )
      .catch(
        (error) => console.log('An error occurred')
      );
  }

}
