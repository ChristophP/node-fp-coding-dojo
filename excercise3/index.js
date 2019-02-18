/* eslint-disable no-unused-vars */

// identity :: a -> a
const identity = val => val;

const toUpper = str => str.toUpperCase();

const isEven = num => num % 2 === 0;

const arrayPush = (val, array) => [...array, val];

const not = bool => !bool;

const map = (func, arr) => arr.map(func);

const slice = (start, end, str) => str.slice(start, end);

const arrayConcat = ([firstArray, ...restArrays]) =>
  firstArray.concat(...restArrays);
