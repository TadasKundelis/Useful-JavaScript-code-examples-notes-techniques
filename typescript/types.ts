// Structural types with the same properties are interchangeable
interface Person {
    name: string
    age: number
}

interface Employee {
    name: string
    age: number
}

function sayHello(person: Person): string {
    return `Hello ${person.name}`
}

const employee: Employee = { name: "John", age: 35 }
sayHello(employee) // accepts object with the same properties


class Vehicle { }
class Car extends Vehicle { }
class Bus extends Vehicle { }

const car: Bus = new Car() // not good 

// Covariant arrays
class Animal { }
class Cat extends Animal {
    meow(): string {
        return "I'm a cat"
    }
}
class Dog extends Animal {
    bark(): string {
        return "I'm a dog"
    }
}

const cats: Cat[] = [new Cat()]
const animals: Animal[] = cats // should not compile
animals[0] = new Dog()
const perhapsCat: Cat = cats[0]
perhapsCat.meow() // TypeError: perhapsCat.meow is not a function