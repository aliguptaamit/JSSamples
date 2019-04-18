
function Person() {
    this.name = 'Amit'
}

Person.prototype.sayGreet = function () {
    return 'greet';
}

function Employee() {
    Person.call(this);
    console.log('Employee is called');
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee();
console.log(emp.name);


////////////////////Es6////////////////////////////

class Person6 {
    constructor(name) {
        this.name = name
        console.log('person Constructor')
    }
    calculateAge() {
        return 10;
    }
}

class Employee6 extends Person6 {
    constructor(name) {
        super(name);
        console.log('person Constructor')
    }
    calculateAge() {
        return super.calculateAge() + 12;
    }
}

const emp1 = new Employee6('Amit ES6');
console.log(emp1.name);
console.log(emp1.calculateAge());

//////////////////////////////////////////////////////////


//instance of keyword 
console.log(emp1 instanceof Employee6);
console.log(emp1 instanceof Person6);
console.log(emp1 instanceof Object);
console.log(emp1 instanceof Number);