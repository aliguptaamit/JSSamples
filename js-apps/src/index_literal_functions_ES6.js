//Object destrucing

/* function getEmployee({
    id,
    name
}) {
    //es 5
    // const id = employee.id;
    // const name = employee.name;
    /*     const {
            id,
            name
        } = employee; */

// //console.log(`Id ${employee.id}  name ${employee.name}`)
//     console.log(`Id ${id}  name ${name}`)
// }
//  */

const getEmployee = ({
    id,
    name
}) => console.log(`Id ${id}  name ${name}`);

const employee = {
    id: 1,
    name: 'Amit'
}
getEmployee(employee);
getEmployee({
    id: 2,
    name: 'Gupta'
})
/////////////////////////////////////////////////////////////
//returning an object
// const getStock = () => {
//     return {
//         id: 1,
//         value: 1000
//     };
// }
const getStock = () => ({
    id: 1,
    value: 1000
});

console.log(getStock());
///////////////////////////////////////////////////////////
//return object and its property value are dynamic

// const getInvoice = (no, value) => {
//     return {
//         no: no,
//         value: value
//     }
// }
const getInvoice = (no, value) => ({
    no,
    value
});

console.log(getInvoice(100, 903));