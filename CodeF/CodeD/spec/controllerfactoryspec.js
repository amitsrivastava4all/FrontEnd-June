describe("Controller and Factory Testing",()=>{
    beforeEach(module("myapp")) ; // ng-app="myapp"
    var $controller;
    var factoryName;
    var scope = {};
    beforeEach(inject(function(_$controller_){
       
        $controller = _$controller_;  // ng-controller
        $controller("myctrl",{$scope:scope});
        console.log("Controller Injected ",$controller);
    }));
    beforeEach(inject(_myfactory_=>{
        factoryName = _myfactory_;
    }));
    it("Controller Test",()=>{
       
        
        scope.firstNumber = 100;
        scope.secondNumber = 200;
        scope.add(scope.firstNumber,scope.secondNumber);
        expect(scope.result).toBe(300);
    })

    it("FactoryTest ",()=>{
        var result = factoryName.add(10,20);
        expect(result).toBe(30);
    })
})