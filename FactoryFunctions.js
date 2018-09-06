//Factory functions using mixins in JavaScript

//basic Animal object factory
const Animal = function (name) {
    const animal = {};
    animal.name = name;
    animal.sayName = function () {
        console.log(`Hi, my name is ${animal.name}!`);
    }
    return animal;
}

const animal = Animal('Charlie');
animal.sayName(); // Hi, my name is Fluffy!

/*** Mixins ***/
const canFly = {
    fly() {
        console.log('I am flying!')
    }
}

const runFast = {
    runFast() {
        console.log('I run very fast!')
    }
}

const canKill = {
    kill() {
        console.log('I will kill you!');
    }
}

const canMeow = {
    meow() {
        console.log('Meowwwwwwwww');
    }
}


//single bird
const bird = Object.assign({}, Animal('Pigeon'), canFly);
bird.sayName(); // Hi, my name is Pigeon!
bird.fly(); // I am flying!

//bird factory:
const Bird = function (name) {
    const bird = Object.assign({}, Animal(name), canFly);
    return bird;
}

//cat factory
const Cat = function (name) {
    const cat = Object.assign({}, Animal(name), canMeow);
    return cat;
}

//killing bird factory
const KillingBird = function (name) {
    const killingBird = Object.assign({}, Bird(name), canKill);
    return killingBird;
}

//fast cat factory
const FastCat = function (name) {
    const fastCat = Object.assign({}, Cat(name), runFast);
    return fastCat
}

const sparrow = Bird('Sparrow');
sparrow.fly(); // I am flying!

const eagle = KillingBird('Eagle');
eagle.fly(); // I am flying!
eagle.kill(); // I will kill you!

const cheetah = FastCat('Cheetah');
cheetah.meow(); // Meowwwwwwwww
cheetah.runFast(); // I run very fast!


//Basically the idea is that we can mix properties in whatever way we want and if we need multiple objects having the same properties, we can create a factory
