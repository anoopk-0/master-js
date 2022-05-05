/*
No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

The “try…catch” syntax
The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}

It works like this:

1. First, the code in try {...} is executed.
2. If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
3. If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.
*/

/*
NOTE:
For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
*/

/*
NOTE:
try...catch works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}
That’s because the function itself is executed later, when the engine has already left the try...catch construct.

To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);
 */

/*
TOPIC: “Throw” operator

The throw operator generates an error.
*/

/*
TOPIC: try…catch…finally

The try...catch construct may have one more code clause: finally.

If it exists, it runs in all cases:

after try, if there were no errors,
after catch, if there were errors.
*/

try {
  //... try to execute the code ...
} catch (err) {
  // ... handle errors ...
} finally {
  // ... execute always ...
}

/**
 The code has two ways of execution:

If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
If you say “No”, then try -> finally.
The finally clause is often used when we start doing something and want to finalize it in any case of outcome.
 */
