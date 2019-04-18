//HAS A, Dependency Injection

class Product {
    constructor(id = 1, name = 'defaultProduct') {
        this.id = id;
        this.name = name;
    }
}
class Order {
    constructor(product = new Product()) {
        //has-a
        this.product = product;
    }
}
class Dog {}
//

const product = new Product(2, 'IPhone');
const order = new Order(product); //dependency Injection
console.log(order.product.id, order.product.name);

//literal object
const employee = {
    id: 1,
    name: 'Amit',
    //has-a
    address: {
        city: 'Gurgaon'
    }
}
console.log(employee.id, employee.name, employee.address.city)