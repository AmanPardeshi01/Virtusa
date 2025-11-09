function add(a: number, b:number){
    return a + b;
}

function greet(): void {
    console.log("Hello");
}

function getMessage(name:string) {
    return `Welcome ${name}!`;
}

function throwError(message?:string): void {
    throw new Error(message);
}

function greet2(name?:string): void{
    if(name){
        console.log(`Hello, ${name}!`)
    } else {
        console.log("Hellow Guest!");
    }
}

greet2("Aman");
greet2();




//Default Parameters
function multiply(a:number, b:number = 2): number{
    return a * b;
}

console.log(multiply(5));   // (b default to 2)
console.log(multiply(5, 5));


//RestPatrameter
function sum(...numbers:number[]): number{
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3));
console.log(sum(10,20,30,40));


//Funcation Type Alias
type Operation = (x:number, y:number) => number;

const addNumbers: Operation = (a, b) => a + b;
const subtractNumbers: Operation = (a,b) => a -b;

console.log(addNumbers(5 ,10));
console.log(subtractNumbers(50, 20));