// every is a method for arrays, to check if every elements are similar then return 'true', if not return 'false'

testArray = [1,1,1,1,1,1,1,1,1,1,1,1];
testArray1 = [1,1,1,1,1,1,1,2,1,1,1,1];

const everyImplementation = function(array){
   for(let i = 0; i < array.length; i++){
       if(array[i] !== array[0]){
           return false;
       }
   }
   return true;
}

console.log(everyImplementation(testArray1));