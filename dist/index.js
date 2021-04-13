"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("heelp:");
/* type script :: typed language
 you need to tell the language what kind of varaible
 and what kind of data is this variable
 -> we can predict what is going to happen..
 : compile can help you what is going om wrong
*/
/* ts
 we will give them a type
 */
const name = "JJeong", age = 24, gender = "Female";
const sayHi = (name, age, gender) => {
    // (name, age, gender?) => if you attach ? it is optional..!
    console.log(`hello ${name}, you are ${age}, you are ${gender} :::`);
};
sayHi(name, age, gender);
/* install tsc watch
 yarn add tsc-watch --dev
 -> it will update the changes automatically after saving...
  not by typing yarn start every single time*/ 
//# sourceMappingURL=index.js.map