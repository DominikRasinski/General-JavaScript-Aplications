const fizzBuzz = function(){
    let fizz = [];
    let buzz = [];
    let rest = [];
    let fizzbuzz = [];
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            fizzbuzz.push(`FizzBuzz ${i}`);
            fizzbuzz.forEach(Element => {
                console.log(Element);
            });
        }
        else if(i % 3 == 0){
            fizz.push(`Fizz ${i}`);
            fizz.forEach(Element => {
                console.log(Element);
            });
        }
        else if(i % 5 == 0){
            buzz.push(`Buzz ${i}`);
            buzz.forEach(Element => {
                console.log(Element);
            });
        }
        else{
            rest.push(`Rest ${i}`);
            rest.forEach(Element => {
                console.log(Element);
            });
        }
    }
    console.log(fizzbuzz.length);
    
}

fizzBuzz();

