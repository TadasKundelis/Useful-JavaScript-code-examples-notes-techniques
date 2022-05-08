//create a deep copy of the object
const clone = (obj) =>
  Object.keys(obj).reduce((cloneObj, prop) => {
    cloneObj[prop] = typeof obj[prop] === 'object' ? clone(obj[prop]) : obj[prop];
    return cloneObj;
  }, {})

const getProp = (obj, prop) => obj[prop]

const setProp = (key, value) => obj => obj[key] = value

//find inner object whose prop you wish to modify
const findTarget = lens => obj => lens.reduce(getProp, obj)

//curried function that runs a number of functions on the target object
const compose = (...fns) => target => fns.reduceRight((value, fn) => fn(value), target)

//update(obj) = compose(...fns)(target)
const updateObjectProperty = (update, obj) => (update(obj), obj)

//check certain property of a nested object;
const view = (lens, obj) => findTarget(lens)(obj)

//set property on a deep copy of the original nested object and return it; the original object is not mutated
const createUpdatedObject = (lens, prop, newValue, obj) =>
  updateObjectProperty(
    compose(
      setProp(prop, newValue),
      findTarget(lens)
    ),
    clone(obj)
  )

//example object
const obj = {
  a: {
    b: {
      c: {
        d: 'old property'
      }
    }
  }
}
const [lens, propToUpdate, newValue] = [
  ['a', 'b', 'c'],
  'd',
  'updated property'
]

const newObj = createUpdatedObject(lens, propToUpdate, newValue, obj)

console.log(view(['a', 'b', 'c', 'd'], obj)) //returns "old property"
console.log(view(['a', 'b', 'c', 'd'], newObj)) //returns "updated property"