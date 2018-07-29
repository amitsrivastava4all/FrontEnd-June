import { ProductModel } from './productmodel';
import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-productappcomp',
  templateUrl: './productappcomp.component.html',
  styleUrls: ['./productappcomp.component.css']
})
export class ProductappcompComponent implements OnInit {
  price:number;
  //productModel:ProductModel;
  productArr:Product[];
  filterArr:Product[];
  constructor(private productModel:ProductModel) {
    this.price = 0;
    //this.productModel = new ProductModel();
    //this.filterArr = this.productArr = this.productModel.fillProducts();

  }

  takePrice(price:number):void{
  this.price = price;
  this.filterArr = this.productArr.filter(productObject=>productObject.price == this.price);
  }

  ngOnInit() {
    // const success = (response)=>{
    //   this.filterArr = this.productArr = response.mobiles;
    // }
    // const fail = (err)=>{
    //   console.log("Fail ",err);
    // }

    // var subRef = this.productModel.loadProducts2().subscribe(success,fail);
   // subRef.unsubscribe();
   console.log("NgOnInit Called....");
    var refSub = this.productModel.loadProducts2().subscribe((response)=>{
    console.log("Response is ",response);
    if(response){
    console.log('------Response is.... ', response["mobiles"]);
    this.filterArr = this.productArr = response["mobiles"];
    }
    //this.filterArr = this.productArr = response.mobiles;
    // response.mobiles.map(mob=>{
    //   console.log("Mobile ",mob);
    // })
  },(err)=>{
    console.log('Error is ',err);
  });
  setTimeout(() => {
    console.log("Unsubscribe Call")
    refSub.unsubscribe();
  }, 7000);
  

  // Promise Style Code
  //   this.productModel.loadProducts().then(data=>{
  // this.filterArr = this.productArr = data;
  //   }); 
  }

}
