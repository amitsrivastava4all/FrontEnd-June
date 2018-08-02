import { Component } from '@angular/core';
import {UserInfo} from './userinfo';
import {ProductService} from './productservice';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname:string;
  userInfo:UserInfo  = new UserInfo();
  title = 'app';
  counter:number = 0;
error:string;
  productArray:Product[];
  constructor(private productService :ProductService){
 if(localStorage.counter){
      this.counter = localStorage.counter;
 }
  }

  loadFromLocal(){
    if(localStorage.counter){
      this.counter = localStorage.counter;
      this.counter++;
      localStorage.counter = this.counter;
    }
    else{
      this.counter = 0;
      this.counter++;
      localStorage.counter = this.counter;
    }
  }

  loadProducts2(){
    this.productService.fetchProducts().subscribe((itemArray=>this.productArray = itemArray["mobiles"]));
  }

  loadProducts(){
    var promise  = this.productService.fetchingProducts();
    // Time Pass Stuff
    promise.then(productArr=>{
          //console.log("Getting the Data in Promise “,class);
          return this.productArray=productArr;
      }).catch((err)=>{
       this.error = err
      });



  }

  registerIt(userForm):void{
    if(userForm.invalid){
      alert("Can't Submit Form in Invalid....");
    }

    // ajax call 
    // http.post(url,userForm);
    console.log("Register is Called...",this.userInfo);
  }

}

