import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  item:Product;
  constructor() { }

  ngOnInit() {
  }

}
