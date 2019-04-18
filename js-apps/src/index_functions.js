function sayGreet() {
    console.log('Hello!')
}
sayGreet();

function add(a, b) {
    const result = a + b;
    //console.log(result);
    return result;
}
console.log(add(10, 10)); //parameter
//you can pass any literal and you can return any literal

function login(user, pass) {
    if (user === 'admin' && pass === 'admin') {
        return true;
    }
    return; //undefined
}
const status = login('admin', 'foo') ? 'Welcome' : 'Sorry';
console.log(status);

//default args: es 6
function multiply(a = 1, b = 1) {
    //a= a || 1;
    return a * b;
}
console.log(multiply(10, 10));
console.log(multiply("10", 10));
console.log(multiply("a", 10));
console.log(multiply());

// if first operand is truthy result is first else second
let x;
let r = x || 'sorry';
console.log(r);

//var args
/* function logger() {
   console.log(arguments)
} */
//es 6
function logger(screen, ...myvar) {
    console.log(screen, myvar)
}
logger('Game 1', 'hello');
logger('Game 2', 'hello', 'hai');
logger('Game 3', 'hello', 'hai', 'welcome');

function greeter(message) {
    console.log(message);
}
greeter('hello', 'ram', 'delhi')