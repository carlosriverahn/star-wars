import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { StarshipsComponent } from './views/starships/starships.component';
import { PeopleComponent } from './views/people/people.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', component: HomeComponent },
]

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
