# Javascript Assignments

## Table of Contents

- [Topics](#Topics)
- [Technologies](#technologies)
- [Time](#time)
- [Tips](#tips)
- [Githubtips](#githubtips)
- [Explanations](#explanations)

## Topics 
classWork.js
- function 
- synchronous and asynchronous code
- I/O operations
- CPU bound tasks   

## Technologies 
- Javascript

## Tips
node installation
- install using pre installer
- restart the laptop and node nameFile.js should execute

## Githubtips
- git clone: git init works with git clone

## Explanations
### Input from terminal
Input taken from terminal and output displayed in the terminal

`const readline = require('readline');
`
- readline is an inbuilt module inside node.js
- we require readline set of code for creating input instance of interface to record input from terminal

`
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
`
- readline is a module inside node.js 
- .createInterface creates an instance of the interface
- process is an object in node.js and stdin means standard input
- the above line says let the input in the terminal goes to input:
- likewise let the output come out in terminal
#### Asking question in the terminal
`
r1.question("What is your name?", (answer) => {
    console.log("Hello,", answer)
    r1.close();
})
`
- r1 is the instance of the interface
- question is the function which asks the question "What is your name?" in the terminal
- answer is returned and printed in the terminal
- r1.close(); closes the interface

