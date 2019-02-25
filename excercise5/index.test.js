const {
  myCompose,
  dateTransform,
  sumEvenNumbers,
  clampBetween10and18
} = require("./index");

describe("myCompose", () => {
  test("composes two functions", () => {
    const f = str => str.length;
    const g = num => num % 2 === 0;

    const composedFn = myCompose(g, f);

    expect(composedFn("Peter!")).toBe(g(f("Peter!")));
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

describe("clampBetween10and18", () => {
  test("clamps a value between 10 and 18", () => {
    expect(clampBetween10and18(7)).toBe(10);
    expect(clampBetween10and18(100)).toBe(18);
    expect(clampBetween10and18(11)).toBe(11);
  });
});
