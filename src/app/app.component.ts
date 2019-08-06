import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    constructor(private jser: JsonService) {

  }
  getData(){
    alert('Say Hi!');
    this.jser.getConfig().subscribe((data:object) => {
      console.log(data);
    })
  }
  }