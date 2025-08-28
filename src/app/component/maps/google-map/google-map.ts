import { CommonModule } from "@angular/common";
import { Component, viewChild } from "@angular/core";
import { GoogleMap, GoogleMapsModule, MapMarker } from "@angular/google-maps";

interface Marker {
  position: google.maps.LatLngLiteral;
  label?: google.maps.MarkerLabel;
  Option?: google.maps.MarkerOptions;
  info?: string;
  title?: string;
}
@Component({
  selector: "app-google-map",
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: "./google-map.html",
  styleUrl: "./google-map.scss",
})
export class GoogleMaps {
  public markers: Marker[];
  public markers1: Marker[] = [];
  public zoom: number;

  constructor() {
    this.markers = [];
    this.zoom = 2;
  }

  ngOnInit() {
    const bangalore = { lat: 12.97, lng: 77.59 };
    this.markers1.push({
      position: {
        lat: 12.97,
        lng: 77.59,
      },
      label: {
        color: "red",
        text: "Arial",
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
    });

    new google.maps.Map(document.getElementById("map") as HTMLElement, {
      zoom: 12,
      center: bangalore,
    });

    this.markers.push({
      position: {
        lat: 35.717,
        lng: 139.731,
      },
      label: {
        color: "black",
        text: "Madrid",
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
    });

    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233,
      },
      label: {
        color: "black",
        text: "Paris",
      },
    });
  }

  //Street View
  readonly map = viewChild.required(GoogleMap);

  ngAfterViewInit() {
    const streetView = this.map().getStreetView();

    streetView.setOptions({
      position: { lat: 38.9938386, lng: -77.2515373 },
      pov: { heading: 70, pitch: -10 },
    });

    streetView.setVisible(true);
    this.getBounds(this.markers);
  }

  marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  marker2 = { position: { lat: 39.7, lng: -76.0 } };
  marker3 = { position: { lat: 37.9, lng: -76.8 } };
  markers5 = [this.marker1, this.marker2, this.marker3];

  getBounds(markers: Marker[]) {
    let north;
    let south;
    let east;
    let west;

    for (const marker of markers) {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north =
        north !== undefined
          ? Math.max(north, marker.position.lat)
          : marker.position.lat;
      south =
        south !== undefined
          ? Math.min(south, marker.position.lat)
          : marker.position.lat;
      east =
        east !== undefined
          ? Math.max(east, marker.position.lng)
          : marker.position.lng;
      west =
        west !== undefined
          ? Math.min(west, marker.position.lng)
          : marker.position.lng;
    }

    const bounds = { north, south, east, west };

    return bounds;
  }

  openInfo(_marker: MapMarker, _info?: string) {}
}
