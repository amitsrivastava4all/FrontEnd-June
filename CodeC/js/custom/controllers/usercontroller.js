window.addEventListener("DOMContentLoaded",init);
var isShowHide = false;
function init(){
    doAjax();
    showHide();
    bindEvents();
    clearLocal();
}
const clearLocal=()=>localStorage.clear();

function doLogin(){
    var userid = document.querySelector("#useridtxt").value;
    var password = document.querySelector("#passwordtxt").value;
    if(userOperations.search(userid, password)==true){
        localStorage.userid = userid;
        location.href  ="welcome.html";
    }
    else{
        document.querySelector("#message").innerHTML = "Invalid Userid or Password";
    }
}
function bindEvents(){
    document.querySelector("#login").addEventListener("click",show);
    document.querySelector("#loginBt").addEventListener("click",doLogin);
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