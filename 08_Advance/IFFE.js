/*That construct is called an Immediately Invoked Function Expression (IIFE) which means it gets executed immediately. Think of it as a function getting called automatically when the interpreter reaches that function.

Most Common Use-case:

One of its most common use cases is to limit the scope of a variable made via var. Variables created via var have a scope limited to a function so this construct (which is a function wrapper around certain code) will make sure that your variable scope doesn't leak out of that function.

In following example, count will not be available outside the immediately invoked function i.e. the scope of count will not leak out of the function. You should get a ReferenceError, should you try to access it outside of the immediately invoked function anyway.
*/
(function () {
  var count = 10;
})();

console.log(count); // Reference Error: count is not defined

/*
ES6 Alternative (Recommended)
In ES6, we now can have variables created via let and const. Both of them are block-scoped (unlike var which is function-scoped).

Therefore, instead of using that complex construct of IIFE for the use case I mentioned above, you can now write much simpler code to make sure that a variable's scope does not leak out of your desired block.
*/
{
  let count = 10;
}
console.log(count); // ReferenceError: count is not defined
