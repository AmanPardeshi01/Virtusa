function combine(a, b) {
    return a + b;
}
console.log(combine(10, 20));
console.log(combine(" Hello ", "Aman"));
function greet(firstName, lastName) {
    if (lastName) {
        return "Hello ".concat(firstName, " ").concat(lastName);
    }
    else {
        return "Hello ".concat(firstName);
    }
}
console.log(greet("Aman", "Pardeshi"));
console.log(greet("Aman"));
function getValue(id) {
    if (typeof id === "number")
        return id * 100;
    else
        return "ID_".concat(id);
}
console.log(getValue(5));
console.log(getValue("abc"));
