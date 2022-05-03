// Recursion is a programming term that means calling a function from itself. Recursive functions can be used to solve tasks in elegant ways.When a function calls itself, that’s called a recursion step. The basis of recursion is function arguments that make the task so simple that the function does not make further calls.A recursively-defined data structure is a data structure that can be defined using itself.

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

alert(pow(2, 3)); // 8

//recursive
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8

/*
When pow(x, n) is called, the execution splits into two branches:

              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
              
If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x.
Otherwise, we can represent pow(x, n) as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). Next steps simplify it further and further until n reaches 1.  
  
*/

/*
//IMP: Linked list
we want to store an ordered list of objects.

The natural choice would be an array:
    let arr = [obj1, obj2, obj3];

…But there’s a problem with arrays. The “delete element” and “insert element” operations are expensive. For instance, arr.unshift(obj) operation has to renumber all elements to make room for a new obj, and if the array is big, it takes time. Same with arr.shift().

The only structural modifications that do not require mass-renumbering are those that operate with the end of array: arr.push/pop. So an array can be quite slow for big queues, when we have to work with the beginning.

The linked list element is recursively defined as an object with:

    -value.
    -next property referencing the next linked list element or null if that’s the end.


instance
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/
