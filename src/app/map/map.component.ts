import { MapService } from './../map.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: L.Map | undefined;

  constructor (public MapService : MapService) { }


  ngOnInit(): void {
    this.MapService.getCoordenadas();
  }
  /*ngAfterViewInit(): void {
    this.initMap();
  }
  private initMap(): void {
    this.map = L.map('map').setView([-23.2927,  -51.1732],15)
   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(this.map);
  }*/


}
