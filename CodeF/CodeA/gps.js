var map;
var element;
function setElement(ele){

    element =  ele;
console.log("Element is ",ele);
}
function initMap() {
    
    setTimeout(function(){
        console.log("GPS Init .... ",element);
        var div = document.createElement("div");
    map = new google.maps.Map(div, {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
    console.log("Div is ",div);
    element[0].appendChild(div);
    console.log("element is ",element[0]);
},6000);
}