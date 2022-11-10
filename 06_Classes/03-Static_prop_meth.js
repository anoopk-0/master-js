/*
Static methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.

For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().

They are labeled by the word static in class declaration.

Static properties are used when we’d like to store class-level data, also not bound to an instance.
*/

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true
