import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuData :any;
  displayChild :boolean = false;
  constructor() { }

  ngOnInit() {
    
  }
  showChild(){
     this.displayChild  =  !this.displayChild;
  }



}