const {
  add,
  increment,
  decrement,
  splitCsv,
  numbersToBooleans
} = require("./index");

describe("add", () => {
  test("is a curried function", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(1)(2)).toBe(3);
  });
});

describe("increment", () => {
  test("increments a number", () => {
    expect(increment(1)).toBe(2);
  });
});

describe("decrement", () => {
  test("decrements a number", () => {
    expect(decrement(1)).toBe(0);
  });
});

describe("splitCsv", () => {
  test("splits a csv string", () => {
    expect(splitCsv("hello;peter")).toEqual(["hello", "peter"]);
  });
});

describe("numbersToBooleans", () => {
  test("turns integers into numbers", () => {
    expect(numbersToBooleans([1, 2, 3])).toEqual([false, true, false]);
  });
});
