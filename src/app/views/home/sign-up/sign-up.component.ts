import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser! : FormGroup;

  constructor(private loginService : LoginService) { }

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
    console.log(this.newUser.value);
    
  }

} 