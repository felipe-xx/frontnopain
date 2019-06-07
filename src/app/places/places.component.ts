import { Component, OnInit } from '@angular/core';
import { GetSedesService } from '../get-sedes.service';
import { Cities } from '../models/cities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitiesServiceService } from '../cities-service.service';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  [x: string]: any;
  cities: any;
  idCiti: string;
  placesForm: FormGroup;
  placesData: any;

  constructor(private _sedesSer: PlacesService, public Fb: FormBuilder, public citiServ: CitiesServiceService) { 
    this.createForm();
  }

  ngOnInit() {

    this.citiServ.getCities().subscribe(data => {
      this.cities = data;
      this.idCiti = data._id;
    });
  }

  createForm(){
    this.placesForm = this.Fb.group({
        name: ['', Validators.required]
    });
  }

  CreatePlaces(name: string){
    this.placesData = {
      name: name,
      idCity: this.idCiti
    }
    console.log('name', this.placesData);
    this._sedesSer.CreatePlaces(this.placesData);    
  }

}
