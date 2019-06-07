import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
    private uri = "http://localhost:3000/api/users/singIn/";

    login: Login;

    constructor(public http:HttpClient) { 
        
    }
    
    public LoginUser(form:any){
        console.log('--->>>>', form.user, form.pass);
        this.http.post(`${this.uri}`, form).subscribe(res => console.log('Datos Guardados'));
    } 
    
    
}
