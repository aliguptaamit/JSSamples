// //Immediately Invoked Function Expressions.

// (function () {
//     console.log("Hi Amit");
// }());

// //iifie with arguments

// (function (app) {
//     console.log(`${app} is being initialized`);
// }('Game 1'));

// (function (app) {
//     console.log(`${app} is being initialized`);
// }('Game 2'));


// //iife with arguments and return
// const app = (function (app) {
//     return app;
// }('Game 2'));
// console.log(`${app} is being initialized`);

//iifie with argument and return with arrow function
const app = ( (app) => app ('Game 1'));
console.log(`${app} is being initialized`);


