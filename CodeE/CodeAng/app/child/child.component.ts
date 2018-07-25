import {
  Component ,
  Input,
  EventEmitter,
  Output} from "@angular/core";

@Component({
  selector:'app-child',
  //template:`<h1>I am A Child Comp</h1>`
  templateUrl:'./child.component.html',
  styleUrls:['./child.component.css']
})
export class ChildComponent{
  @Output()
  parentoutput:EventEmitter<string> = new EventEmitter<string>();
  @Input()
  myvalue:string;

  msg:string;
  callParent(){
    this.parentoutput.emit('Hello Parent I am Passing My Data');
  }
  constructor(){
    this.msg = 'Hello I am  Child';

  }

}
