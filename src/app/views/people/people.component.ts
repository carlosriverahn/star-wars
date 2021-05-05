import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { results } from '../../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 
  peoples : results [] = [];
  endPoint : string = "people/"
  
  constructor(private swapiService : SwapiService){
    
  }
  
  ngOnInit(): void {
    this.swapiService.getPeople(this.endPoint).subscribe(data => {this.peoples = data.results; console.log(this.peoples)});
  }

}
