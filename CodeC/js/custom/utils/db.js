const dbOperations = {
    addQuestion(questionObject){
        firebase.database().ref('questions/'+questionObject.id).set(questionObject);
        console.log("Question Added...");
    },
    getQuestionById(id){
        var questionRef = firebase.database().ref('questions/'+id);
        questionRef.on('value',(snapShot)=>{
            var questionObject  = snapShot.val();
            console.log("QuestionObject is ",questionObject);
        })
    }
}