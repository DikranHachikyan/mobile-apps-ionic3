function suma(a, b) {
    var result;
    result = a + b;
    return result;
}
function error(message) {
    throw new Error(message);
}
var x = 2, y = 3;
console.log("suma=" + suma(x, y));
error('Error Message');
var res = error('Error');
