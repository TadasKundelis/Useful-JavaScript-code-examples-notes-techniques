function LazyChain(target) {
    this.target = target;
    this.functions = [];
}

//method to register functions
LazyChain.prototype.invoke = function(fn, args) {
    this.functions.push(function(input){
        return fn.call(this, input, args);
    })
    return this;
}

//execute registered functions
LazyChain.prototype.force = function() {
    return this.functions.reduce(function(input, fn) {
        return fn(input);
    }, this.target)
};

//some sample functions
function add5(args) {
    return args.map(x => x + 5);
}

function multiplyBy3(args) {
    return args.map(x => x * 3);
}

function subtract(args, num) {
    return args.map(x => x - num);
}

//example
new LazyChain([1,2,3])
    .invoke(add5) // [6, 7, 8]
    .invoke(multiplyBy3) // [18, 21, 24]
    .invoke(subtract, 14) // [4, 7, 10]
    .force();


