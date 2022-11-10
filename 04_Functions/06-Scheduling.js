/*
There are two methods for it:

    - setTimeout allows us to run a function once after the interval of time.
    - setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

*/

let timerId1 = setTimeout(func | code, [delay], [arg1], [arg2], ...args);

function sayHi(phrase, who) {
  console.log(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

/**
If the first argument is a string, then JavaScript creates a function from it.
So, this will also work:

setTimeout("console.log('Hello')", 1000);

README: wrong!
setTimeout(sayHi(), 1000);

That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function, and the result of its execution is passed to setTimeout. In our case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled.


README:

Canceling with clearTimeout
A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

IMP: The syntax to cancel:
let timerId = setTimeout(...);
clearTimeout(timerId);
*/

//TOPIC: setInterval

let timerId = setInterval(func | code, [delay], [arg1], [arg2], ...args);

//All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time. To stop further calls, we should call clearInterval(timerId).

/*
README: 

Garbage collection and setInterval/setTimeout callback

IMP: For setInterval the function stays in memory until clearInterval is called.

There’s a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.


IMP:Zero delay setTimeout

There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.
*/

setTimeout(() => console.log("World"));

console.log("Hello");
