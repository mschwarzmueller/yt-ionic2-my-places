export class PlacesService {
  private places: {title: string}[] = [];

  addPlace(place: {title: string}) {
    this.places.push(place);
  }

  getPlaces() {
    return this.places.slice();
  }
}
