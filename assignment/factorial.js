const readline = require('readline');

const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read_line.question('Enter a number to calculate its factorial: ', (input) => {
    let number = parseInt(input);
    let factorial = 1;

    if (number < 0){
        console.log("Negative integers are not valid");
        read_line.close();
        return;
    }
   

    for (let count = 1; count <= number; count++) {
        factorial *= count;
    }

    console.log("Factorial of ", number, "is", factorial);

    read_line.close();
});
