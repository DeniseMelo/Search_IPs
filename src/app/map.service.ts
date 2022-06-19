import { IPs } from './map/models/ips/ips.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private readonly baseURL = 'https://geo.ipify.org/api/v2/country?apiKey=at_BQXeTPRyyn0GbbRJurP9dXDpfsWD3&ipAddress=8.8.8.8'
  constructor(private http: HttpClient) { }


  findIps(ips: string): Observable<IPs> {
    return this.http.get<IPs>(`${this.baseURL}/${ips}/json/`)

    }


}
