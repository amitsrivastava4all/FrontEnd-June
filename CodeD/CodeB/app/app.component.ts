import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular ';
  counter: number;
   myclass: string;
   fruits:string[];
  flag: boolean;
  constructor() {
    this.fruits = ['Orange','Banana','Apple'];
    this.counter = 0;
    this.myclass = '';
    this.flag = true;
  }

  takeInput(event: Event): void {
    this.title = event.target.value;
  }

    showHide(): void {
      this.flag = false;
      this.myclass = 'red';
      this.counter++;
    }

}
