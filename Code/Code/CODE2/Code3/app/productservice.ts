import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ProductService{
  http:Http;
constructor(http:Http,private httpClient:HttpClient){
  this.http = http;
}
fetchProducts(){
 var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
  return this.httpClient.get<Product[]>(url); // Publish a Server Request
 // this.httpClient.post(url,{});
}

fetchingProducts():Promise<Product[]>{
  var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";

  return this.http.get(url).toPromise().then((response)=>{
        return response.json().mobiles as Product[];
    }).catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
