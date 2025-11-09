

let arr = ["Aman", "Kajal", "Andy", "Vishal"];
let num = [4,6,2,7,2,7];
console.log(arr[0] - arr[2]);
console.log(num[0] + num[1]);


let arr1 = new Array("Aman","Pardeshi");
console.log(arr1);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let ar of arr){
//     console.log(ar);
// }

// arr.forEach(function(arr){
//     console.log(arr);
// });


arr.push("Abhishek");
console.log(arr);
arr.pop("Abhishek");
arr.unshift("Shubham");
arr.shift();
num.pop();
num.push(8);
console.log(num);
console.log(arr);
console.log(arr.indexOf("Kajal"));
console.log(arr.includes("Aman"));
console.log(arr.slice(0,3));
console.log(arr);
console.log(arr.splice(0,2,"Abhishek"));
console.log(arr);
console.log(arr.concat(num));
console.log(arr.join(","));
console.log(arr.reverse());
console.log(arr.sort());
console.log(num.sort());

let arrs = arr.map( ar => ar + " " + "Good Morning");
console.log(arrs);

let nums = num.map(n => n / 2);
console.log(nums);

let arrss = arr.filter(n => 50  > n.length);
console.log(arrss);

let numss = num.filter( n => 5 < n);
console.log(numss);

let numsss = [10, 20, 30];
let total = numsss.reduce((sum, val) => sum + val, 0);
console.log(total); // 60

let users = [10, 20, 30, 40];
console.log(users.find(u => u > 25)); // 30
console.log(users.findIndex(u => u > 30)); // 2




console.log(a);
var a = 10;


class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance; // "_" indicates private
  }

  deposit(amount) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

let account = new BankAccount("Aman", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500





// Arrow Function
const add = (a , b) => a+ b;
console.log(add(5, 10));