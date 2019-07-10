

function add(a, b) {
    return a + b;
    }



function add2() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}



function multiply(a, b) {
        return a * b;
    }

    function multiply2() {
        var sum = 1;
        for (var i = 0; i < arguments.length; i++) {
            sum *= arguments[i];
        }
        return sum
    }

module.exports = {
    Addition:add,
    Addition2:add2,
    Multiplication:multiply,
    Multiplication2:multiply2
}