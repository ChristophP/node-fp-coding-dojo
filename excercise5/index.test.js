const { myCompose, dateTransform, sumEvenNumbers } = require("./index");

describe("myCompose", () => {
  test("composes two functions", () => {
    const f = str => str.length;
    const g = num => num % 2 === 0;

    const composedFn = myCompose(g, f);

    expect(composedFn("Peter!")).toBe(true);
    expect(g(f("Peter"))).toBe(true);
  });
});

describe("dateTransform", () => {
  test("transforms a date format", () => {
    expect(dateTransform("2018-12-14")).toBe("14/12/2018");
  });
});

describe("sumEvenNumbers", () => {
  test("computes the sum of even numbers", () => {
    expect(sumEvenNumbers([1, 2, 3, 4])).toBe(6);
  });
});
