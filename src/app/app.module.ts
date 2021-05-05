import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarMemberComponent } from './components/navbar-member/navbar-member.component';
import { HomeComponent } from './views/home/home.component';
import { StarshipsComponent } from './views/starships/starships.component';
import { PeopleComponent } from './views/people/people.component';
import { LoginComponent } from './views/home/login/login.component';
import { SignUpComponent } from './views/home/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarMemberComponent,
    HomeComponent,
    StarshipsComponent,
    PeopleComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
