
//function adding all numbers below given number
let add = (num, acc = 0) => {
  return num ? add(num - 1, acc + num) : acc
}
  
console.log(add(10000)) //RangeError: Maximum call stack size exceeded
  
//let's create a trampoline function to avoid RangeError
const trampoline = fn => {
  return (...args) => {
    let result = fn(...args);
    while(typeof result === 'function') {
      result = result();
    }
    return result;
  }
}

//rewrite add function to return another function or accumulated value, when num = 0
add = (num, acc = 0) => {
  return num ? () => add(num - 1, acc + num) : acc
}

const sumBelowNumber = trampoline(add);
const result = sumBelowNumber(10000); 
console.log(result); //50005000
   
    
  
  