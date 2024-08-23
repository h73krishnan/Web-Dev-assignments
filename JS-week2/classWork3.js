// // ASYNC AWAIT IN FLUTTER

// // CASE 1: CALLBACK FUNCTION

// const fs = require("fs");

// function print(err, data){
//     console.log("Done!")
// }

// fs.readFile("a.txt", "utf-8", print);

// // CASE 2: ASYNC AWAIT READFILE

// const fs = require("fs").promises;

// async function readFile(){
//     const data = await fs.readFile("b.txt", "utf-8");
// console.log("Done Async await!");

// }

// readFile();

// PROMISED SETTIMEOUT

const myPromise = new Promise(resolve =>setTimeout(resolve, 2000)); 

myPromise.then(print)

function print (){
    console.log("print after 2 seconds")
}

console.log("Third line printing")