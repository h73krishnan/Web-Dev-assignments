// // funciton to write the sum of two numbers

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(3, 5));

// // function to find sum of n numbers

// function sumN(n){
//     let ans = 0;
//     for(let i = 0; i < n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// console.log(sumN(10));

// // SYNCHRONOUS read function

// const fs = require('fs');

// const contents = fs.readFileSync("a.txt", "utf-8");

// console.log(contents);

// // FUNCTION attribute of an object

// let client = {name: "harkirat", age: 25, 
//     age: function(age){
//         if(age > 18){
//             return true;
//          }
//     }
//  }
 
//  console.log(client.age(23));

// // VALUE AS ARGUMENT

// function sum(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }

// let sol;

// sol = divide(10, sum(2, 3)); // send a value

// console.log(sol);

// // FUNCTION AS ARGUMENT
// // GENERIC FUNCTION: DO ANY OPERATION

// function sum(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }

// function doOperation(a, b, op){
//     let val = op(a, b);
//     return val;
// }

// console.log(doOperation(10, 5, divide));

// // ASYNCHRONOUS FUNCTIONS
// // READ FROM A FILE

// const fs = require('fs');

// function read(err, content){
//     console.log("error");
//     console.log(err);

//     console.log("content")
//     console.log(content);
// }

// fs.readFile("ajbg.txt", "utf-8", read);


// // SETTIMEOUT 

// console.log("Hi");

// function timeout(){
//     console.log("Print after timeout")
// }

// setTimeout(timeout, 50);

// // // function to check the device time as well
// let c = 0;
// for (let i = 0; i < 10000; i++){
//     c = c + i;
// }

// console.log("Expensive operation done");


// // read from a file asynchronously and synchronously


// const fs = require('fs');

// fs.readFile("a.txt", "utf-8", (err, contents1) => {
//   if (err) throw err;
//   console.log(contents1);
// });

// const contents2 = fs.readFileSync("a.txt", "utf-8");

// console.log(contents2);


// // READ FROM FILE ASYNC

// const fs = require('fs');

// const print = (err, contents) => {
//   console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", print);

// fs.readFile("b.txt", "utf-8", print);


// // What is going to be completed first?

// const fs = require('fs');

// function print(err, contents) {
//   console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", print);
// fs.readFile("b.txt", "utf-8", print);

// console.log("Data!");


// // SETTIMEOUT 

// console.log("Hi");

// function timeout(){
//     console.log("Print this out");
// }

// setTimeout(timeout, 5000);

// console.log("Welcome to the loupe!");

// // ERROR

// function sample(value){
//     if(!value){
//         throw new Error ("value is required");
//     }
//     console.log("value received ${value}")
// }

// try{
//     sample(); // this creates the error
// }
// catch(err){// error handling
//     console.error(err.message); // value is required
// }

// // ERROR CODE OF HARKIRAT

// const fs = require("fs");

// function read(err, data){
//     console.log("err");
//     console.log(err);

//     console.log("data");
//     console.log(data);

// }

// fs.readFile("a.txt", "utf-8", read);


// // CASE 1: ASYNC PROMISED READFILE


// const fs = require("fs").promises;

// async function read(){
//     const data = await fs.readFile("a.txt", "utf-8");

//     console.log(data);
// }

// read();

// // CASE 2: .then PROMISED READFILE
// const fs = require("fs");

// const myPromise = new Promise((resolve) =>{
//     const data = fs.readFile("a.txt", "utf-8", (err, data) => {
//         resolve(data);
//     });
// })

// myPromise.then((data)=>{
//     console.log(data);
// })


// // CASE 3: ASYNC PROMISED READFILE WITH ERROR


// const fs = require("fs").promises;

// async function read(){
//     try{
//         const data = await fs.readFile("a.txt", "utf-8");
//         console.log("here")

//         console.log(data);
//     }
//     catch(err){
//         console.log("err, ${err}")
//     }
// }

// read();

// // CASE 4: .then PROMISED READFILE WITH ERROR
// const { rejects } = require("assert");
// const fs = require("fs");

// const myPromise = new Promise((resolve, reject) =>{
//     const data = fs.readFile("a.txt", "utf-8", (err, data) => {
//         if(err){
//             reject(err);
//         }
//         else resolve(data);
//     });
// })

// myPromise.then((data)=>{
//     console.log(data);

// }).catch((err) => {
//     console.log("err", err);
// });



// // CASE 1: PROMISED ASYNC AWAIT SETTIMEOUT

// const timeout = async () =>{
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     console.log("Timeout finished!")
// }

// timeout();


// CASE 2: PROMISED .then setTimeout

new Promise((resolve, reject) => setTimeout(resolve, 2000)).then(() =>{
    console.log("Timeout Finished!")
}).catch((err) => {
    console.log("err")
})


