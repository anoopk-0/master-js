/**
 //TOPIC: The “script” tag
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

Please note:
    As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

    The benefit of a separate file is that the browser will download it and store it in its cache.

    Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

    That reduces traffic and makes pages faster.


 //TOPIC: The modern mode, "use strict"

“use strict”
The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

When we use a developer console to run code, please note that it doesn’t use strict by default.

Strict mode makes it easier to write "secure" JavaScript. Strict mode changes previously accepted "bad syntax" into real errors. As an example, in normal JavaScript, mistyping a variable name creates a new global variable.

       1. Disallows global variables. (Catches missing var declarations and typos in variable names)
       2. Attempts to delete un deletable properties will throw (delete Object.prototype)
       3. Requires all property names in an object literal to be unique (var x = {x1: "1", x1: "2"})
       4. Function parameter names must be unique (function sum (x, x) {...})
       5. Forbids octal syntax (var x = 023; some devs assume wrongly that a preceding zero does nothing to change the number.)
       6. Forbids deleting plain names (delete x;)

\*\* Modern JavaScript supports “classes” and “modules” – advanced language structures, that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.


*/
