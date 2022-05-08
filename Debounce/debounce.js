const debounce = (func, limit) => {
  let lastFunc
  let lastRan
  return function (...args) {
    const context = this
    if (!lastRan) {
      func.apply(context, ...args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, ...args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}


const searchBox = document.getElementById("search-box");

const callback = debounce(function () {
  //this could be an API call
  document.getElementById("result").innerHTML = this.value;
}, 500, true)

searchBox.addEventListener("keyup", callback);