   // Controller is a file which talk to the view and logic
 window.addEventListener("DOMContentLoaded",bindEvents);
   function computeSalary() {
    var salary = document.querySelector("#salary").value;
    console.log("compute Call " + salary);
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}
