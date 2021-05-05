import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { StarShips, results } from '../../models/star-ships';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starShips : results [] = [];
  endPoint : string = "starships/"
  
  constructor(private swapiService : SwapiService){
    
  }
  
  ngOnInit(): void {
    this.swapiService.getStarships(this.endPoint).subscribe(data => {this.starShips = data.results; console.log(this.starShips)});
  }
  
}
