app.controller("myctrl",($scope,myfactory,$timeout)=>{
    $scope.mydata = myfactory.getData();
    $timeout(()=>{
        $scope.$apply(()=>{
            console.log("Apply Call")
        });
    },10000)

   
})