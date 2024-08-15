

// function sum(a, b) {
//     return a + b;
// }

// let ans = sum(2, 3)
// console.log(ans);

// // Find sum from 1 to a number

// function sum(n){

//     let ans = 0;
//     for (let i = 1; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans
// }

// const ans = sum(10);
// console.log(ans);


// // I/O operations from a file

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// // Synchronous code 

// function sum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans
// }

// const ans1 = sum(10);
// console.log(ans1);
// const ans2= sum(100);
// console.log(ans2);
// const ans3 = sum(1000);
// console.log(ans3);



// let a = readFile(a.txt);

// console.log("Hello");

// var a = wait(1);


// // read from a file

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// // function attribute of an object example
// var user = {
//     age: 21,
//     name: "harkirat",
//     calculateAge: function(){
//         return 10
//     }
// }

// console.log(user.calculateAge());

// // READ TWO FILES 

// const fsa = require("fs");

// const contents1 = fsa.readFile("a.txt", "utf-8");
// console.log(contents1)

// const contents2 = fsa.readFileSync("b.txt", "utf-8");
// console.log(contents2)

// READ TWO FILES ASYNC AND SYNC

const fsa = require("fs");

const contents1 = fsa.readFile("a.txt", "utf-8"); // Async
console.log(contents1)

const contents2 = fsa.readFileSync("b.txt", "utf-8"); // Sync
console.log(contents2)


// // CPU bound tasks

// let ans = 0;

// for(let i = 0; i < 1000; i++){
//     ans = ans + i;
// }
// console.log(ans);










