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

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        /* By defining the super() operator as the first item inside the 
        constructor(), the parent class' constructor is called, and inherits 
        the members we specify as parameters of super(), as long as they are 
        defined in Matrix */
      super(size, size, (x, y) => {
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }
    set(x, y, value) {
      super.set(x, y, value); // ???
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3)); // → 3,2