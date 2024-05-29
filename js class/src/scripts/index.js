class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.surname} ${this.name}`;
  }
  getAge(bornYear = 0) {
    return new Date().getFullYear() - bornYear;
  }
}

let rahib = new Person("Rahib", "Rzayev");

class Employee extends Person {
  constructor(name, surname, salary) {
    super(name, surname);
    this.salary = salary;
  }
  getSalary(currency = "manat") {
    return `${this.name} ${this.salary} ${currency} maas alir`;
  }
}
// let newEmployee = new Employee("Rahib", "Rzayev", 10000);

class Developer extends Employee {
  constructor(name, surname, salary, profession, level) {
    super(name, surname, salary);
    this.profession = profession;
    this.level = level;
  }
  getProfession() {
    return `${this.name} ${this.level} ${this.profession} developerdir`;
  }
}

let newDev = new Developer("Tohid", "Abdullazade", 3000, "frontend", "middle");
let newDev2 = new Developer("Ayan", "Zimin", 13000, "backend", "senior");

console.log(newDev.getProfession());
console.log(newDev2.getProfession());
