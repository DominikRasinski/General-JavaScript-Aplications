//Here I check, how to create polymorphism in JavaScript with classes

class Person {
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    getInfo(){
        console.log(`I'am ${this.age}, and I weight ${this.weight} kilo`);
    }
}

class Employee extends Person {
    constructor(age, weight, salary){
        super(age, weight);
        this.salary = salary;
    }

    getInfo(){
        super.getInfo();
        console.log(`I'am ${this.age}, and I weight ${this.weight} kilo and I have salary ${this.salary}$`);
    }
    _privetmethod(){
        console.log(`Private method`)
    }
    publicMethod(){
        
        console.log(`Public method`);
        this._privetmethod();
    }
}


let person = new Person(20, 75);

let employee = new Employee(35, 78, 5000);

person.getInfo();

employee.getInfo();

employee.publicMethod();
