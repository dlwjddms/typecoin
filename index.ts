console.log("heelp:")
 /* type script :: typed language 
  you need to tell the language what kind of varaible 
  and what kind of data is this variable 
  -> we can predict what is going to happen.. 
  : compile can help you what is going om wrong
*/

/* normal js 
 but in ts sayHi(name,age).. this will get error .. 
 in js this doesn'y make error 
 */
const name = "JJeong",
age = 24,
gender = "Female"

const sayHi = (name, age, gender?) => { // if you attach ? it is optional..!
    console.log(`hello ${name}, you are ${age}, you are ${gender}`);
}

sayHi(name,age);

/* This file si going to be a module 
* is we don't do this ...we cannot make variable*/
export {};