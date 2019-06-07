import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from './models/cities';


@Injectable({
  providedIn: 'root'
})
export class GetSedesService {
  url: 'http://localhost:3000/api/cities/';
  
  constructor(public http:HttpClient) { }

  getSedes() {
    return this.http.get<Cities[]>(this.url);
  }

}
