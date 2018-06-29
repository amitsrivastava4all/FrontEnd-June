app.controller("homectrl",function ($scope){
    $scope.msg= ' I am Home Page';
})
app.controller("loginctrl",function($scope,$routeParams){
    $scope.message = $routeParams.myvar;
});