const { Task } = require("funpro");
const {
  task,
  failedTask,
  mappedTask,
  getRandom,
  fetchPubliIp,
  getIpAndCheckForBurda
} = require("./index");

describe("task", () => {
  test("resolves with 4", () => {
    return expect(task.run()).resolves.toBe(4);
  });
});

describe("failedTask", () => {
  test("rejects", () => {
    return expect(failedTask.run()).rejects.toEqual('OMG');
  });
});

describe("mappedTask", () => {
  test("resolves with 8", () => {
    return expect(mappedTask.run()).resolves.toBe(8);
  });
});

describe("getRandom", () => {
  test("generated a random", () => {
    return expect(getRandom.run()).resolves.toEqual(expect.any(Number));
  });
});

describe("fetchPubliIp", () => {
  test("fetches the public ip", () => {
    return expect(fetchPubliIp.run()).resolves.toMatch(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
  });
});

describe("getIpAndCheckForBurda", () => {
  test("fetches the public ip and checks if its a burda ip", () => {
    return expect(task.run()).resolves.toBe(true);
  });
});
