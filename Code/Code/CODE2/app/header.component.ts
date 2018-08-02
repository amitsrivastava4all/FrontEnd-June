import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector:'header',
  template:`<ul><li><a [routerLinkActiveOptions]="{exact:true}"
  routerLinkActive="active"
   [routerLink]="homeLink">Home</a>
  </li><li><a routerLinkActive="active"  routerLink="shoes">Shoes</a></li>
  <li><a routerLinkActive="active" routerLink="mobiles/90000/Apple">Mobiles</a></li>
  </ul>
  <button (click)="loadShoes()">Load Shoes Code Way</button>
  `,
  styleUrls:['app.component.css']

})
export class HeaderComponent {
  userFound:boolean;
  homeLink:string='/';
  constructor(private router:Router){
     this.userFound = true;
  }
  loadShoes(){
if(this.userFound){
    this.router.navigate(["/shoes"]);
}
else{
  this.router.navigate(["/"]);
}
  }
}
