/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Globaal Object Binding - Javascript lives inside a context. Everything that exists within Javascript lives within what is called the Global Object. This global object is basically a list of constructor methods that create the rules that allows JavaScript to work. the .this keuyword helps to establish the context of the Global Object by being assigned the value of the Global Object as soon as that execution context is established. 
* 2. Implicit Binding - Once a new execution context is established within the Global Object, i.e. a function, the value of the .this object is implicity changed to the value of that object, or context. Then, when the object leaves the call stack, the value of .this returns to the Global Object or the next functional context in the stack. Implicit Binding specifically occors when a function is called, and assigned to whatever object is tot he left of the dot.
* 3. New Binding - Whenever a constructor function, or object creator is assigned to the value of .this. Just like any other function with it's own execution context, .this is assigned to that value as it is being used. The value of .this changes depending on when in the code you are, not where.
* 4. Explicit Binding - The value of .this can be explicitly defined using the call, apply, or bind methods. This will overide any implicit defenition of the keyword this.
*
* write out a code example of each explanation above
*/


// code example for Window Binding
// Principle 1
// console.log(this);


// code example for Implicit Binding
// Principle 2
// const impBind = {
//     implicit: 'binding',
//     example: function (newFunc) {
//         console.log(this.implicit);
//         console.log(this);
//     }
// };
// impBind.example('Ryan');

// code example for New Binding
// Principle 3

function Binding(speaker) {
    this.greeting = 'Hello ',
    this.speaker = speaker,
        this.age = 33,
        this.job = 'Developer',
    this.speak = function() {
        console.log(`${this.greeting} my nanme is ${this.speaker} and my job is ${this.job}`);
    };
}
const terry = new Binding('Terry');

// terry.speak();

// Principle 4
// code example for Explicit Binding

const larry = new Binding('Larry');

terry.speak.call(larry);
console.log(terry.speak());