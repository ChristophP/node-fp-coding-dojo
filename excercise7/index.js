/* eslint-disable no-unused-vars */
const { prop, compose, map, sum, curry } = require("ramda");
const { Maybe, matchWith } = require("funpro");

// create an Ok value with the number 4
// err :: Result err Int
const ok = undefined;

// create an Err value with the message 'WTF'
// err :: Result String a
const err = undefined;

// write a safeJsonParse function which returns Ok(json) if successful or
// Err(error) if it throws. Use try catch in the implementatio.
// safeJsonParse :: String -> Result Error Json
const safeJsonParse = json => {};

// write a safeDate function which returns Ok(Date) if successful or
// Err(error) if it throws. Use try catch in the implementatio.
// safeJsonParse :: String -> Result Error Date
const safeDate = dateStr => {};

// map the ok value from above and double the number it contains
const mappedOk = ok;

// map the error value from above. Nothing should happen
const mappedErr = undefined;

// map the error value from above using `.mapError` and turn the 'WTF' into 'OMG'
const realMappedErr = undefined;

const validDate = `{ date: '2019-02-10' }`;

// parse the data with safeJsonParse and then map to access the date property
// Next chain to turn the data into a date
const parseData = undefined;

const inValidDate = `{ date: '2019-33-87' }`;
// do the same thing as with parseData but this time parse "invalidData" first
// this should cause the chain to short circuit
const errorChain = undefined;

module.exports = {
  ok,
  err,
  safeJsonParse,
  safeDate,
  mappedOk,
  mappedErr,
  realMappedErr,
  parseData,
  errorChain
};
