//booleans

let isWorking = true;

if (isWorking) {
    console.log('working')
} else {
    console.log('not working');
}
let a = 100;
let b = 10;
let result = a > b;

if (result) {
    console.log(`A is greater than b`);
} else {
    console.log(`A is not greater than b`);
}

let firstName;

// if (firstName) {
//     console.log('Hey how are you?')
// } else {
//     console.log('Hey welcome ')
// }
firstName ? console.log('Hey how are you?') : console.log('Hey welcome ');

let x = "100";
let y = 100;
x === y ? console.log('x and y are same') : console.log('x and y are different');
console.log(typeof x);