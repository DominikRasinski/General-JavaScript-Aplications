'use strict'

const functionWithoutStrict = function(){
    test = 20;
    console.log(test);
} 


const functionWithStrict = function(){
    testA = 20;
    console.log(testA);
}


functionWithoutStrict();
functionWithStrict();