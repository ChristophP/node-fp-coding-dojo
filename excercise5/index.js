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

// also rewrite the min and max function to not use statements and only expressions
// min :: Int -> Int -> Int
const min = minimum => number => {
  if (number < minimum) {
    return number;
  }
  return minimum;
};

// write a clamp function which clamps an interger between 10 and 18
// use composition of a min and a max function and partially apply them
// clampBetween10and18 :: Int -> Int
const clampBetween10and18 = Function.prototype;

module.exports = {
  myCompose,
  dateTransform,
  sumEvenNumbers,
  clampBetween10and18
};
