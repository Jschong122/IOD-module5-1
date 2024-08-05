// import { addNumbers } from "../controller/calculatorController";

function square(a) {
  return a * a;
}
module.exports = { square };
const square = require("./square");
// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
test("square 5 to get 25", () => {
  expect(square(5)).toBe(25);
});

describe("addNumbers function for calculator", () => {
  it(`should add two number`, () => {
    const number1 = 10;

    const result = square(number1);
    1;
    expect(result).toBe(number1 + number1);
  });
});
