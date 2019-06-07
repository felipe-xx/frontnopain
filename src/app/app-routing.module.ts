import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities/cities.component';
import { PlacesComponent } from './places/places.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},{
  path: 'cities',
  component: CitiesComponent
},
  {
    path: 'places',
    component: PlacesComponent
  },
  {
    path: 'users',
    component: UsersComponent
},{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
