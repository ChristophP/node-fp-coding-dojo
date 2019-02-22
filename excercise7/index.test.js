const { Result, matchWith } = require("funpro");
const {
  ok,
  err,
  safeJsonParse,
  safeDate,
  mappedOk,
  mappedErr,
  realMappedErr,
  parseData,
  errorChain
} = require("./index");

describe("ok", () => {
  test("is ok four", () => {
    expect(ok.equals(Result.Ok(4))).toBe(true);
  });
});

describe("err", () => {
  test("is an err with 'WTF'", () => {
    expect(err.equals(Result.Err("WTF"))).toBe(true);
  });
});

describe("safeJsonParse", () => {
  test("parses a valid Json", () => {
    expect(safeJsonParse("{}").equals(Result.Ok({}))).toBe(true);
  });

  test("is an err if parsing fails", () => {
    const res = safeJsonParse("{sjkfhdskhf}");
    const isErr = matchWith(res, {
      Ok: () => false,
      Err: () => true
    });
    expect(isErr).toBe(true);
  });
});

describe("safeDate", () => {
  test("parses a valid Date", () => {
    const isOk = matchWith(safeDate(10), {
      Ok: () => true,
      Err: () => false
    });
    expect(isOk).toBe(true);
  });

  test("is an err if parsing fails", () => {
    const isErr = matchWith(safeDate("2030-88-99"), {
      Ok: () => false,
      Err: () => true
    });
    expect(isErr).toBe(true);
  });
});

describe("mappedOk", () => {
  test("isO k", () => {
    expect(mappedOk.equals(Result.Ok(8))).toBe(true);
  });
});

describe("mappedErr", () => {
  test("is Err", () => {
    expect(mappedErr.equals(Result.Err("WTF"))).toBe(true);
  });
});

describe("realMappedErr", () => {
  test("is Err", () => {
    expect(realMappedErr.equals(Result.Err("OMG"))).toBe(true);
  });
});

describe("parseData", () => {
  test("is an Ok with a date", () => {
    expect(parseData.equals(Result.Ok(new Date("2019-02-10")))).toBe(true);
  });
});

describe("errorChain", () => {
  test("is an Err with a date", () => {
    const isErr = matchWith(errorChain, {
      Ok: () => false,
      Err: () => true
    });
    expect(isErr).toBe(true);
  });
});
