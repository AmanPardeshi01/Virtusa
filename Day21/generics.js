function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(101));
function getFirstElement(arr) {
    return arr[0];
}
var num = getFirstElement([1, 2, 3]);
var str = getFirstElement(["a", "b", "c"]);
var stringBox = { contents: "Books" };
var numberBox = { contents: 42 };
var Container = /** @class */ (function () {
    function Container(value) {
        this.value = value;
    }
    Container.prototype.getValue = function () {
        return this.value;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getValue());
