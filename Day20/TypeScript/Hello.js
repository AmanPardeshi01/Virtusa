// function greet(name: string): string {
// return `Hello, ${name}!`;
// }
// const message: string = greet("World");
// console.log(message);
// enum CardDirection {
//     east = 1,
//     west,
//     south,
//     north
// }
// console.log(CardDirection.east);  // Output: 1
// console.log(CardDirection.west);  // Output: 2
// console.log(CardDirection.south); // Output: 3
// console.log(CardDirection.north); // Output: 4
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red); // Output: 1
