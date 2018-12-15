// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	let timeout;
	return function(...args) {
		const context = this;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
        timeout = setTimeout(later, wait);
		if (callNow) {
            func.apply(context, args);
        }
	};
};

const searchBox = document.getElementById("search-box");

const callback = debounce(function(){
    document.getElementById("result").innerHTML = this.value;
}, 500, true)

searchBox.addEventListener("keyup", callback);