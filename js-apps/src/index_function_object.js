function sayGreet() {
    console.log(arguments);
};

console.dir(sayGreet);
sayGreet('Hello', 'Hi');

function Employee () {

}

console.log(Employee.prototype); // initialize time
const emp = new Employee();
console.log(emp.__proto__); // run time 