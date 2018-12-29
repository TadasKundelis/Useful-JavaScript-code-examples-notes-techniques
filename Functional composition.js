const add5 = (x) => x + 5
const square = (x) => x * x
const divideBy4 = (x) => x/4

const compose = (...fns) => {
  return function(target){
    return fns.reduce((value, fn) => fn(value), target)
  }
}

const tap = (fn) => (value) => {
  fn(value);
  return value;
}

const labelLog = (label) => console.log.bind(console, label);

const trace = compose(labelLog, tap);

const compute = compose(
  add5, 
  trace('add5 -> '), 
  square, 
  trace('square -> '), 
  divideBy4, 
  trace('divideBy4 -> ')
);

compute(10);
console.log('.........')
compute(15);
console.log('.........')
compute(20);

//Output:
// add5 ->  15
// square ->  225
// divideBy4 ->  56.25
// .........
// add5 ->  20
// square ->  400
// divideBy4 ->  100
// .........
// add5 ->  25
// square ->  625
// divideBy4 ->  156.25