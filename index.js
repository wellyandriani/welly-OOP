class human{
    constructor(name,age){
        this.name = name;
        this.age = age ||1;
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
const fuad = new employee ("fuad", 23, "Developer", 5000000);
const merry = new boss ("merry", 28, "Frying Vegetables", 2000000);

console.log(fuad);
console.log(merry);

