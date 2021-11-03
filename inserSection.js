const inserSectionArray = function(array1, array2){
    let result = [];
    for(let i = 0; i < array1.length; i++){
        if(array2.indexOf(array1[i]) !== -1){
            result.push(array1[i]);
        }
    }
    return result;
}

const arrayTest1 = [2,3,4,5,6];
const arrayTest2 = [2,1,1,5,1];

console.log(inserSectionArray(arrayTest1, arrayTest2));