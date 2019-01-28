// Chapter 6 / Exercise 3:  Iterable Groups

class Group { 
    constructor(array) {
        this.index = 0;
        this.array = array;
    }
    // Method 1: add
    add(value) { 
        if (this.array.includes(value) === false) this.array.push(value);
      }
    // Method 3: delete
    delete(value) { 
        if(this.array.includes(value) === true) {
            let indexElement = this.array.indexOf(value);
            delete this.array[indexElement];
            return this.array;
        }
      }
    // Method 3: has
    has(value) { 
        return this.array.includes(value);
    }
    // Method 4: Symbol.iterator
    [Symbol.iterator]() {
        return new GroupIterator(this.array);
      }
      // Static method: from
    static from(collection) {
        return new Group(collection);
    }
  }

  
  class GroupIterator {
      constructor(array) {
          this.index = 0;
          this.array = array;
      }
      // Method 1: next
      next () {
        if (this.index < this.array.length) {
            return {value: this.array[this.index++], done: false};
            // returns {value: arrayValuw, done: false}
          } else {
              return {done: true};
              // returns {value: undefined, done: true}
          }
      }
  }

  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }