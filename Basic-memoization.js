//return memoized version of function func                                               
function memoize(func) {
    if (func instanceof Function) {
        // if arity is not 1, return func                                
        if (func.length == 0 || func.length > 1) return func;

        const fn = function(input) {
            if (fn.memoizer.values[input] == null) {
                fn.memoizer.values[input] = func.call(func, input);
                fn.callCount++
            }
            return fn.memoizer.values[input];
        };
        //initialize memoizer
        fn.memoizer = {
            values: {}
        };
        fn.callCount = 0;
        return fn;
    } else {
        return func;
    }
}


function fibbonaci(num) {
    if (!num || num === 1) return num
    return fibbonaci(num - 1) + fibbonaci(num - 2);
}

const memoizedFibonnaci = memoize(fibbonaci);

console.log(memoizedFibonnaci(18)) //2584
console.log(memoizedFibonnaci(18)) //2584
console.log(memoizedFibonnaci(18)) //2584
console.log(memoizedFibonnaci(18)) //2584
console.log(memoizedFibonnaci(18)) //2584
console.log(`Function was called ${memoizedFibonnaci.callCount} time`) // Function was called 1 time