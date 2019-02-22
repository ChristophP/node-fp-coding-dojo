/* eslint-disable no-unused-vars */
const { Task } = require("funpro");
const { match } = require("ramda");
const publicIp = require("public-ip");

// put the number 4 into a task using Task.succeed
// task :: Task Int
const task = undefined;

// create a failed Task with the string 'OMG'
// failedTask :: Task a
const failedTask = undefined;

// map the task from above to double the number
const mappedTask = task;

// create a Task with Task.of and Math.random to generate a task which produces
// a random number
// getRandom :: Task Float
const getRandom = undefined;

// use Task.of to and pass it a function which fetches your public v4 ip and returns
// a promise
// check out this documentation
// https://www.npmjs.com/package/public-ip
// fetchPublicIp :: Task String
const fetchPubliIp = undefined;

// map the fetchpublicIP task to check if the ip address belongs to the Burda network
const isBurdaIp = match(/^195\./);

// getIpAndCheckForBurda :: Task Bool
const getIpAndCheckForBurda = fetchPubliIp;

module.exports = {
  task,
  failedTask,
  mappedTask,
  getRandom,
  fetchPubliIp,
  getIpAndCheckForBurda
};
