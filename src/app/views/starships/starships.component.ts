import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships:any = []
  endPoint = "starships/"

  constructor(private swapiService: SwapiService) { 
    // debugger
    this.swapiService.getData(this.endPoint).subscribe(data => {this.starships = data; console.log("cc",this.starships.results)});
   }

  ngOnInit(): void {
    console.log("oi",this.starships);
  }

}
