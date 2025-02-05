// Function Declarations (Named Functions

function greet() {
  console.log("Hello, World!");
}
greet();

// Function Expressions
// A function assigned to a variable. These are not hoisted.

const greet = function() {
  console.log("Hello, World!");
};
greet();

// Arrow Functions (ES6)
// A concise syntax for writing functions. They do not have their own this context, making them useful in certain situations like callbacks.


const greet = () => {
  console.log("Hello, World!");
};
greet();


// Anonymous Functions
// Functions without a name, often used as callbacks.


setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);


// Immediately Invoked Function Expressions (IIFE)
// Functions that run as soon as they are defined.


(function() {
  console.log("IIFE executed!");
})();

// Constructor Functions
// Used to create objects. When called with new, they act as a constructor.


function Person(name) {
  this.name = name;
}
const person = new Person("Ajmal");
console.log(person.name);

// Generator Functions (ES6)
// Functions that can pause and resume their execution using yield.


function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); // 1


// Async Functions (ES8)
// Used for asynchronous operations, often with await.   //////////////////(ES8)


async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}



// Recursive Functions
// Functions that call themselves, commonly used for tasks like factorials or traversing data structures.


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120



// Higher-Order Functions
// Functions that take other functions as arguments or return functions.


function higherOrder(callback) {
  callback();
}
higherOrder(() => console.log("Hello from a callback!"));
