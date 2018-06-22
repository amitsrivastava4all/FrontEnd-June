class Question{
    constructor(id, name, ans,rans){
        this.id = id;
        this.name = name;
        this.ans = ans;
        this.rans = rans;
        this.attempt = false;
        this.score = QuestionConstants.score;

    }
}