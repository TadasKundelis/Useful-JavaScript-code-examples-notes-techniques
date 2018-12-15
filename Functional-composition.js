//Basic functional composition

const add5 = (x) => x + 5
const square = (x) => x * x
const divideBy4 = (x) => x/4

const compose = (...fns) => {
  return function(target){
      return fns.reduce((value, fn) => fn(value), target)
  }
}

const compute = compose(add5, square, divideBy4);


console.log(compute(10)) //56.25
console.log(compute(15)) //100
console.log(compute(20)) //156.25