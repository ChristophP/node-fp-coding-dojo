const { Maybe } = require("funpro");
const {
  justFour,
  nothing,
  safeHead,
  safeProp,
  greetMaybe,
  greetNothing,
  sumOfUsersAge,
  firstUser,
  shortChain
} = require("./index");

describe("justFour", () => {
  test("is just four", () => {
    expect(justFour.equals(Maybe.Just(4))).toBe(true);
  });
});

describe("nothin", () => {
  test("is nothing", () => {
    expect(nothing.equals(Maybe.Nothing())).toBe(true);
  });
});

describe("safeHead", () => {
  test("is just when the list has items", () => {
    expect(safeHead([1, 2, 3, 4]).equals(Maybe.Just(1))).toBe(true);
  });

  test("is Nothing when the list is empty", () => {
    expect(safeHead([]).equals(Maybe.Nothing())).toBe(true);
  });
});

describe("safeProp", () => {
  test("is just when the key exists and is defined", () => {
    expect(safeProp("a", { a: 10 }).equals(Maybe.Just(10))).toBe(true);
  });

  test("is Nothing when the key does not exist or is null", () => {
    expect(safeProp("someKey", {}).equals(Maybe.Nothing())).toBe(true);
  });
});

describe("greetMaybe", () => {
  test("says hi to a Peter", () => {
    expect(greetMaybe.equals(Maybe.Just("Hello Peter"))).toBe(true);
  });
});

describe("greetNothing", () => {
  test("is still nothing", () => {
    expect(greetNothing.equals(Maybe.Nothing())).toBe(true);
  });
});

describe("sumOfUsersAge", () => {
  test("should be 46", () => {
    expect(sumOfUsersAge.equals(Maybe.Just(46))).toBe(true);
  });
});

describe("firstUser", () => {
  test("should be just peter", () => {
    expect(firstUser.equals(Maybe.Just({ name: "Peter", age: 24 }))).toBe(true);
  });
});

describe("shortChain", () => {
  test("is nothing", () => {
    expect(shortChain.equals(Maybe.Nothing())).toBe(true);
  });
});
