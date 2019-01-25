// Chapter 6 / Exercise 2:  Groups
// Version 1: with static method

class Group { 
    constructor(array) {
        this.array = array;
        this.collection = [];
    }

    // Method 1: add
    add(value) { 
        if (this.array.includes(value) === false) this.array.push(value);
        return this.array;
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

    // Static method: from
    static from(collection) {
        return new Group(collection);
    }
  }

  let group = Group.from([10, 20]);
  console.log(group.has(10)); // → true
  console.log(group.has(30)); // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10)); // → false
  group.add(40);
  console.log(group.has(40)); // → true


// Chapter 6 / Exercise 2:  Groups
// Version 2: without static method

class GroupNoStatic { 
    constructor(array) {
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
  }

let groupNoStatic = new GroupNoStatic([10,20]); 
// this is integrated into the static method from
console.log(groupNoStatic.has(10)); // → true
console.log(groupNoStatic.has(30)); // → false
groupNoStatic.add(10);
groupNoStatic.delete(10);
console.log(groupNoStatic.has(10)); // → false