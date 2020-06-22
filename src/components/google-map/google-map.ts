import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  google;
  @ViewChild("map") mapElement;
  map: any;
  constructor() {

  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {

    let coords = new google.maps.LatLng(45, 100);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  }
}
