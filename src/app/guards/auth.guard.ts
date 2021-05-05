import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  token: string | undefined= "";

  constructor(private loginService: LoginService,
              private router: Router
    ){}

 tokenMemory() {
    this.token = sessionStorage.getItem("token")! || undefined;
  }    
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.tokenMemory()
    console.log(this.token);
    if(this.token == "false" || this.token === undefined ){
      alert("You need to login to see the information")
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }
  
}
