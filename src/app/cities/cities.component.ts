import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CitiesServiceService } from '../cities-service.service';


@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
    citiForm: FormGroup;
    constructor(public _CitiesServ:CitiesServiceService, public Fb: FormBuilder) { 
        this.createForm();
    }

    ngOnInit() {

    }

    createForm(){
        this.citiForm = this.Fb.group({
            name: ['', Validators.required]
        });
    }

    CreateCities(name:String){
        this._CitiesServ.CreateCities(name);
    }

}
