import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiService { 

  private url : string = "https://swapi.dev/api/"
  // private data = []

  constructor(private httpClient : HttpClient) {
   }

   getData(endPoint: string){
    const headers = new HttpHeaders({
      //Authorization: this.token //removed to showing products without loggin 
    });
    //  debugger
   return this.httpClient.get(`${this.url}${endPoint}`);
   }
}
