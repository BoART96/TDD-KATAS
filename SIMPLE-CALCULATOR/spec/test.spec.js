const operations = require('../maths');
const add = operations.Addition
const multiply = operations.Multiplication
const add2 = operations.Addition2
const multiply2 = operations.Multiplication2

describe('calculate addition', () => {
    it('should be able to add two numbers together', () => {
    expect(add(0, 0)).toBe(0);       
    expect(add(-1,-1)).toEqual(-2);
    expect(add(4,5)).toEqual(9);
    });

    it('should be able to add as many numbers possibe', () => {
        expect(add2(1, 2, 3, 4)).toBe(10);
        });
});

describe('calculate mutliply', () => {
    it('should be able to multiply two numbers together', () => {
        expect(multiply(0, 0)).toBe(0);       
        });

    it('should be able to multiply as many numbers possibe', () => {
        expect(multiply2(1, 2, 3, 4)).toBe(24);
        });

});