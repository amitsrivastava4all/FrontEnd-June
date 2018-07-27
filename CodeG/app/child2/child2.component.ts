import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  msg:string;
  x:number = 100;
  y:number = 200;
  constructor() {
    this.msg = ' I am Child2 ';
  }

  ngOnInit() {
  }


}
