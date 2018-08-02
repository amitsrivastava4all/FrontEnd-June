import { Model } from './model';
import { MyserviceService } from './myservice.service';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divAnimation', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1,1) rotate(0deg)'
      })),
      state('highlight', style({
        'background-color': 'blue',
        transform: 'translateX(600px) scale(3,3) rotate(360deg)'
      })),
      transition('normal <=> highlight', animate(1000)),
      // transition('highlight => normal', animate(800))
    ]),

    trigger('list1', [
      state('start', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),

      // this is void to element present
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-200px) '
        }),
        animate(1000)
      ]),
      // element present to element gone
      transition('* => void', [
        animate(1000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0.5
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.7
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])

    ])
  ]
})
export class AppComponent {
  state = 'normal';

  list = ['Watching Iron Man Movie', 'Travelling India', 'Playing Games'];
  model:Model[];
  constructor(private myservice:MyserviceService){

  }

  doAnimation() {
    this.state == 'normal' ? this.state = 'highlight' : this.state = 'normal';

  }



  addItem(item) {
    this.list.push(item);
  }

  deleteItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  fetch():void{
    this.myservice.loadProducts().subscribe(data=>this.model = data['mobiles']);


  }

}
