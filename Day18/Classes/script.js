class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}


let x = new Person("Aman", 22);
x.greet();


// Example: Basic Class
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} car has started!`);
  }
}

let car1 = new Car("Tata", "Red");
car1.start();



// Constructor Method
class Person1 {
  constructor(name) {
    this.name = name;
    console.log(`Object created for ${name}`);
  }
}

let p1 = new Person1("Aman");


// Class Methods
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  display() {
    console.log(`${this.name} scored ${this.marks} marks.`);
  }
}

let s1 = new Student("Aman", 95);
s1.display();


// Static Methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10)); // 15


// Class Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Animal("Tommy");
d.speak();


// Using super() Keyword
class Employee {
  constructor(name) {
    this.name = name;
    //  console.log(`${this.name} is a manager of ${this.department} department.`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name); // call parent constructor
    this.department = department;
  }

  showDetails() {
    console.log(`${this.name} is a manager of ${this.department} department.`);
  }
}

let m1 = new Manager("Aman", "IT");
m1.showDetails();


// Getter and Setter Methods
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // underscore means private by convention
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value > 0) this._price = value;
    else console.log("Invalid price!");
  }
}

let p = new Product("Laptop", 50000);
console.log(p.price); // 50000
p.price = -100; // Invalid price!


// Private Fields (ES2022 Feature)
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); ❌ Error (private)

// Real-Life Example — E-commerce System
class Product1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`${this.name} costs ₹${this.price}`);
  }
}

class Electronic extends Product1 {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }

  display() {
    console.log(`${this.brand} ${this.name} costs ₹${this.price}`);
  }
}

let laptop = new Electronic("Laptop", 60000, "HP");
laptop.display();


// Class Expressions
// Classes can also be defined as expressions (like anonymous functions).
const Vehicle = class {
  start() {
    console.log("Vehicle started!");
  }
};

let v = new Vehicle();
v.start();
