console.log('Hello World');
//variables
/* var firstName = "Subramanian";
var lastName = 'M'; */
let firstName = "Subramanian";
let lastName = "M";
console.log("First Name " + firstName);
console.log('Last Name' + lastName);
console.log("First Name ", firstName);
console.log("Last Name", lastName);
//es 6 template literal 
console.log(`Name ${firstName} ${lastName}`);
//number
let salary = 2000;
console.log(`Salary ${salary}`);
//boolean
let isWorking1 = true;
console.log(`Working status ${isWorking1}`);
//undefined
let age;
console.log(`Age ${age}`);
//NaN - Not a Number: it is runtime error code
//NaN  - you get due to numerical computation failures
let ageStatus = age * 2;
console.log(`ageStatus ${ageStatus}`);
let res = ageStatus / 0;
console.log(`NaN / 0 =  ${res}`);
//avg :Infinity div/ 0
let avg = 100 / 0;
console.log(`Avg ${avg}`);