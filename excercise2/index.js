// pure functions and immutability

// 1. turn this into a pure function that does not mutate data
const transformArray = (func, arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
};

// 2. turn this into a function that returns new data instead of mutating
const setProp = (prop, val, obj) => {
  obj[prop] = val;
  return obj;
};

// 3. make array push pure
const purePush = (val, arr) => {
  arr.push(val);
  return arr;
};

module.exports = {
  transformArray,
  setProp,
  purePush
};
