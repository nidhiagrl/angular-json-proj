import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuData :any;
  constructor() { }

  ngOnInit() {
    
  }
  // hasChildren(obj){
  //   return typeof this.menuData[obj] !== "object";
  // }


}