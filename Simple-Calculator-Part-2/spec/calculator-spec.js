const Calculator = require('../calculator')

describe('calculate', () => {

    let calculator = new Calculator();

    it('should be able to add two numbers together', () => {
        expect(calculator.add(0, 0)).toBe(0);
        expect(calculator.add(-1, -1)).toEqual(-2);
        expect(calculator.add(4, 5)).toEqual(9);
    });

    it('should be able to add as many numbers possibe', () => {
        expect(calculator.add(1, 2, 3, 4)).toBe(10);
    });
});

describe('calculate mutliply', () => {

    let calculator = new Calculator();

    it('should be able to .multiply two numbers together', () => {
        expect(calculator.multiply(0, 0)).toBe(0);
    });

    it('should be able to multiply as many numbers possibe', () => {
        expect(calculator.multiply(1, 2, 3, 4)).toBe(24);
    });
});

describe('calculator should have a function called last that returns the last result', () => {

    let calculator = new Calculator();

    it('should returns the last result', () => {
        expect(calculator.add(12, 12)).toBe(24);
        expect(calculator.last()).toBe(24);
    });

    describe('calculator should store values in arrays and get them on request', () => {

        it('should remember values', () => {
            expect(calculator.add(1, 2)).toBe(3);
            expect(calculator.set_slot(1)).toBe(3);
            expect(calculator.get_slot(1)).toBe(3);
            expect(calculator.add(10, 20)).toEqual(30);

            expect(calculator.set_slot(2)).toBe(30);
            expect(calculator.get_slot(2)).toBe(30);

            expect(calculator.add(100, 200)).toEqual(300);
            expect(calculator.get_slot(1)).toBe(3);
            expect(calculator.get_slot(2)).toBe(30);
            expect(calculator.last()).toBe(300);



            expect(calculator.get_slot(1)).toBe(3);
            expect(calculator.set_slot(2)).toBe(30)
            expect(calculator.last(2)).toBe(300);

            expect(calculator.add(calculator.memory[0], 5)).toBe(8);
            expect(calculator.multiply(calculator.memory[1], 2)).toBe(60);

        });


    });
});