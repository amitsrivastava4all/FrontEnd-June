const questionOperations = {
    questions:[],
    prepareQuestions(){
       
            this.questions.push(new Question(1,"ES Stands For",["ECMA Script","Egg Script","Both","None of These"],"a"));
            this.questions.push(new Question(2,"ES6 Stands For",["ECMA Script","ES6 Script","Both","None of These"],"b"));
            this.questions.push(new Question(3,"ES7 Stands For",["ECMA Script","ES7 Script","Both","None of These"],"b"));

        
        return this.questions;
    }
}