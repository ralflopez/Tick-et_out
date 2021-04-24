var firstName = document.forms['form']['firstName'];
var surname = document.forms['form']['surname'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var account_error = document.getElementById('account_error');

function validated() {
    if(firstName.value.length < 1 && surname.value.length < 1 && email.value.length < 1 && password.value.length < 1) {
        firstName.style.border = "1px solid red";
        surname.style.border = "1px solid red";
        email.style.border = "1px solid red";
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        firstName.focus();
        surname.focus();
        email.focus();
        password.focus();
        return false;
    }
    if(firstName.value.length < 1) {
        firstName.style.border = "1px solid red";
        account_error.style.display = "block";
        firstName.focus();
        return false;
    }
    if(surname.value.length < 1) {
        surname.style.border = "1px solid red";
        account_error.style.display = "block";
        surname.focus();
        return false;
    }
    if(email.value.length < 1) {
        email.style.border = "1px solid red";
        account_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 1) {
        password.style.border = "1px solid red";
        account_error.style.display = "block";
        password.focus();
        return false;
    }
    /*
    if(email.value != "ticketout@ticket.me") {
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
    */
}