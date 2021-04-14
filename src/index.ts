// type script will check that person has \tje same imterface with HUman 
// you can make your own object with this 
interface Human {
  name : string,
  gender : string,
  age : number
}

// What if I want to pass an object, 
//we have to check wether the pbject type is right
const person = {
  name : "JJeong",
  age : 24,
  gender : "Female"}

const sayHi = (person : Human): void => { // void <- return typr
    // (name, age, gender?) => if you attach ? it is optional..!
    console.log(`hello ${person.name}, you are ${person.age}, you are ${person.gender} :::`);
}

// What if I want to pass an object, 
//we have to check wether the pbject type is right
sayHi(person);

/* This file si going to be a module 
* is we don't do this ...we cannot make variable*/
export {};
