// CLOSURE
function outerFunction(outerVariable) {
  return function innerFunction() {
    console.log(outerVariable);
  }
}
const closure = outerFunction('Hello, world!');
closure(); // Logs: Hello, world!
/*A closure in JavaScript is like a backpack a 
function carries around. Inside this backpack are all 
the variables that were in scope when the function was declared. 
Even if we are far away from where the function was originally
created, it still has its backpack with all those variables
inside. So, a closure is a function with a backpack of variables.*/

// EVENT DELEGATION
let element = document.getElementById('parent-list');
element.addEventListener('click', function(e) {
  if(e.target && e.target.nodeName == "LI") {
    console.log( e.target.id);
  } } );
/* Event delegation is a technique in JS  where you assign 
an event listener to a parent element
instead of each child element. When a child is clicked,
the event "bubbles up" to the parent, which can handle
the event. This makes your code more efficient, especially
when you have many elements, or when they change dynamically.*/

// HOISTING, synonyms: Lift up, raise up or elevate
// Hoisting is a JavaScript mechanism where variables 
// and function declarations are moved to the top of their scope before code execution.


// ASYNC/AWAIT
async function getGithubData() {
  try {
    let response = await fetch('https://api.github.com');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getGithubData();
// async marks a function as asynchronous, meaning it returns a Promise.
// await pauses the function execution till the Promise resolves or rejects.

//IIFE Function
(function() {
  var message = 'Hello, world!';
  console.log(message); // Outputs: 'Hello, world!'
})();


//ARRAYS
let arr = [1, 2, 3, 4, 5];

//GRAPH
let graph = {
  a: ['b', 'c'],
  b: ['a', 'd'],
  c: ['a', 'd'],
  d: ['b', 'c'],
};


let hashTable = {
  'key1': 'value1',
  'key2': 'value2',
  'key3': 'value3',
};
