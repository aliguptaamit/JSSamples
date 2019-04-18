//function literals
/**
 * funciton can be stored into a variable, that variable can be used to call that function later
 * 
 */

//function declaration
function sayGreet() {
    console.log('Hey')
}
//function invocation
sayGreet();

const greet = sayGreet;
greet();
/////////////////////////////////////////////////////////////
//Anonmous function: function with out name
const hello = function (name = 'defaultName') {
    // console.log(`Hello ${name}`);
    return `Hello ${name}`;
};
console.log(hello('subramanian'));
console.log(hello());