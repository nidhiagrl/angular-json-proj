import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
     jsonData :any;
    constructor(private jser: JsonService) { }
  
   ngOnInit(){
      this.jser.getConfig().subscribe((data:object) => {
      this.jsonData = data;
      })
   }
  }