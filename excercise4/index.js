/* eslint-disable no-unused-vars */

const { curry, split } = require("ramda");

// https://ramdajs.com/docs/#curry

// use the curry function to make this function curried
// add :: Number n => n -> n
const add = (a, b) => a + b;

// make an increment function using the curried add function
const increment = Function.prototype;

// make an increment function using the curried add function
const decrement = Function.prototype;

// make this function definition point free
// https://ramdajs.com/docs/#split
// splitCsv :: String -> [String]
const splitCsv = str => split(";", str);

// use isEven and Ramdas map to implement a function that takes a list of integers and
// turns it into a list of booleans indicating whether they are even.
// https://ramdajs.com/docs/#map

// isEven :: Int -> Bool
const isEven = num => num % 2 === 0;
// numbersToBooleans :: [Int] -> [Bool]
const numbersToBooleans = Function.prototype;

module.exports = {
  add,
  increment,
  decrement,
  splitCsv,
  numbersToBooleans
};
