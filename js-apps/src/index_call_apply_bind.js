'use strict'

function getCordinate(...args) {
    console.log(`${args} => x is ${this.x} y ${this.y}`)
}
const map = {
    x: 1000,
    y: 3888
}
getCordinate.call(map, 'Google Map', 'google');

function getStocks(...stocks) {
    console.log(`${this.name}`)
    console.log(stocks);
}

const company = {
    name: 'Google'
};
const stocks = [{
    id: 1,
    value: 34
}, {
    id: 2,
    value: 67
}];
getStocks.apply(company, stocks);

function callMe() {
    console.log(this.name);
}
const func = callMe.bind({
    name: 'subramanian'
});
func();