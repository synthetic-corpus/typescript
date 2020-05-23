interface Person {
  // Interface descibes the structure of an object.
  // Used as a custom type? Not a class.
  // No concrete values entered.
  name: string;
  age: number;

  // Method is described here, but not actually written.
  greet(phrase: string): void;
}

/* Why use this? You can type check an object. */

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');