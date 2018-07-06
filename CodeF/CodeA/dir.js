app.directive("tcsAddress",()=>{
    return {
        templateUrl:'templates/address.html',
        restrict:'EA'
    }
})

app.directive("showGps",()=>{
    return {
        controller:function(){

        },
        templateUrl:'templates/gpsmap.html',
        link:function(scope,element,attr){
            console.log("Link called of GPS  ",element);
            setElement(element);
            //getLocation();
            //element[0].innerHTML = 
        }
    }
});
app.directive("tcsTax",()=>{
    return{
        link:function(scope,element,attr){
            console.log("Link call ",element, attr);
            var tax = parseInt(attr.salary) * 0.10;
            element[0].innerHTML="Tax Value is "+tax;
        },
        template:'Tax is '
        // compile:function(ele,attr){
        //     console.log("Compile Start...");
        // }
        
    }
})