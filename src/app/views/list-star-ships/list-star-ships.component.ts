import { Component, OnInit } from '@angular/core';
import { results } from 'src/app/models/star-ships';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-list-star-ships',
  templateUrl: './list-star-ships.component.html',
  styleUrls: ['./list-star-ships.component.css']
})
export class ListStarShipsComponent implements OnInit {
  
  starShips : results [] = [];
  endPoint : string = "starships/"
  
  constructor(private swapiService : SwapiService){
    
  }
  
  ngOnInit(): void {
    this.swapiService.getStarships(this.endPoint).subscribe((data: { results: results[]; }) => {this.starShips = data.results; console.log(this.starShips)});
  }


}
