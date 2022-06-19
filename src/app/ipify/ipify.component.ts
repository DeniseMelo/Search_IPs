import { MapService } from './../map.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ipify',
  templateUrl: './ipify.component.html',
  styleUrls: ['./ipify.component.css']
})
export class IpifyComponent implements OnInit {

  response: any;
  name: string | undefined;
  lat: string | undefined;
  lng: string | undefined;
  search: any;

  constructor(
    private fb: FormBuilder,
    public MapService: MapService,
    ) { }

  ngOnInit(): void {
  }

  searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });

  searchValue(search: string) {
    this.MapService.response = false;
    this.MapService.searchValue(search);
    this.getData();
  }

  getData() {
    this.MapService.getCity().subscribe(res => {
      this.response = res;
      this.MapService.response = true;
      this.MapService.coordLat = this.response.location.lat;
      this.MapService.coordLon = this.response.location.lng;
    })
  }
}
