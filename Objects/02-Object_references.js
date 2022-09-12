/*
IMP:
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
*/

let message = "Hello!";
let phrase = message;

/*
As a result we have two independent variables, each one storing the string "Hello!".

Objects are not like that.
A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
Example:
*/

let user = {
  name: "John",
};

//IMP:When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let admin = user; // copy the reference

/*
TOPIC: Cloning and merging, Object.assign

So, copying an object variable creates one more reference to the same object.
*/

let _user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

for (let key in user) {
  clone[key] = user[key];
}

//IMP:use  Object.assign to replace for..in loop for simple cloning,
`Object.assign(dest, [src1, src2, src3...])`;

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(_user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

/*
TOPIC: Nested cloning
    `let user = {
          name: "John",
          sizes: {
            height: 182,
            width: 50
          }
      };`

because the user.sizes is an object, it will be copied by reference. So clone and user will share the same sizes:

We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

*/

function _deepClone(target) {
  if (typeof target === "object") {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = _deepClone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
