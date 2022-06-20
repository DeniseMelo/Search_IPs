
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { icon } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  baseUrl = 'https://geo.ipify.org/api/v1';
  API = "at_X9OQXshEMaRGiHQT74sjM7WumCGYi";
  ipAddress: string | undefined;
  coordLon: any;
  coordLat: any;
  response = false;

  constructor(private http: HttpClient) { }

  searchValue(search: string) {
    this.ipAddress = search;
    this.getCity();
  }

  getCity() {
    return this.http.get(`${this.baseUrl}?apiKey=${this.API}&ipAddress=${this.ipAddress}`)
  }

  getCoords() {
    var map = L.map('map', { center: [this.coordLat, this.coordLon], zoom: 13 });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([this.coordLat, this.coordLon], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).addTo(map)
  }


}
