function* fib(){
  let current = 0, next = 1;
  while(true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

var f = fib();
f.next().value //0
f.next().value //1
f.next().value //1
f.next().value //2
f.next().value //3
f.next().value //5
f.next().value //8
f.next().value //13
f.next().value //21
f.next().value //34