// interafce didn;t go to JS code  
// sometime you wantto put interface in the JS -> we will use class instead of interface
class Human {
  public name: string;
  public age: number;
  public gender: string;
  // method that call everytime a object 
  constructor(name :string, age:number, gender:string){ // if you do gender?:string gender will be optional
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// What if I want to pass an object, 
//we have to check wether the pbject type is right

const lynn = new Human("lynn",18,"F")

const sayHi = (person : Human): void => { // void <- return typr
    console.log(`hello ${person.name}, you are ${person.age}, you are ${person.gender} :::`);
}

// What if I want to pass an object, 
//we have to check wether the pbject type is right
sayHi(lynn);

/* This file si going to be a module 
* is we don't do this ...we cannot make variable*/
export {};
