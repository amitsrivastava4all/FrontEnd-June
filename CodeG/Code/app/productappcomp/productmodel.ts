import {Product} from './product';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductModel{
 constructor(private http:Http,private httpClient:HttpClient){

 }
 loadProducts2():Observable<Product[]>{
  const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
   console.log("Load Product2 Call");
   return  this.httpClient.get<Product[]>(url);
   //console.log("Service Call ",obs);
   //return obs;
  }
 
 loadProducts():Promise<Product[]>{
   const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
   return this.http.get(url).toPromise().then(response=>{
     return response.json().mobiles as Product[];
   }).catch(err=>Promise.reject(err));


 }
 fillProducts():Product[]{
  var productArr:Product[]=[];
  /*productArr.push(new Product(1001,'Apple',90000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1002,'Samsung',12000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1003,'LG',9000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1004,'Nokia',8000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  */
  return productArr;

 }
}
