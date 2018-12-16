const address = {
  country: {
    name: "Lithuania",
    city: {
      name: "Vilnius",
      street: "Vasaros",
      houseNumber: 54,
      postalCode: 42157
    }
  }
}
  
//get a deeply nested prop using destructuring
const {
  country: {
    city: {
      street,
      houseNumber,
      postalCode
    }
  }
} = address;
  
console.log(street, houseNumber, postalCode) // Vasaros 54 42157


const numbers = [1, 2, 3];

//destructure array
let [first, second, third] = numbers; // first = 1, second = 2, third = 3

//swap items
[first, second, third] = [second, third, first] // first = 2, second = 3, third = 1


const people = [
  {
    name: "Anthony",
    age: 30,
    partner: {
      name: "Megan"
    }
  },
  {
    name: "Fred",
    age: 22,
    partner: {
      name: "Bridgette"
    }
  },
  {
    name: "Alice",
    age: 33,
    partner: {

    }
  }
]

//get property of all objects in the array by prop name
const names = people.map(({ name }) => name);
const ages = people.map(({ age }) => age);

console.log(names) //[ 'Anthony', 'Fred', 'Alice' ]
console.log(ages) //[ 30, 22, 33 ]


//iterate over an array using destructuring
for (const {
    name,
    age
} of people) {
console.log(`Persons's name is ${name} and his age is ${age}`)
}

/*
Persons's name is Anthony and his age is 30
Persons's name is Fred and his age is 22
Persons's name is Alice and his age is 33
*/

//find out the index of an object in object array using destructuring
const index = people.findIndex(({ name, age }) => name === "Alice" && age === 33)
console.log(index); //2

//destructure Regex
const url = ("http://www.example.com/folder/file.html");

let [fullUrl, protocol, fullHost, fullPath] = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

// fullUrl: http://www.example.com/folder/file.html
// protocol: http
// fullHost: www.example.com
// fullPath: folder/file.html

//use default value with destructuring
for (const {
    name,
    partner: {
    name: partnerName = "none"
    }
} of people) {
  console.log(`${name}'s partner is ${partnerName}`);
}

/*
Anthony's partner is Megan
Fred's partner is Bridgette
Alice's partner is none
*/