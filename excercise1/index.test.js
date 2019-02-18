const R = require("ramda");
const { transformArray, makeIncrementer, identity } = require("./index");

describe("arraytoUppercase", () => {
  test("takes a function and an array applies the function to each element(map)", () => {
    const result = transformArray(a => a.toUpperCase(), [
      "this",
      "should",
      "be",
      "uppercase"
    ]);
    expect(result).toEqual(["THIS", "SHOULD", "BE", "UPPERCASE"]);
  });
});

describe("makeIncrementer", () => {
  test("takes a number and returns a new function which takes another number and adds the two", () => {
    const increment = makeIncrementer(1);
    expect(increment(3)).toBe(4);
    const addTwo = makeIncrementer(2);
    expect(addTwo(3)).toBe(5);
  });
});

describe("identity", () => {
  test("takes an argument and just returns it", () => {
    expect(identity).not.toBe(R.identity);
    expect(identity(3)).toBe(3);
    expect(identity("hello")).toBe("hello");
    expect([1, 2, 3]).Equal([1, 2, 3]);
  });
});
