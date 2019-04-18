//ES 6 arrow
/* const hello = () => {
    console.log(`Hello`);
};
hello(); */
//if function has single line body
/* const hello = () => console.log(`Hello`);
hello(); */

//single parameter and arg -without default
/* const hello = name => console.log(`Hello ${name}`);
hello('ram'); */
//single parameter and arg -with default
// const hello = (name = 'default') => console.log(`Hello ${name}`);
// hello('ram');

//multiple parameters with or without default value
// const hello = (name = 'default', message) => console.log(`${message} ${name}`);
// hello('hai', 'ram');
//retrun

/* const hello = () => {
    return 'hello!'
}
console.log(hello()); */

//only return statment
// const hello = () => 'hello!';
// console.log(hello());
//pass and return same variable
const hello = name => name;
console.log(hello('ram'));

