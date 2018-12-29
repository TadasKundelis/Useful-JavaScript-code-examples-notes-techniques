//Basic examples of currying and partial application

/* Partial application */

const partial = (fn, ...args) => (...innerArgs) => {
    return fn.apply(fn, [...args, ...innerArgs]);
  }
  
  const addAll = (...args) => args.reduce((acc, cur) => acc + cur)
  
  const addOne = partial(addAll, 1)
  const addTwo = partial(addAll, 2)
  
  console.log(addOne(3, 4, 5)) //13 
  console.log(addTwo(3, 4, 5)) //14
  
  /* Currying */
  
  const add = (x, y) => x + y
  
  const curry = fn => arg1 => arg2 => fn(arg1, arg2)
  
  const curriedAdd = curry(add);
  
  const add2 = curriedAdd(2); 
  const add4 = curriedAdd(4);
  
  console.log(curriedAdd(3)(6)) //9
  console.log(add2(10)) //12
  console.log(add4(10)) //14

 
  