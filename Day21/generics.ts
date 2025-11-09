function identity<T>(value:T) {
    return value;
}

console.log(identity<String>("Hello"));
console.log(identity<number>(101));

function getFirstElement<T>(arr: T[]):T {
    return arr[0];
}

const num = getFirstElement([1, 2, 3]);
const str = getFirstElement(["a", "b","c"])

interface Box<T>{
    contents: T;
}

const stringBox: Box<String> = { contents:"Books"};
const numberBox: Box<number> =  {contents: 42};

class Container<T>{
    private value: T;

    constructor(value: T){
        this.value = value;
    }

    getValue(): T{
        return this.value;
    }
}

const stringContainer = new Container<String>("Hello");
console.log(stringContainer.getValue());