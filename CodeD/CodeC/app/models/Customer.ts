import { Injectable } from "@angular/core";

@Injectable()
export class Customer{
  constructor(){

  }
  public print():string{
    return " I am a Service and i return some value";
  }
  /*constructor(public id:number, public name:string){

  }
  public print():string{
    return `Id is ${this.id} and Name is ${this.name}`;
  }*/
}
