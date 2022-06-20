import { MapService } from './../map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public MapService: MapService) { }

  ngOnInit(): void {
    this.MapService.getCoords();
  }
}

