//function - verb notation | verb+Noun notation
function move() {
    console.log("Move Verb");
}

function moveRight() {
    console.log("Move Right | Verb + Noun");
    return 10;
}

//Global Context Method
moveRight();
console.log(moveRight());
console.log(window.moveRight());

///////////////////////////////////////ES 5 Object Creation ////////////////////////////////
//ES5 and below
//Convention of class with CamelCase
function Employee(id=1, name='Amit') {
    //object properties
    this.id = id;
    this.name = name;
    this.calculateSalary = function() {
        return 100;
    }
}
// const emp = new Employee(); //Defaut
const emp = new Employee(2,'Gupta'); //Parameterised
//Access Object
console.log(emp);
//Access Object Properties
console.log(`Emp Id: ${emp.id}, Emp Name: ${emp.name}, Emp Salary: ${emp.calculateSalary()}`);

///////////////////////////////////////ES 6 Construction Pattern ////////////////////////////
//ES6 : Symantic programming
class ES6Employee {
    constructor(id=16, name='ES6 Amit') {
        console.log('ES6 Employee Constructor');
        //object properties
        this.id = id;
        this.name = name;
    }
    //Method
    calculateSalary() {
        return 100;
    }

}

//ES6 : creation 
const es6emp = new ES6Employee(); //Defaut
const es6emp1 = new ES6Employee(); //Defaut
//Access Object
console.log(es6emp);
console.log(es6emp1);

//Access Object Properties
console.log(`Emp Id: ${es6emp.id}, Emp Name: ${es6emp.name}, Emp Salary: ${es6emp.calculateSalary()}`);



////////////////////////// Literal Pattern Object Creation /////////////////////////////////

const literaltrainer = {
    id:2,
    name:'Amit Gupta Literal',
    location:'Gurgaon'
}; 

//Object Constructs - allocation of memory for {} and returns reference
//Create -> Use -> Throw -- Singleton pattern 
// Domain Data => Models => So infrastructure objects can be created via literal pattern

console.log(`{${literaltrainer.id}, ${literaltrainer.name}, ${literaltrainer.location}}`);
