var pass = require('../../password-checker/password');
var validator = pass.valid;
var checker = pass.ok;

describe('Check Passowrd', function(){

    it("should not allow an empty password", function(){
        expect(function(){
            validator("").toThrow(new Error("password cannot be empty"));
        })
    });

    it("password should be larger than 8 chars", function(){
        expect(function(){
            validator("frg").toThrow(new Error("password cannot be less than 8 chars"));
        })
    });

    it("password should have at least one number", function(){
        expect(function(){
            validator("gffdsdsgfdP").toThrow(new Error("password must contain atleast one number"));
        })
    });

    it("password should have at least one lowercase letter", function(){
        expect(function(){
            validator("RSTYE").toThrow(new Error("password must have at least one small letter"));
        })
    });

    it("password should have at least one uppercase letter", function(){
        expect(function(){
            validator("dff").toThrow(new Error("password cannot be empty"));
        })
    });
});

