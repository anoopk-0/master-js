JavaScript is a single-threaded programming language which means only one thing can happen at a time. That is, the JavaScript engine can only process one statement at a time in a single thread.

While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread.

Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.

That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.

## How Does Synchronous JavaScript Work?

    const second = () => {
        console.log('Hello there!');
    }
    const first = () => {
        console.log('Hi there!');
        second();
        console.log('The End');
    }
    first();

code executes inside the JavaScript engine,

### Execution Context

An Execution Context is an abstract concept of an environment where the JavaScript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.

The function code executes inside the function execution context, and the global code executes inside the global execution context. Each function has its own execution context.

Call Stack

The call stack as its name implies is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.

JavaScript has a single call stack because it’s a single-threaded programming language. The call stack has a LIFO structure which means that the items can be added or removed from the top of the stack only.

![call stack](https://miro.medium.com/max/1400/1%2ADkG1a8f7rdl0GxM0ly4P7w.png)

So What’s Happening Here?
When this code is executed, a global execution context is created (represented by main()) and pushed to the top of the call stack. When a call to first() is encountered, it’s pushed to the top of the stack.

Next, console.log('Hi there!') is pushed to the top of the stack, when it finishes, it’s popped off from the stack. After it, we call second(), so the second() function is pushed to the top of the stack.

console.log('Hello there!') is pushed to the top of the stack and popped off the stack when it finishes. The second() function finishes, so it’s popped off the stack.

console.log(‘The End’) is pushed to the top of the stack and removed when it finishes. After it, the first() function completes, so it’s removed from the stack.

The program completes its execution at this point, so the global execution context(main()) is popped off from the stack.

## How Does Asynchronous JavaScript Work?

    const processImage = (image) => {
        /**
        * doing some operations on image
        **/
        console.log('Image processed');
    }
    const networkRequest = (url) => {
        /**
        * requesting network resource
        **/
        return someData;
    }
    const greeting = () => {
        console.log('Hello World');
    }

processImage(logo.jpg);
networkRequest('www.somerandomurl.com');
greeting();

Doing image processing and network request takes time. So when processImage() function is called, it’s going to take some time depending on the size of the image.

When the processImage() function completes, it’s removed from the stack. After that the networkRequest() function is called and pushed to the stack. Again it’s also going to take some time to finish execution.

At last when the networkRequest() function completes, greeting() function is called and since it contains only a console.log statement and console.log statements are generally fast, so the greeting() function is immediately executed and returned.

So you see, we have to wait until the function (such as processImage() or networkRequest()) has finished. This means these functions are blocking the call stack or main thread. So we can’t perform any other operation while the above code is executing which is not ideal.

## So what’s the solution?

The simplest solution is asynchronous callbacks. We use asynchronous callbacks to make our code non-blocking. For example:

    const networkRequest = () => {
        setTimeout(() => {
           console.log('Async Code');
        }, 2000);
    };

console.log('Hello World');
networkRequest();

To understand how this code is executed we have to understand a few more concepts such event loop and the callback queue (also known as task queue or the message queue).

![async call stack](https://miro.medium.com/max/1400/1%2AO_H6XRaDX9FaC4Q9viiRAA.png)

IMP:
The event loop, the web APIs and the message queue/task queue are not part of the JavaScript engine, it’s a part of browser’s JavaScript runtime environment or Nodejs JavaScript runtime environment (in case of Nodejs). In Nodejs, the web APIs are replaced by the C/C++ APIs.

    const networkRequest = () => {
        setTimeout(() => {
            console.log('Async Code');
        }, 2000);
    };

console.log('Hello World');
networkRequest();
console.log('The End');

![exect](https://miro.medium.com/max/1400/1%2AsOz5cj-_Jjv23njWg_-uGA.gif)

When the above code loads in the browser, the console.log(‘Hello World’) is pushed to the stack and popped off the stack after it’s finished. Next, a call to networkRequest() is encountered, so it’s pushed to the top of the stack.

Next setTimeout() function is called, so it’s pushed to the top of the stack. The setTimeout() has two arguments: 1) callback and 2) time in milliseconds (ms).

The setTimeout() method starts a timer of 2s in the web APIs environment. At this point, the setTimeout() has finished and it’s popped off from the stack. After it, console.log('The End') is pushed to the stack, executed and removed from the stack after its completion.

Meanwhile, the timer has expired, now the callback is pushed to the message queue. But the callback is not immediately executed, and that’s where the event loop kicks in.

The Event Loop
The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. If the call stack is empty, it looks into the message queue to see if there’s any pending callback waiting to be executed.

In this case, the message queue contains one callback, and the call stack is empty at this point. So the Event loop pushes the callback to the top of the stack.

After that the console.log(‘Async Code’) is pushed to the top of the stack, executed and popped off from the stack. At this point, the callback has finished so it’s removed from the stack and the program finally finishes.

DOM Events
The Message queue also contains the callbacks from the DOM events such as click events and keyboard events.

In case of DOM events, the event listener sits in the web APIs environment waiting for a certain event (click event in this case) to happen, and when that event happens, then the callback function is placed in the message queue waiting to be executed.

Again the event loop checks if the call stack is empty and pushes the event callback to the stack if it’s empty and the callback is executed.

We have learned how the asynchronous callbacks and DOM events are executed which uses the message queue to store all the callbacks waiting to be executed.

ES6 Job Queue/ Micro-Task queue
ES6 introduced the concept of job queue/micro-task queue which is used by Promises in JavaScript. The difference between the message queue and the job queue is that the job queue has a higher priority than the message queue, which means that promise jobs inside the job queue/ micro-task queue will be executed before the callbacks inside the message queue.
