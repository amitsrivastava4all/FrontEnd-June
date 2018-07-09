var map;
var element;
var latValue;
var lngValue;
function setElement(ele, lat , lng){
    latValue  = lat;
    lngValue  = lng;
    console.log("Inside Set Element is ",latValue,lngValue);
    element =  ele;
console.log("Element is ",ele);
}
function initMap() {
    
    setTimeout(function(){
        console.log("GPS Init .... ",element);
        var div = document.createElement("div");
        div.style.height ="500px";
        console.log("INIT MAP Lat and Lng Value is ",latValue,lngValue);
        console.log("Type of is ",typeof(latValue), typeof(lngValue));
    map = new google.maps.Map(div, {
        center: {
            lat: parseFloat(28.686273800000002),
            lng: parseFloat(77.2217831)
        },
        zoom: 15
    });
    console.log("Div is ",div, " Element is ",element[0]);
    element[0].appendChild(div);
    console.log("element is ",element[0]);
},9000);
}