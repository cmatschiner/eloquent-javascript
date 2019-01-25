// Chapter 6 / Exercise 2:  Groups

class Group { 
    constructor() {  
    }

    // Method 1: add
    add(numValue) { 
        return "crap";
      }

    // Method 3: delete
    delete(numValue) { 
        return "crap";
      }

    // Method 3: has
    has(numValue) { 
        console.log(numValue);
        return false;
    }

    // Static method: from
    static from(input) { 
        return new input;
      }
  }


  let group = Group.from([10, 20]);
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false