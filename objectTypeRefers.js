//In this project only check, how to refer keys in objects

const objectRefers = {
    a: "hello world",
    b: 43,
    c: true
};


console.log(objectRefers.a);
console.log(objectRefers.b);
console.log(objectRefers.c);

console.log(objectRefers["a"]);
console.log(objectRefers["b"]);
console.log(objectRefers["c"]);


const objectTwo = {
    a: "another world",
    b: 42
};

let b = "a";

console.log(objectTwo[b]);
console.log(objectTwo["b"]);