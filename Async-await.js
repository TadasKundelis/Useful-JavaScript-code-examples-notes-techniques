//Basic example
let promise = new Promise(resolve => {
  setTimeout(() => resolve("result from promise"), 1000)
})

async function getDataFromPromise() {
  let result = await promise;
  console.log(result); //after 1s 'result from promise' is printed
}

getDataFromPromise();


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
