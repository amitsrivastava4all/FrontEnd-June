import {Component} from '@angular/core';
@Component({
  selector:'shoes',
  template:`<h1>Shoes are ::</h1> <a routerLink="sports"> Sports </a>
  <router-outlet></router-outlet>`
})
export class ShoeComponent{

}
