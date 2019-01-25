class Person {
    /* The class statement indicates that we are creating a new class. 
    Inside this block, we define all the features of the class: */
    constructor(first, last, age, gender, interests) {
      /* The constructor() method defines the constructor function 
      that represents our Person class. */
      this.name = {first, last};
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
    /* greeting() and farewell() are class methods. Any methods you 
    want associated with the class are defined inside it, after the 
    constructor. In this example, we've used template literals rather 
    than string concatenation to make the code easier to read: */
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

/* We can now instantiate object instances using the new operator, in just the 
same way as we did before: */
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting(); // -> Hi! I'm Han
let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell(); // -> Leia has left the building. Bye for now


// Inheritance with class syntax
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      this.name = {
        first,
        last
      };
  
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
    }
  }