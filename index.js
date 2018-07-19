class human{
    constructor(name, age, gendre){
        this.name = name;
        this.age = age ||1;
        this.gendre = gendre
    }
}
const welly = new human("welly", 22);

console.log(welly);


class employee extends human{
    constructor (name, age, profession, salary){
        super(name, age);
        this.profession = profession;
        this.salary = salary;
    }
}
class boss extends human{
    constructor(name, age, power, income){
        super(name, age);
        this.power = power;
        this.income = income;
    }
}
const indra = new employee ("indra", 23, "Developer", 5000000);
const jamale = new boss ("jamale", 28, "Businessman", 2000000);

console.log(indra);
console.log(jamale);


class people{
    constructor(name, age, gendre){
        this.name = name;
        this.age = age ||1;
        this.gendre = gendre;
    }
    walk(){
        console.log(`${this.name} is walking`);        
    }
    run(){
        console.log(`${this.name} is running`);
        
    }
}
const dilla = new people("dilla", 24, "Female");
console.log(dilla);
dilla.run();


function Person(){
}
Person.prototype.name = "welly";
Person.prototype.age = 22;
Person.prototype.me = function(){
    console.log(this.name);
}

var person1 = new Person();
console.log(person1.name);

function Motorcycle(){    
}

Motorcycle.prototype.brand = "Beat"
Motorcycle.prototype.machine = "Honda"
Motorcycle.prototype.color = ['Red', 'Blue', 'Black']
Motorcycle.prototype.sayname = function(){
    console.log(this.brand);    
}

var motorcycle1 = new Motorcycle();
var motorcycle2 = new Motorcycle();

motorcycle1.color.push("pink");

console.log(motorcycle1.color);
console.log(motorcycle2.color);

function car (brand, machine){
    this.brand = ["Avanza", "Grand Max", "Jazz", "ferrari"],
    this.machine = machine,
    this.color = ["yellow", "gray", "silver"]
}

car.prototype.yeah = function(){
    console.log(this.brand);
}

var car1 = new car ();
var car2 = new car ();

console.log(car1.yeah === car2.yeah)

car1.color.push("green");

console.log(car1.color);
console.log(car2.color);


