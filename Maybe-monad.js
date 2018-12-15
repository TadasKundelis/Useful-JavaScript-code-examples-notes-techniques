class Maybe {
    constructor(value) {
      this.__value = value;
    }
    static of(valueToBox){
      return new Maybe(valueToBox);
    }
    getOrElse(elseVal) {
      return this.isNothing() ? elseVal : this.__value;
    }
    isNothing() {
      return this.__value === null || this.__value === undefined;
    }
    map(fn) {  
      return this.isNothing()?       
               Maybe.of(null):
               Maybe.of(fn(this.__value));
    }
}