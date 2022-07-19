"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
printResult(add(20, 30));
let combineValues;
combineValues = add;
console.log(combineValues(8, 3));
// let somevalue : undefined;
function addandHandle(a, b, c) {
    const result = a + b;
    c(result);
}
addandHandle(30, 20, (result) => {
    console.log(result);
});
