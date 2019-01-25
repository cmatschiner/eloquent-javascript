// Chapter 6 / Exercise 1: A Vector Type

class Vec { // Vec prototype
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
     // Method 1: plus
    plus(object) {
        // use object since method(new object instance) and not method(parameter)
        // i.e console.log(object) -> Vec {key1, key2}
        this.x += object.x; // adds x value of vector 2 to x value of vector 1
        this.y += object.y; // adds y value of vector 2 to y value of vector 1
        return new Vec (this.x, this.y); // returns new object instance
    }

     // Method 2: minus
    minus (object) {
        this.x -= object.x;
        this.y -= object.y;
        return new Vec (this.x, this.y);
    }

    // Getter
    get length () {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3))); // → Vec{x: 3, y: 5}

// Alternative for latter code line:
let vec1 = new Vec(1, 2);
let vec2 = new Vec(2, 3);
console.log(vec1.plus(vec2));

console.log(new Vec(1, 2).minus(new Vec(2, 3))); // → Vec{x: -1, y: -1}

console.log(new Vec(3, 4).length); // → 5