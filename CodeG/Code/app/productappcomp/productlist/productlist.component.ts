import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input()
  list:Product[];
  constructor() { }

  ngOnInit() {
  }

}
