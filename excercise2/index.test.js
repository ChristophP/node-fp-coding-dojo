const { transformArray, setProp, purePush } = require("./index");

describe("transformArray", () => {
  test("returns a new transformed array", () => {
    const input = ["this", "should", "be", "uppercase"];
    const result = transformArray(a => a.toUpperCase(), input);

    expect(result).toEqual(["THIS", "SHOULD", "BE", "UPPERCASE"]);
    expect(result).not.toBe(input);
  });
});

describe("setProp", () => {
  test("returns a new object with a new key", () => {
    const input = { first: 3, second: "hello" };
    const result = setProp("third", false, input);

    expect(result).toEqual({ first: 3, second: "hello", third: false });
    expect(result).not.toBe(input);
  });
});

describe("purePush", () => {
  test("returns a new array with one more element", () => {
    const input = [1, 2, 3];
    const result = purePush(4, input);

    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).not.toBe(input);
  });
});
