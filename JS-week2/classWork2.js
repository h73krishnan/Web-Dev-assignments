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


// READ FILE ASYNC

const fs = require('fs');

const print =  (err, data) => {
    console.log(data);
}

const contents1 = fs.readFile("a.txt", "utf-8", print);

const contents2 = fs.readFile("b.txt", "utf-8", print); 







