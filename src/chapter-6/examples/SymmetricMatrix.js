class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

/* Some matrices are known to be symmetric. If you mirror a symmetric 
matrix around its top-left-to-bottom-right diagonal, it stays the same. In 
other words, the value stored at x,y is always the same as that at y,x. */

class SymmetricMatrix extends Matrix {
    /* The use of the word extends indicates that this class shouldn’t be 
    directly based on the default Object prototype but on the class Matrix. 
    Latter is called the superclass. The derived class SymmetricMatrix is 
    the subclass. */
    constructor(size, element = (x, y) => undefined) {
        /* To initialize a SymmetricMatrix instance, the constructor calls 
        its superclass’s constructor through the super keyword. This is 
        necessary because if this new object is to behave (roughly) like 
        the class Matrix, it is going to need the instance properties 
        that class has. */
      super(size, size, (x, y) => {
          /* To ensure the matrix is symmetrical, the constructor wraps 
          the content method to swap the coordinates for values below 
          the diagonal. */
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }
    /* The set method again uses super but this time not to call the 
    parent classes' constructor but to call a specific method (set) 
    from the superclass’s set of methods (get and set): */
    set(x, y, value) {
      super.set(x, y, value);
      /* We are redefining set but do want to use the original behavior. 
      Because this.set refers to the new set method, calling that 
      wouldn’t work. Inside class methods, super provides a way to call 
      methods as they were defined in the superclass. */
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3)); // → 3,2