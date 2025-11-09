function add(a, b) {
    return a + b;
}
function greet() {
    console.log("Hello");
}
function getMessage(name) {
    return "Welcome ".concat(name, "!");
}
function throwError(message) {
    throw new Error(message);
}
function greet2(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log("Hellow Guest!");
    }
}
greet2("Aman");
greet2();
//Default Parameters
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(5)); // (b default to 2)
console.log(multiply(5, 5));
//RestPatrameter
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
var addNumbers = function (a, b) { return a + b; };
var subtractNumbers = function (a, b) { return a - b; };
console.log(addNumbers(5, 10));
console.log(subtractNumbers(50, 20));
