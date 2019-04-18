function Employee() {
    
}

const emp = new Employee();
const emp1 = new Employee();
console.log(emp1);

//CRUD - Add properties
//create
emp.id = 100;
emp.name = 'Amit';
emp.location = 'Gurgaon';

console.log(emp);

//update
emp.id = 200;
console.log("Post Update");
console.log(emp);

//delete
delete emp.location;
console.log(emp);

//iterator
for (let prop in emp) {
    console.log(prop, emp[prop]);
}

/////////////////////////////////////////////////////////////////////////////////////

function Customer() {
    
}
const cust = new Customer();

//Create sharable Property inside prototype
//Augment Prototype objects
Customer.prototype.id = 1;

const cust1 = new Customer();

console.log(cust.id);
console.log(cust1.id);

console.log(Customer.prototype);
console.dir(cust);
console.dir(cust1);



