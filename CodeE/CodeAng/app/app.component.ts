import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Hello Angular ';
  sum:number ;
  counter: number;
   myclass: string;
   fruits:string[];
  flag: boolean;
  constructor() {
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
    }

}
