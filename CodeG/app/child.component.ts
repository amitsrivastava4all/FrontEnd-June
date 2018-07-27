import {
  Component ,
  Input,
  EventEmitter,
  Output} from "@angular/core";

@Component({
  selector:'app-child3',
  template:`<h1>I am A Duplicate Child Comp in Different Module {{msg}}</h1>`
  //templateUrl:'./child.component.html',
 // styleUrls:['./child.component.css']
})
export class ChildComponent{


  msg:string;

  constructor(){
    this.msg = 'Hello I am  Child';

  }

}
