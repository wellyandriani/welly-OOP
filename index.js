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