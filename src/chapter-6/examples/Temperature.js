class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
      /* The get syntax binds an object property to a 
      function that will be called (executed) when that 
      property is looked up. */
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
      /* The set syntax binds an object property to a 
      function to be called when there is an attempt to 
      set that property. */
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
      /* The static keyword defines a static method for 
      a class. Static methods aren't called on instances 
      of the class. Instead, they're called on the class 
      itself. These are often utility functions, such as 
      functions to create or clone objects. */
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
console.log(temp.celsius);
// → 22
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30