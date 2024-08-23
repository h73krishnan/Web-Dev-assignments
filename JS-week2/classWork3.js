// // ASYNC AWAIT IN FLUTTER

// // CASE 1: CALLBACK FUNCTION

// const fs = require("fs");

// function print(err, data){
//     console.log("Done!")
// }

// fs.readFile("a.txt", "utf-8", print);


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


// PROMISED SETTIMEOUT

const myPromise = new Promise(resolve =>setTimeout(resolve, 2000)); 

myPromise.then(print)

function print (){
    console.log("print after 2 seconds")
}

console.log("Third line printing")