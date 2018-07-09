app.directive("tcsAddress",()=>{
    return {
        templateUrl:'templates/address.html',
        restrict:'EA'
    }
})
var lat;
var lng;
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("Show Position ",lat,lng);
  //  x.innerHTML = "Latitude: " + position.coords.latitude + 
 //   "<br>Longitude: " + position.coords.longitude; 
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
       alert( "Geolocation is not supported by this browser.");
    }
}
getLocation();

app.directive("showGps",()=>{
    return {
        controller:function(){

        },
        templateUrl:'templates/gpsmap.html',
        link:function(scope,element,attr){
            console.log("Link called of GPS  ",element);
            console.log("Inside GPS Dir ",element,lat,lng);
           // setTimeout(setElement.bind(element,lat,lng),4000);
            setElement(element,lat,lng);
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