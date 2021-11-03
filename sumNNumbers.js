const sumNNumbers = function(number){
    let result = 0; //varabile must be formated like number, bacause if is not formated it return NaN.
    for(let i = 1; i <= number; i++){
        result += i;
    }
    return result;
}

const altSumNNumbers = number => number*(number+1)/2; //here is a mtematical formula it's more effecient when we try to add big numbers
console.log(sumNNumbers(100));
console.log(altSumNNumbers(100));