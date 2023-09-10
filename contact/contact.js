document.getElementById("sub").onclick=validate;
function validate()
{
    validateName();
}
// validation of name 
function validateName() {
    // errors--> length=0 , length<3 , only contains characters
    var username = document.getElementById("name").value;
    if (username == '') {
        // not empty
        document.getElementsByClassName("errorspan")[0].innerHTML = "please enter a name ";
    }
    else if (username.length < 2) {
        // less than two characters
        document.getElementsByClassName("errorspan")[0].innerHTML = "name must be at least 3 characters";
    }
    else if (/\d/.test(username)) {
        //    not containning a number
        document.getElementsByClassName("errorspan")[0].innerHTML = "Name cannot contain numbers";
    }
    else {
        document.getElementsByClassName("errorspan")[0].style.display = 'none';
    }
}
