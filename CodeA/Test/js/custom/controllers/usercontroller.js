window.addEventListener("DOMContentLoaded",init);
var isShowHide = false;
function init(){
    showHide();
    bindEvents();
}
function bindEvents(){
    document.querySelector("#login").addEventListener("click",show);
}
function show(){
    isShowHide = true;
    showHide();
}
const showHide = ()=>document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
// function showHide(){
//     document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
// }