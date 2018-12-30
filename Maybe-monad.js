class Maybe {
  constructor(value) {
    this.__value = value;
  }
  static of (valueToBox) {
    return new Maybe(valueToBox);
  }
  getOrElse(elseVal) {
    return this.isNothing() ? elseVal : this.__value;
  }
  isNothing() {
    return this.__value === null || this.__value === undefined;
  }
  map(fn) {
    return this.isNothing() ?
      Maybe.of(null) :
      Maybe.of(fn(this.__value));
  }
}

//dummy data array
const users = [{
    id: 1,
    name: "Francois",
    language: "French"
  },
  {
    id: 2,
    name: "Kurt",
    language: "German"
  },
  {
    id: 3,
    name: "Peter",
    language: null
  },
  {}
]


users.forEach(console.log(getUserLanguage)); //French/ German, English, English

function getUserLanguage(user) {
  return Maybe.of(user)
    .map(user => user.language)
    .getOrElse("English")
}


/*
imperative version of the same function would be:

function getUserLanguage(user) {
    let language;
    if (user && user.language) {
        language = user.language;
    } else {
        language = "English";
    }
    return language;
}
*/