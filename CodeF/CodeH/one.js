var a = 100;
var b = 'AMit';
var c = true;
function add(x, y) {
    return x + y;
}
var e = add;
function test(x) {
    var result = x(100, 200);
    console.log("Result is ", result);
}
test(e);
//var d:number = add(10,true);
//console.log("D is ",d); 
