function startTimer(timeLeft,delay,id){
   // var timeLeft = 60;
var c =setInterval(()=>{
document.querySelector("#"+id).innerHTML = timeLeft;
if(timeLeft==0){
//console.log("Inside TimeLeft ",timeLeft);
clearInterval(c);
}
timeLeft--;


},delay);
}
const QuestionConstants = {
    score:5
}
