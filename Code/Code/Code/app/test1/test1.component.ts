import { ViewEncapsulation,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
