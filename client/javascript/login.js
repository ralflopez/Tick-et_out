var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var account_error = document.getElementById('account_error');

function validated() {
    if(email.value.length < 1 && password.value.length < 1) {
        email.style.border = "1px solid red";
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        email.focus();
        password.focus();
        return false;
    }
    if(email.value != "Tick-etOut") {
        email.style.border = "1px solid red";
        account_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value != "admin") {
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        password.focus();
        return false;
    }
}