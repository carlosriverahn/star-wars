import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { StarshipsComponent } from './views/starships/starships.component';
import { PeopleComponent } from './views/people/people.component';
import { SignUpComponent } from './views/home/sign-up/sign-up.component';
import { LoginComponent } from './views/home/login/login.component';
import { ListStarShipsComponent } from './views/list-star-ships/list-star-ships.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent, canActivate: [AuthGuard] },
  { path: 'listStarships', component:  ListStarShipsComponent, canActivate: [AuthGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '**', component: HomeComponent },
]

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
