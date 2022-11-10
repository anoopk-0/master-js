/**
TODO: JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

TODO: String Methods

    TODO: Extracting String Parts
    There are 3 methods for extracting a part of a string:

        slice(start, end) :  extracts a part of a string and returns the extracted part in a new string.If a parameter is negative, the position is counted from the end of the string.

        substring(start, end): substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

        substr(start, length) : substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

    TODO: Converting a String to an Array

        A string can be converted to an array with the split() method.
*/
let text = "a,b,c,d,e,f";
text.split(","); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

/**
TODO: String Search

    - The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.
    - The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

        **Both methods accept a second parameter as the starting position for the search. Both indexOf(), and lastIndexOf() return -1 if the text is not found

    - The search() method searches a string for a specified value and returns the position of the match.

    NOTE: The two methods are NOT equal. These are the differences:
            The search() method cannot take a second start position argument.
            The indexOf() method cannot take powerful search values (regular expressions).

    - The includes(): [string.includes(searchvalue, start)] : method returns true if a string contains a specified value.
*/
