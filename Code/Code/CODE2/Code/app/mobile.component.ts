

import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';
import {ProductService} from './productservice'
@Component({
  selector:'mobiles',
  template:`<h1>Mobiles are ::</h1>
  <p>Route Paramters are :: {{message}}</p>
  <button class="btn btn-primary" (click)="loadProducts2()">Load Products </button>
<ul>
    <li *ngFor="let product of productArray">
        {{product.id}} {{product.name}} {{product.price}}
        <img src="{{product.url}}">

    </li>
</ul>
  `
})
export class MobileComponent implements OnInit{
message:string;
activatedRoute: ActivatedRoute;
  constructor(activatedRoute:ActivatedRoute,private productService :ProductService){
    this.activatedRoute = activatedRoute;
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      this.message = "Price is "+params.price+" And Brand is "+params.brand;
    })
  }

  productArray:Product[];


  loadProducts2(){
    this.productService.fetchProducts().subscribe((itemArray=>this.productArray = itemArray["mobiles"]));
  }
}
