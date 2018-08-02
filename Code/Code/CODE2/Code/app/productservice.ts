import {Injectable} from '@angular/core';

import {Product} from './product';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ProductService{

constructor(private httpClient:HttpClient){

}
fetchProducts(){
 var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
  return this.httpClient.get<Product[]>(url); // Publish a Server Request
 // this.httpClient.post(url,{});
}


}
