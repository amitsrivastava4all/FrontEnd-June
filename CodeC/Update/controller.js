window.addEventListener("load",init);
var questions;
var index = 0;
function init(){
    bindEvents();
    questions = questionOperations.prepareQuestions();
    disable();
    printQuestion();
    printStatus();
    startTimer(60,1000,"time");

}
function getQuestionId(){
    var id = parseInt(this.innerHTML) ;
    index = id - 1;
    printQuestion();
}
function drawCircle(status,id){
    var div = document.createElement("div"); //<div></div>
    div.className=status?"green":"red";
    div.innerHTML = id;
    index = id - 1;
    div.addEventListener("click",getQuestionId);
    document.querySelector("#status").appendChild(div);
    
}
function printStatus(){
    for(let question of questions){
        var id = question.id;
        var status = question.attempt;
        drawCircle(status,id);
    }
}
function disable(){
    if(index ==0){
        document.querySelector("#prev").setAttribute("disabled", true);
    }
    else{
        document.querySelector("#prev").setAttribute("disabled", false); 
    }
    if(index==questions.length-1){
        document.querySelector("#next").setAttribute("disabled", true);
    }
    else{
        document.querySelector("#next").setAttribute("disabled", false); 
    }
}
function printQuestion(){
if(index<questions.length){
    var question = questions[index];

    document.querySelector("#question").innerHTML = `Q${question.id}: ${question.name}`;

}
}
function bindEvents(){

}