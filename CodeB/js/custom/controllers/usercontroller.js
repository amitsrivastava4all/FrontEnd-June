window.addEventListener("DOMContentLoaded",init);
var isShowHide = false;
function init(){
    doAjax();
    showHide();
    bindEvents();
}
function bindEvents(){
    document.querySelector("#login").addEventListener("click",show);
}
function doAjax(){
    fetch(urls.userurl).then(response=>response.json().then(json=>{
        userOperations.convert(json);
        console.log("Type of JSON is ",typeof json);
        console.log("JSON ",json instanceof Object);
        console.log("Json is ",json);
    }).catch(err=>console.log("Invalid JSON ",json))).catch(err=>console.log("Error in Server Call ",err));
}
function show(){
    isShowHide = true;
    showHide();
}
const showHide = ()=>document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
// function showHide(){
//     document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
// }