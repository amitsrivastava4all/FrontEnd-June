interface Calc{
    add(x:number,y:number):number;
    subtract(x:number[]):number;
}
class MyCalc implements Calc{
    add(a:number, b:number):number{
        return a + b;
    }
    subtract(a:number[]):number{
        var sum:number=0;
        for(let x of a){
            sum-=x;
        }
        return sum;
    }
    mul():void{
        console.log("this is multiply....");
    }
}
var obj:Calc = new MyCalc();  // Upcasting
console.log("Add is ",obj.add(10,20));
console.log("Sub is ",obj.subtract([-10,-20]));
//obj.mul();