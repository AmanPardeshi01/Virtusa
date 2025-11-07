// const user = { name: "Aman", age: 22, skills: ["JavaScript", "React", "Node.js"] };

// const json = JSON.stringify(user);

// console.log(json);

// const parsed = JSON.parse(json);

// console.log(parsed.name, parsed.age, parsed.skills);


// Promise Example
// let myPromis = new Promise(function(resolve, reject) {
//     let success = false;
//     if(success) {
//         resolve("The operation was successful.");
//     } else {
//         reject("The operation failed.");
//     }

// });


// console.log(myPromis);


// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//     if(success) {
//         resolve("Data fetched successfully.");
//     } else {
//         reject("Error fetching data!.");
//     }
// }, 2000);

// });

// promise
// .then((message) => { console.log("Success:", message);})
// .catch((error) => { console.log("Error:", error);})
// .finally(() => {  console.log("Promise has been settled.");});

// console.log(promise);



//Function Chaining Example

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 1 complete"), 1000);
//     });
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 2 complete"), 1000);
//     });
// }
// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 3 complete"), 1000);
//     });
// }
// step1()
//     .then((msg) => {
//         console.log(msg);
//         return step2();
//     })
// step2()
//     .then((msg) => {
//         console.log(msg);
//         return step3();
//     })

//     .then((msg) => console.log(msg))

//     .catch((err) => console.log(err))

//     .finally(() => console.log("all steps done")
//     );

// Await Function Example
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("📦 Data received!"), 2000);
//     });
// }

// async function getData() {
//     console.log("Fetching data...");

//     let result = await fetchData(); // waits until resolved
//     console.log(result);

//     console.log("Task completed!");
// }

// getData();


//fetch api EXAMPLE

// fetch('https://fakestoreapi.com/products/1')
//     .then(response => response.json())
//     .then(data => {console.log(data); return data;})
//     .then(data => console.log('Product Title:', data.id))
//     .catch(error => console.error('Error:', error));




