function suma(a, b) {
    let result;
    result = a + b;
    return result;
}
function error(message) {
    throw new Error(message);
}
let x = 2, y = 3;
console.log(`suma=${suma(x, y)}`);
error('Error Message');
//let res = error('Error'); 
