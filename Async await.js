//Basic example
let promise = new Promise(resolve => {
  setTimeout(() => resolve("result from promise"), 1000)
})

async function getDataFromPromise() {
  let result = await promise;
  console.log(result); //after 1s 'result from promise' is printed
}

//get data from APi
async function getDataFromApi(url) {
  let response = await fetch(url);
  if(response.status === 200) {
    let result = await response.json()
    return result;
  } else {
    throw new Error(response.status)
  }
}

getDataFromApi("https://jsonplaceholder.typicode.com/todos/1")
  .catch(console.log) 

//error handling with try catch
function caserUpper(val) {
  return new Promise((resolve, reject) => {
    resolve(val.toUpperCase());
  });
}

async function printInUpperCase(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch(err) {
    console.log(err.message);
  }
}

printInUpperCase("string") //STRING 
printInUpperCase(14) //val.toUpperCase is not a function


//*************** Different ways of handling asynchronous actions *******************//
function startWithDelay(timeout, name) {
  console.log(`started ${name} `);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(`${name} resolved after ${timeout}s`)
    }, 1000 * timeout)
  })
}

function concurrent() {
  //all the functions in the array will be handled concurrently, but will wait for all promises to resolve
  Promise.all([startWithDelay(1, 'concurrent1'), startWithDelay(4, 'concurrent2')]).then(value => console.log(value))
}

async function sequential() {
  const res1 = await startWithDelay(2, 'sequential1'); //starts immediately
  const res2 = await startWithDelay(3, 'sequential2'); // starts after 2 seconds
  console.log(res1);
  console.log(res2);
}

function parralel() {
  //both start immediately, but first promise does not wait for the second to fnish
  startWithDelay(1, 'parralel1').then(value => console.log(value)); //resolved after 1s
  startWithDelay(3, 'parralel2').then(value => console.log(value)) //resolved after 3s
}

concurrent(); 
sequential();
parralel();

/*
Outcome: 

started concurrent1 
started concurrent2 
started sequential1 
started parralel1 
started parralel2 

parralel1 resolved after 1s
started sequential2 
parralel2 resolved after 3s
[ 'concurrent1 resolved after 1s', 'concurrent2 resolved after 4s' ]
sequential1 resolved after 2s
sequential2 resolved after 3s
*/


