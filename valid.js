//Validation for Input

var EmployeeCode = document.forms['forms']['EmployeeCode'];
var Password = document.forms['forms']['Password'];

var EmployeeCode_error = document.getElementsByName('EmployeeCode');
var Password_error = document.getElementsByName('Password');

function validated(){
    if (EmployeeCode.value.length <6){
        EmployeeCode.style.border = "1px solid red";
        EmployeeCode.focus();
        return false;
    }
}