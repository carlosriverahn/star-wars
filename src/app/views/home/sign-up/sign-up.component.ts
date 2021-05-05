import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser! : FormGroup;

  constructor(private loginService : LoginService,
              private router: Router) { }

  createForm(){
    this.newUser = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(){
    this.loginService.addUser(this.newUser.value);
    alert("your username has been created");
    this.router.navigate(["/login"])
    console.log(this.newUser.value);
    
  }

} 

function username(username: any) {
  throw new Error('Function not implemented.');
}
