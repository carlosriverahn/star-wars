import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

      
  users: User [] = []
  token: string = "token"
  usersx: string =  "users"
  
  constructor() { }

  get usersMemory() {
    return JSON.parse(sessionStorage.getItem(this.usersx)!) || [];
  }

  get tokenMemory() {
    return sessionStorage.getItem(this.token)! || undefined;
  }

  createUsers(users:User[]){
    sessionStorage.setItem(this.usersx, <string>JSON.stringify(users));
  }

  addUser(userForm:User) {
    // debugger
    this.users = this.usersMemory;
    
    if(this.users.length === 0){
      this.users.push(userForm);
    }else{
      this.users.find((user)=>{
        if(user.username === userForm.username){
          user.password = userForm.password
        }else{
          this.users.push(userForm);
        }
      });
    }
    this.createUsers(this.users);
  }

  login(userForm:User){
    // debugger
    let session!:boolean;
    this.users = this.usersMemory;
    this.users.find(user => {
      if(user.username === userForm.username && user.password === userForm.password){
        sessionStorage.setItem(this.token, <string>("true"));
        session = true
      }else{
        sessionStorage.setItem(this.token, <string>("false"));
        session = false
      }
    });
    if(session == true){
      alert("Your login has been successful");
    }else{
      alert("Wrong username or password");
    }
    
  }

  logout(){
    sessionStorage.removeItem(this.usersx);
    sessionStorage.setItem(this.token, <string>("false"));
  }

}
