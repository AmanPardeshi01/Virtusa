// function getLenght<T extends {length: number}>(item : T) {
//     return item.length;
// }
var DocumentPrinter = /** @class */ (function () {
    function DocumentPrinter() {
    }
    DocumentPrinter.prototype.printItem = function (item) {
        item.print();
    };
    return DocumentPrinter;
}());
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    Invoice.prototype.print = function () {
        console.log("Printing invoice...");
    };
    return Invoice;
}());
var printer = new DocumentPrinter();
printer.printItem(new Invoice()); //  Works
