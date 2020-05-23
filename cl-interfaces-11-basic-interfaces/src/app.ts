interface Greetable {
  /* How is an interface used in a fucking object? */
  name: string;

  // Method is described here, but not actually written.
  greet(phrase: string): void;
}

/* Why use this? You can type check an object. */
/* This class must included the structure of the interface */
class Person implements Greetable {
  
  constructor(
    public name: string,
    public age: number
    ){}

    greet(phrase: string){
      console.log(`${phrase} - my name ${this.name}`)
    }
}
/* Interface can be implented in a object. Types can't. Hence, why we didn't just use "type" */

let user1 = new Person('Joel',30);

user1.greet('Hi there - I am');