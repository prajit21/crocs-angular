import { Component } from "@angular/core";

import { LeafletModule } from "@bluehalo/ngx-leaflet";
import * as L from "leaflet";

import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-user-by-country",
  imports: [LeafletModule, ClickOutsideDirective],
  templateUrl: "./user-by-country.html",
  styleUrl: "./user-by-country.scss",
})
export class UserByCountry {
  public isOpen: boolean = false;

  map: L.Map;
  json!: GeoJSON.GeoJsonObject;
  options3 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "",
      }),
    ],
    zoom: 7,
    center: L.latLng(47.482023, -1),
  };

  // //Forth map
  map4!: L.Map;
  homeCoords = {
    lat: 23.810331,
    lon: 90.412521,
  };

  popupText = "Some popup text";

  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "assets/images/marker-icon.png",
      shadowUrl: "assets/images/marker-shadow.png",
    }),
  };
}
