const userOperations = {
    users:[],
    convert(jsonObject){
        jsonObject.users.forEach(user=>this.users.push(new User(user.userid, user.password)));
        console.log("user data is ",this.users);
        // convert jsonObject into UserObject
    }
}