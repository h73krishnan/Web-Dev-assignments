// // ASYNC AWAIT IN FLUTTER

// // CASE 1: CALLBACK FUNCTION

// const fs = require("fs");

// function print(err, data){
//     console.log("Done!")
// }

// fs.readFile("a.txt", "utf-8", print);



// PROMISED READFILE AND SETTIMEOUT

// // // CASE 1: .THEN READFILE
// const fs = require("fs"); 

// const myPromise = new Promise((resolve, reject) => {
//     fs.readFile("a.txt", "utf-8", (err, data) => {
//         if (err){
//             reject(err);
//         }
//         else
//             resolve(data);
//     });
// })

// myPromise.then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// })
    


// // CASE 2: ASYNC AWAIT READFILE
// const fs = require("fs").promises;

// async function read(){
//     const data = await fs.readFile("a.txt", "utf-8");
//     console.log(data);
// }
// read(); 

// // CASE 3: PROMISED .THEN SETTIMEOUT

// new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000);
// }).then(() => {
//     console.log("Operation execution after 2 seconds")
// })

// CASE 4: PROMISED ASYC AWAIT SETTIMEOUT

// // setTimeout function without generic function

// async function timeout(){
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log("Operation after 2 seconds");
// }

// timeout();

// // // setTimeout function with generic function 

// async function timeout(duration, task){
//     await new Promise(resolve => setTimeout(resolve, duration));

//     task();

// }

// function apiRequest (){
//     console.log("Api request after 1 second");
// }

// function dataProcessing(){
//     console.log("Data processing after 1.5 seconds");
// }

// timeout(1000, apiRequest);
// timeout(1500, dataProcessing);
// timeout(2000, () => console.log("Random function execution after 2 seconds"));