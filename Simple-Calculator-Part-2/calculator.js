module.exports = class Calculator {


        constructor() {
            this.memory = [];

        }


        add() {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            this.num = sum;
            return sum
        }

        multiply() {
            var sum = arguments[0]
            for (var i = 1; i < arguments.length; i++) {
                sum *= arguments[i];
            }
            this.num = sum;
            return sum
        }

        last() {
            return this.num;
        }

        set_slot(slot_number) {

            this.memory.push(this.last());
            return this.memory[slot_number - 1]
        }

        get_slot(slot_number) {

            return this.memory[slot_number - 1]
        }
    }
    // let LAST = calculator.last()

// console.log(calculator.multiply(1, 12));
// console.log(calculator.multiply(1, 5));;
// console.log(calculator.add(12, 12));
// console.log(calculator.add(5, 5));;
// console.log(calculator.last());