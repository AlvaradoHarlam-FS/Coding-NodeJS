const  { add, mul, div, sub } = require("./string");

test('2 + 3 = 5', () => {
   expect(add(2, 3)).toBe(5);
});

test('3 * 20 = 60', () => {
    expect(mul(3, 20)).toBe(60);
});

test('50 / 2 = 25', () => {
    expect(div(50, 2)).toBe(25);
});

test('89 - 81 = 8', () => {
    expect(sub(89, 81)).toBe(8);
});




