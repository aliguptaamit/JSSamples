//function as parameter

/* function sayGreet(name = 'default', greeter) {
    console.log(greeter(name));
}
const hai = function (name) {
    //console.log(`Hai ${name}`);
    return `Hai ${name}`;
};
sayGreet('subramanian', hai); */

// function sayGreet(greeter) {
//     // greeter('subramanian');
//     console.log(greeter(name));
// }
// sayGreet(function (name) {
//     //console.log(`Hai ${name}`);
//     return `Hai ${name}`;
// });

// const sayGreet = greeter => console.log(greeter(name));
// sayGreet(name => `Hai ${name}`);

const sayGreet = (name, greeter) => console.log(greeter(name));
sayGreet('Amit', name => `Hai ${name}`);