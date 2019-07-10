function password_is_valid(password) {
    var specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;

        if(password == "") {
            throw new Error("must not be empty");
        }
        else if (password.length < 8) {
            throw new Error("length must be 8 or greater");
        }
        else if(!numbers.test(password)) {
            throw new Error("must contain numbers");
        }
        else if(!password.match(specialCharacters)) {
            throw new Error("must contain at least one special character");
        }
        else if(!password.match(lowerCase)) {
            throw new Error("must contain at least one small letter");
        }
        else if(!password.match(upperCase)) {
            throw new Error("must contain at least one capital letter");
        }
        
}

function password_is_ok(password) {
    var specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;

        if(password != "" && password.length > 8 && password.match(numbers))
            return console.log("true");
        else
            return console.log("false");
}

password_is_ok('BokangKama1');

module.exports = {
    valid:password_is_valid, 
    ok:password_is_ok
};
