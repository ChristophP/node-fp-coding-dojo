# Node FP Coding Dojo

## Absolute basics

1. Using functions
- functions are first class citizens
- higher order functions

Excercise:

Make a function more flexible by extending thing to take a callback.

2. pure functions and immutabilty

- rewrite same function, without side effects

side effects are

    changing the file system
    inserting a record into a database
    making an http call
    mutations
    printing to the screen / logging
    obtaining user input
    querying the DOM
    accessing system state

3. Type signatures,

- Hindley Milner

Excerises
- add type signatures to functions
- make type signature more generic

4. Currying and partial application

- currying enables partial application,
- create new functions by applying only some of the arguments
- argument order, data structure last
- show type signature reduction
- something is a list is not enough(list of what)?

Excercises:
- create new functions by partially applying existing ones
- write the type signatures

5. Composing functions

- composing two functions
- pointfree style


Excercises:
- rewrite things in point-free style where possible
- compose existing functions instead of using new functions
- write the type signatures

-- BREAK

## Alterenatives, Optional Values and Error Handling

6. Union type

- What is a union type


Excercise:
- Weekday example
- Create your own boolean type

7. Maybe

- explicit non-existance
- get first element from a list

Excercise:
- parse an integer
- combining two maybes
- refactoring double match, to use map or chain

8. Error Handling
