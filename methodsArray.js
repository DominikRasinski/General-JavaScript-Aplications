//This project presents basics methods whitch one can be use on arrays

const arr = [1,2,3,4,5];

console.log(arr.slice(0,2));
console.log(arr);
console.log(arr.slice(3, -1));

console.log(arr.splice(0, 2, 10, 11));
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift(1,2));
console.log(arr);

console.log(arr.pop());
console.log(arr);

function dom() {

}

const ob = {

}

console.log((typeof(dom)));

console.log((typeof(arr) === typeof(ob)));