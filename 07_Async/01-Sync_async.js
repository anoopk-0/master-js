/*
NOTE:

JavaScript is a single-threaded programming language which means only one thing can happen at a time. That is, the JavaScript engine can only process one statement at a time in a single thread.

Synchronous code runs in sequence. This means that each operation must wait for the previous one to complete before executing. It is also know as blocking.
Asynchronous code runs in parallel. This means that an operation can occur while another one is still being processed.

Build in async method
- XMLHttpRequest methods
- setTimeout()
- requestAnimationFrame()
*/

console.log("before...");

//simulate an async operation
//IMP:setTimeout is not a part of the JavaScript engine, it’s a part of something known as web APIs (in browsers) and C/C++ APIs (in node.js).
setTimeout(function () {
  console.log("calling a database....");
}, 2000);

console.log("After...");

/*
OUTPUT:
    `before...
    After...
    calling a database....`

 setTimeout: schedule a task to be perform later.. and execution move to next line.  
*/
