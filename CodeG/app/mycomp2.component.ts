import { Component } from "@angular/core";

@Component({
  selector:'app-comp2',
  template:`<h1>{{title}}</h1>`

})
export class MyComp2Component{
  title:string;
  constructor(){
    this.title = 'Module2 App Comp2';
  }

}
