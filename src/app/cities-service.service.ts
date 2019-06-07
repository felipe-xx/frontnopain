import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from './models/cities';

@Injectable({
  providedIn: 'root'
})


export class CitiesServiceService {
    private uri = "http://localhost:3000/api/cities";

    cities: Cities;

    constructor(public http:HttpClient) { 
        
    }
    
    public CreateCities(name:String){
        console.log('otro name', name);
        this.http.post(`${this.uri}`, name).subscribe(res => console.log('Datos Guardados'));
    } 
  
    getCities() {
      return this.http.get(this.uri);
    }
}
