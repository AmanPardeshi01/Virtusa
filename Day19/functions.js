class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

// Create object
const person1 = new Person("Remya", 30);
person1.greet();
// Output: Hello, my name is Remya and I am 30 years old.


