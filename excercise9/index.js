const { Task } = require("funpro");

const task = Task.succeed(3);

// kick off the application with `task.run`
task.run();
