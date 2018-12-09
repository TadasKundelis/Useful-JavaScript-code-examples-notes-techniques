const data = {
    name: "John",
    age: 20,
    nationality: "English",
    sex: "male",
    [Symbol.iterator]() {
    const props = Object.keys(this);
    const values = Object.values(this);
    const numOfProps = props.length;
    let index = -1;
    const iterator = {
      next(){
        index++
        const prop = props[index];
        const value = values[index];
        if (index === numOfProps) {
          return {value: {[prop]: value}, done: true}
        } else {
          return {value: {[prop]: value}, done: false}
        }
      }
    }
     return iterator
    }
  }
  
  for(let item of data) {
    console.log(item) // { name: 'John' }, { age: 20 }, { nationality: 'English' }, { sex: 'male' }
  }