const toStringSymbol = Symbol();

// Definition of interface
Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`;
};

// Interface in action
console.log([0,1,2,4][toStringSymbol]());
// → 2 cm of blue yarn