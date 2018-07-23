let a:number = 100;
let b:string= 'AMit';
let c:boolean = true;
var ee1:number=10;
//var e = (x:number,y:number):number;
type d = (x:number,y:number)=>number;

var ee:string[]= [];

class A{
    constructor(private a1:number, protected b1:string){
        this.a1++;
    }
    // private a1:number;
    // protected b1:string;
    // constructor(a1:number,b1:string){
    //     this.a1 = a1;
    //     this.b1 = b1;
    // }
}

var a1:number|string;
a1 = 90;
a1++;
console.log("A1 is ",a1);


var d1:any=90;
d1="hello";

var gg = 9999;

function add(x:number, y:number):number{
    return x+ y;
}
var e:d = add;
function test(x:d){
    var result:number = x(100,200);
    console.log("Result is ",result);
}
test(e);
//var d:number = add(10,true);
//console.log("D is ",d);