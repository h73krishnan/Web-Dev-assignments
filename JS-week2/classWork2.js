// // FUNCTIONAL ARGUMENTS
// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }

  
//   console.log(sum(1, 2))


// // PASSING FUNCTIONS AS ARGUMENTS

// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     let val  = op(a, b)
//     return val;
//   }
  
//   console.log(doOperation(1, 2, divide));


// // Aynchronous code

// const fs = require('fs');

// fs.readFile("a.txt", "utf-8", (err, contents) => {
//     if (err) throw err;

//     console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", (err, contents) =>{
//     if (err) throw err;

//     console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", (err, contents) => {
//     if (err) throw err;

//     console.log(contents);
// });


// // READ FILE ASYNC

// const fs = require('fs');

// const print =  (err, data) => {
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", print);

// fs.readFile("b.txt", "utf-8", print); 

// console.log("Done");

// // ERROR FIRST FUNCTIONS HANDLING NO VALUE INPUT

// function print(value){

//     if(!value){
//         // create and throw error
//         throw new Error("value is required!");
//     }
//     return 'Value received, ${value}';
// }

// try{
//     print(); // ERROR
// }
// catch(err){ // error handling
//     console.error(error.message) // output: "value is required!"
// }

// // ERROR LOGIC

// const fs = require('fs');

// function print(err, data){
//    if(err){
//     console.log("File not found"); 
//    } else {
//     console.log(data);
//    }

// }

// fs.readFile("a.txt", "utf-8", print);

// setTimeout

console.log("Hi!");

function timeout(){
    console.log("Click the button!")
}


setTimeout(timeout, 5000); 

console.log("Welcome to loupe.");

console.time('loop');

let c = 0;

for(let i = 0; i < 10000000000; i++){
    c = c + i;
}
console.timeEnd('loop');
console.log("Expensive operation done");










