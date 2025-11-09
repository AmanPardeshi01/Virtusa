
//Setter and Getter
class Student {
  constructor(name) {
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    this._name = newName;
  }
}

let s = new Student("Aman");
console.log(s.name);
s.name = "Harsh";
console.log(s.name);





function validateForm() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Name cannot be empty!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}


let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(n => n % 2 === 0);
let odd = numbers.filter(n => n % 2 !== 0);
console.log("Even:", even);
console.log("Odd:", odd);


let arr = [4, 9, 1, 7];
let largest = Math.max(...arr);
console.log("Largest:", largest);


function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false




function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("Hello World")); // 3



let arr2 = [9, 2, 5, 1];
let min = Math.min(...arr2);
console.log("Min:", min);




let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log(unique);








function changeColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
}



function add(a, b, c) {
  if (c !== undefined) return a + b + c;
  else return a + b;
}

console.log(add(2, 3));     // 5
console.log(add(2, 3, 4));  // 9


let a = "5";
let b = 5;

console.log(a == b);  // true  (checks only value)
console.log(a === b); // false (checks value + type)




