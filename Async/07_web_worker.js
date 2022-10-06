/**
 * 
web worker: it is a js process running in the background of a web page.

IMP:difference b/w main and web worker is that, web worker cannot perform DOM manipulation.

 * Modern Browsers support some newer additions to javaScript that make use of additional threads. one of these newer addition is web worker.
 
* A web worker enables you to specify code that will be executed in it's own thread, on the processor separate from browser thread. this enables us to make our code async and also allow app to do multiple things at once by leveraging one or more additional processor threads.
 *
 * With a web worker, our app sends a message to the code running in the additional thread. this code does the requested work on it's thread, then response with it's own message. Which is often contains data that's then used in our app.
 *
 * for extensive Maths Calc.
 */

function scriptInOtherFile() {
  this.on("message", function (e) {
    console.log(e);
  });
  postMessage("some data or result"); // sending data back to main thread
}

/**
 * @param(workerScript) : refer to a script that should be executed by the worker.
 */
const worker = new Worker("workerScript.js");

//postMessage: to send data, through event
worker.postMessage("send message to worker");

//getting msg from worker
worker.addEventListener("message", function (e) {
  console.log(e.datas);
});
