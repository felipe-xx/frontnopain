import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Places } from './models/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  url: 'http://localhost:3000/api/places/';
  
  constructor(public http:HttpClient) { }

  getSedes() {
    return this.http.get<Places[]>(this.url);
  }

  public CreatePlaces(data: any){
    console.log('otro name', name);
    this.http.post(`${this.url}`, data).subscribe(res => console.log('Datos Guardados'));
  } 

}
