window.addEventListener("load",init);
var sequence ;
function init(){
    document.querySelector("#add").addEventListener("click",addQuestion);
    sequence = autoGen();
    document.querySelector("#search").addEventListener("click",search);
}
function addQuestion(){
    var questionId = sequence.next().value;
    var question = document.querySelector("#question").value;
    var ans = document.querySelector("#ans").value;
    var questionObject = new Question(questionId,question, ans);
   // var questionObject = new Question(1,question, ans);
    dbOperations.addQuestion(questionObject);

}
function search(){
    var questionId = document.querySelector("#questionid").value;
    dbOperations.getQuestionById(questionId);
}