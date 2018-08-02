import { Model } from './model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyserviceService {
  model:Model[]=[];
  constructor(private http:HttpClient) { }

  loadProducts(){
    var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
     return this.http.get<Model[]>(url);
  }

}
