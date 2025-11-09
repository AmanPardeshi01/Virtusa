// function getLenght<T extends {length: number}>(item : T) {
//     return item.length;
// }

// console.log(getLenght("Hello"));
// console.log(getLenght([1,5,6]));
// console.log(getLenght({length : 10}));
// // console.log(getLenght(123));



// interface HasId {
//   id: number;
// }

// function printId<T extends HasId>(obj: T) {
//   console.log("ID:", obj.id);
// }

// printId({ id: 101, name: "Remya" });   // Works
// // printId({ name: "No ID" });         //  Error

interface Printable {
  print(): void;
}

class DocumentPrinter<T extends Printable> {
  printItem(item: T) {
    item.print();
  }
}

class Invoice {
  print() {
    console.log("Printing invoice...");
  }
}

const printer = new DocumentPrinter<Invoice>();
printer.printItem(new Invoice());  //  Works