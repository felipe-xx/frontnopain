import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { PlacesComponent } from './places/places.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
