var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var account_error = document.getElementById('account_error');

function validated() {
    if(username.value.length < 1 && password.value.length < 1) {
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        username.focus();
        password.focus();
        return false;
    }
    if(username.value != "Tick-etOut") {
        username.style.border = "1px solid red";
        account_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value != "admin") {
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        password.focus();
        return false;
    }
}