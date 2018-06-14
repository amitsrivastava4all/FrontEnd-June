window.addEventListener('DOMContentLoaded', init);
// JS Code

function init(){
    fillWithZero();
    bindEvents();
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}

function fillWithZero() {
    var spans = document.querySelectorAll("span");
    for (let span of spans) {
        span.innerHTML = "0";
    }
}


function computeSalary() {
    console.log("Compute Salary Call");
    var currentTxtBox = document.querySelector("#salary");
    //var currentTxtBox = document.querySelectorAll("input[type='text']")[0];
    var val = currentTxtBox.value;
    salaryOperations.takeSalary(parseFloat(val));
    console.log("Hra is "+salaryOperations.hra());
    console.log("GS is "+salaryOperations.gs());
    console.log("Value is " + val);

}