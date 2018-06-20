redirect();
window.addEventListener("DOMContentLoaded",init);
function init(){
    if(localStorage.userid){
    document.querySelector("#username").innerHTML = localStorage.userid;
    }
    // else{
    //     location.href = "index.html";
    // }
}

function redirect(){
    if(!localStorage.userid){
        location.href = "index.html";
        }
}