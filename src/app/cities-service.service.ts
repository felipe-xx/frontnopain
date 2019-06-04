import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CitiesServiceService {
    private uri = "http://localhost:3000/api/cities";
    constructor(public http:HttpClient) { 
        
    }
    
    public CreateCities(name:String){
        const data = {name:name};
        this.http.post(`${this.uri}`, data).subscribe(res => console.log('Datos Guardados'));
    } 
    
    
}
