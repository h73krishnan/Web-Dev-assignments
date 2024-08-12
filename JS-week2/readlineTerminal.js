// requiring readline module
const readline = require('readline');

// creating an interface for reading input
const r1 = readline.createInterface({
    input: process.stdin,  // input from the terminal
    output: process.stdout
})

// asking question and receiving answer
// callback function
r1.question(`What is your name?`, (answer) => {
    console.log(`Hello,`, answer )

    // close the interface to end the program
    r1.close();
})


