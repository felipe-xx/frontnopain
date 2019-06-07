import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { PlacesComponent } from './places/places.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CitiesServiceService } from './cities-service.service';
import { LoginServiceService } from './login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    PlacesComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CitiesServiceService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
