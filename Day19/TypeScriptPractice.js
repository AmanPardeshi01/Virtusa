//Funcations
//Example 1
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(5, 5));
// console.log(add(-5,10));
//Example 2
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Aman"));
//Example 3
// function logMessage(message: string): void {
//   console.log("LOG:", message);
// }
// Used for functions that only perform actions, not return values.
//Example 4
// function randomData(): any {
//   return Math.random() > 0.5 ? "Aman" : 100;
// }
// console.log(randomData());
// Example 5
// function throwError(msg: string): never {
//   throw new Error(msg);
// }
// Example 6
function greet(name) {
    if (name)
        console.log("Hello, ".concat(name, "!"));
    else
        console.log("Hello, Guest!");
}
greet("Aman"); // Hello, Aman!
greet(); // Hello, Guest!
