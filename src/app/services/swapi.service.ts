import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/people';
import { StarShips } from '../models/star-ships';




@Injectable({
  providedIn: 'root'
})
export class SwapiService { 

  private url : string = "https://swapi.dev/api/"
  // private data = []

  constructor(private httpClient : HttpClient) {
   }

   getStarships(endPoint: string):Observable<StarShips>{
   return this.httpClient.get<StarShips>(`${this.url}${endPoint}`);
   }

   getPeople(endPoint: string):Observable<People>{
    return this.httpClient.get<People>(`${this.url}${endPoint}`);
    }
}
