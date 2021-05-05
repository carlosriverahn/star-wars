import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login! : FormGroup;

  constructor(private loginService : LoginService, private router : Router) { }

  createForm(){
    this.login = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(){
    // debugger
    this.loginService.login(this.login.value);
    console.log(this.login.value);
  }

  register(){
    this.router.navigate(["/signUp"]);

  }

} 
