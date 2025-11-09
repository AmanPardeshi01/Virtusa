function combine(a: number, b:number): number;
function combine(a: string, b:string): string;

function combine(a: any, b:any): any {
    return  a + b;
}

console.log(combine(10, 20));
console.log(combine(" Hello ", "Aman"));





function greet(name: string): string;

function greet(firstName: string, lastName:string): string;

function greet(firstName: string, lastName?: string): string {
    if(lastName){
        return `Hello ${firstName} ${lastName}`;
    } else {
        return `Hello ${firstName}`;
    }
}

console.log(greet("Aman", "Pardeshi"));
console.log(greet("Aman"));




//function overloading with different Parameters
function getValue(id: number): number;
function getValue(id: string): string;

function getValue(id: any): any {
    if(typeof id === "number") return id * 100;
    else return `ID_${id}`;
}

console.log(getValue(5));
console.log(getValue("abc"));

