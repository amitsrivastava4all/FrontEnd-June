import { Component,ViewChild, ViewChildren,QueryList } from '@angular/core';
import {Child2Component} from './child2/child2.component';
import {Customer} from './models/Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Customer]
})
export class AppComponent {
 // customer:Customer = new Customer(1001,"Ram");
  /*@ViewChild(Child2Component)
  mychild2Object:Child2Component;
*/
  @ViewChildren(Child2Component)
  myChild2List:QueryList<Child2Component>;

  title = 'Hello Angular ';
  sum:number ;
  counter: number;
   myclass: string;
   fruits:string[];
  flag: boolean;
  constructor(private customerService:Customer) {
    this.sum = 0;
    this.fruits = ['Orange','Banana','Apple'];
    this.counter = 0;
    this.myclass = '';
    this.flag = true;
  }

  add(firstNumber:string, secondNumber:string):void{
    this.sum = parseInt(firstNumber) + parseInt(secondNumber);
  }

  takeValueFromChild(data){
    this.title = data;

  }

  takeInput(event): void {
    this.title = event.target.value;
  }

    showHide(): void {
      this.flag = false;
      this.myclass = 'red';
      this.counter++;
      //this.mychild2Object.x++;
      //this.mychild2Object.y--;
      this.title = this.customerService.print();

      this.myChild2List.forEach(currentChild=>{
        currentChild.x++;
        currentChild.y--;
      })
    }

}
