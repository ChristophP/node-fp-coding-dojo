const { compose } = require("ramda");

// myCompose :: (a -> b) -> (b -> c) -> (a -> c)
// mathematically this is f ∘ g
const myCompose = Function.prototype;

// write a function that turns dates like 'YYYY-MM-DD' to 'DD/MM/YYYY'
// use ramda functions like split, join and reverse with composition
// dateTransform :: String -> String
const dateTransform = Function.prototype;

// write a function that computes the sum of all even numbers using
// Ramda's filter and sum function
// sumEvenNumbers :: [Int] -> Int
const sumEvenNumbers = Function.prototype;

module.exports = {
  myCompose,
  dateTransform,
  sumEvenNumbers
};
