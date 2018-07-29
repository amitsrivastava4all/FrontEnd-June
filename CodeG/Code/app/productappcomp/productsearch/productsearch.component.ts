

import { EventEmitter,Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {

  @Output()
  passPrice:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  takeSearchPrice(price:number){
  this.passPrice.emit(price);
  }


}
