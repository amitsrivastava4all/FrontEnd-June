app.controller("myctrl", ($scope, calcfactory) => {
    console.log("Controller Call and $scope is ", $scope);
    $scope.add = () => {
        // var result = parseInt($scope.firstnumber) + parseInt($scope.secondnumber);
        var result = calcfactory.add($scope.firstnumber, $scope.secondnumber);
        console.log("Add Call " + $scope.firstnumber + " " + $scope.secondnumber);
        $scope.total = result;
    }
    $scope.callAjax=()=>{
        var promise = calcfactory.doAjax();
        console.log("Controller Rec the Fake Object ",promise);
        timePass();
        promise.then(response=>{
            $scope.mydata = response;
        },err=>{
            $scope.err = err;
        })
    }

    const timePass = ()=>{
        for(let i = 1;i<=5; i++){
                console.log("time pass ",i);
        }
    }

});