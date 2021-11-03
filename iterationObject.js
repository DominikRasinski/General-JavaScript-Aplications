//This project shows how easy it is to iterate over keys in an objects and arrays

const obj = {
    dom: 12,
    truck: "yellow",
    car: function(){
        console.log(`wziuuuu ${["dom"]}`);
    }
}

const arr = [
    12,
    3,
    10,
];

obj.car();

for(let property in obj){
    if(obj.hasOwnProperty(property)){
        console.log(property);
    }
}

Object.keys(obj).forEach(property => {
    console.log(property);
})

Object.getOwnPropertyNames(obj).forEach(element => {
    console.log(element);
})


for(let i = 0; i < arr.length; i++){
    console.log([arr[i], i]);
}

arr.forEach((elements, index) => {
    console.log([elements, index]);
})