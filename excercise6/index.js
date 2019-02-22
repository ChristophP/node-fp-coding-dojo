/* eslint-disable no-unused-vars */
const { prop, compose, map, sum, curry } = require("ramda");
const { Maybe, matchWith } = require("funpro");

// create a Just value that contains the number 4
const justFour = null;

// create a Null Value
const nothing = null;

// write a safeHead function which takes a list and returns "Just" its first element
// or "Nothing" if the list is empty
// safeHead :: [a] -> Maybe a
const safeHead = list => undefined;

// write a safeProp function which accesses the property on an object
// and returns "Just value" or "Nothing" if the value does not exist
// count null and undefined as "does not exist"
// safeProp :: Object -> Maybe a
const safeProp = curry((key, obj) => undefined);

// map this maybe value to be "Just ("Hello Peter")"
// greetMaybe :: Maybe String
const greetMaybe = Maybe.Just("Hello").map(Function.prototype);

// just for understanding: create a nothing value and map it the same way as
// for the greet maybe, the value will still stay a nothing.
const greetNothing = undefined;

const data = {
  users: [{ name: "Peter", age: 24 }, { name: "Tom", age: 22 }]
};
// instead of mapping three times map the maybe only and compose the functions
// sumOfUsersAge :: Maybe Int
const sumOfUsersAge = Maybe.Just(data)
  .map(prop("users"))
  .map(map(prop("age")))
  .map(sum);

// get the first user by using safeProp to get the users
// the "chain" a new Maybe and call safeHead
// The result should be Maybe({ name: "Peter", age: 24 })
// chainOfMaybes :: Maybe User
const firstUser = undefined;

// write the same chain as fir firstUser, but access "nonExistingKey" in safeProp
// the whole chain should short circuit to Nothing
const shortChain = undefined;

module.exports = {
  justFour,
  nothing,
  safeHead,
  safeProp,
  greetMaybe,
  greetNothing,
  sumOfUsersAge,
  firstUser
};
