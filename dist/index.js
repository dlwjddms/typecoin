"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// What if I want to pass an object, 
//we have to check wether the pbject type is right
const person = {
    name: "JJeong",
    age: 24,
    gender: "Female"
};
const sayHi = (person) => {
    // (name, age, gender?) => if you attach ? it is optional..!
    console.log(`hello ${person.name}, you are ${person.age}, you are ${person.gender} :::`);
};
// What if I want to pass an object, 
//we have to check wether the pbject type is right
sayHi(person);
//# sourceMappingURL=index.js.map