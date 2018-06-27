app2.factory("calcfactory", ($http,$q,URL) => {
    console.log("Factory Called....");
    const object = {
        doAjax(){
            var defer = $q.defer();
            console.log("Inside DoAjax in Factory  Fake Object ",defer);
            //var url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
            console.log(" I am Going to Hit the Server....");
            $http.get(URL).then(response=>{
                console.log("Response is Come..... ",response);
               defer.resolve(response);
            },error=>{
                console.log("Error is Come from Server ",error);
                defer.reject(error);
            });
            console.log("Going to Return the Promise...");
            return defer.promise;
        },

        add(firstNumber, secondNumber) {
            return parseInt(firstNumber) + parseInt(secondNumber);
        }
    }
    console.log("Factory Returns the Object ", object);
    return object;
})