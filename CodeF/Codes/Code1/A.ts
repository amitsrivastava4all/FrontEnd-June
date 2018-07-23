export class Customer{
    constructor(private id:number, private name:string){

    }
    print():void{
        console.log(`Id is ${this.id} and Name is ${this.name}`);
    }
}