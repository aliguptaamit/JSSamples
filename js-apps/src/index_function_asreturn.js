//how to return function : Closure

// function counter () {
//     console.log('counter function... ');

//     //inner functions
//     function increment() {
//         return 'Increment Function';
//     }
//     //console.log(increment());
//     return increment;//Can return the function
// }

function counter () {
    console.log('counter function... ');

    //inner function
    
    // return function increment() {
    //     return 'Increment Function...';
    // }

    // return function () {
    //     return 'Increment Function';
    // };

    return function (name) {
        return name;
    };
}

const inc = counter();
// console.log(inc());//Works
console.log(inc('Increment function'));//Works
// console.log(increment());//Doesn't work
console.log(counter()('Increment Function1--'));

///////////////////////////////////////////////////////////////////////////////////
//Nested inner Functions

function greeter() {
    return function(name) {
        return function(message) {
            return function(date) {
                return `${name} ${message} ${date}`
            }
        }
    }
}
console.log(greeter()('Amit')('Hi How are you')('12-12-12'));


//Parameterized Arrow function
const sayGreet = name => (name, message => (name, message, date => `${name} ${message} ${date}`));
console.log(sayGreet('Amit Gupta')(' Parameterized Lambdas')('11-12-2019'));

//Nested inner function with arrow
const sayGreet1 = name => message => date => `${name} ${message} ${date}`;  

console.log(greeter()('Amit Gupta')('Nested Lambda')('11-11-2019'));