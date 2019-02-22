const { Task } = require("funpro");

const githubApiResponse = [
  {
    id: 1296269,
    name: "Hello-World",
    full_name: "octocat/Hello-World",
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80
  },
  {
    id: 1296269,
    name: "Foo-Bar",
    full_name: "octocat/Hello-World",
    forks_count: 1,
    stargazers_count: 333,
    watchers_count: 24
  }
];

const task = Task.succeed(3);

// kick off the application with `task.run`
task.run();
