// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// function debounce(func, wait, immediate) {
//     let timeout;
//     let lastRan;
//     console.log("called")
// 	return function(...args) {
// 		const context = this;
// 		const later = function() {
// 			timeout = null;
// 			if (!immediate) {
//                 lastRan = Date.now();
//                 func.apply(context, args);
//             }
// 		};
// 		const callNow = immediate && !timeout;
// 		clearTimeout(timeout);
//         timeout = setTimeout(function(){
//             if(Date.now() - lastRan >= wait) {
//                 later();
//             }
//         }, wait - (Date.now() - lastRan));
// 		if (callNow) {
//             lastRan = Date.now();
//             func.apply(context, args);
//         }
// 	};
// };


const debounce = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
      const context = this
      const args = arguments
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }


const searchBox = document.getElementById("search-box");

const callback = debounce(function(){
    document.getElementById("result").innerHTML = this.value;
}, 1000, true)

searchBox.addEventListener("keyup", callback);