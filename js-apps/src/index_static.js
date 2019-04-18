//static

//Built in Static - example
console.log(Math.random());

//how to create user defined static
/////////////////////////////////////////ES5///////////////////////////////////

//1. Function Object Pattern
function Utility() { }

Utility.add = function(a, b) {
    return  a+b;
}
console.log(Utility.add(10,20));

//2. Literal Pattern
const MyUtility = {};
MyUtility.add = function (a, b) {
    return a + b;
}
console.log(MyUtility.add(20,30));

//////////////////////////////////////////ES6///////////////////////////////
class MyUtility6 {
    static getValue(){
        return 1000;
    }
}
console.log(MyUtility6.getValue());