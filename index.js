class human{
    constructor(name, age, gendre){
        this.name = name;
        this.age = age ||1;
        this.gendre = gendre
    }
}
const welly = new human("Welly", 22);

console.log(welly);
document.getElementById("output1").innerHTML = "My Nameis" + " " + welly.name;


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
const indra = new employee ("Indra", 23, "Developer", 5000000);
const jamale = new boss ("jamale", 28, "Businessman", 2000000);

console.log(indra);
console.log(jamale);
document.getElementById("output2").innerHTML = `${indra.name}, ${indra.age}, ${indra.profession}, ${indra.salary}`


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
document.getElementById("output3").innerHTML = " Dilla is running" ;


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
function motorcycle(){
    document.getElementById("output4").innerHTML = "Vocabulary = " + " "+ motorcycle1.color;
}

function car (color, machine){
    this.color = ["yellow", "gray", "silver"],
    this.machine = machine,
    this.brand = ["Avanza", "Grand Max", "Jazz"]
}

car.prototype.yeah = function(){
    console.log(this.color);
}

var car1 = new car ();
var car2 = new car ();

console.log(car1.yeah === car2.yeah)

car1.brand.push("ferrari");

console.log(car1.brand);
console.log(car2.brand);
function Car(){
    document.getElementById("output5").innerHTML = "Brand Available =" + " " + car1.brand;
}
