app.config(function($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');    
$routeProvider
                .when('/',{templateUrl:'views/home.html',controller:'homectrl'})
                .when('/login/:myvar',{templateUrl:'views/login.html',controller:'loginctrl'})
                .otherwise({template:'You Type Some Wrong URL '})
})