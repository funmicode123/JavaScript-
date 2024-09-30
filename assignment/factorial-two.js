const readline = require('readline');

const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorialEquation(number){
     if (number === 0 || number === 1){
            return 1;
    }

    else {

        return number * factorialEquation(number - 1);
    }

}
read_line.question('Enter a number to calculate its factorial: ', (input) => {
    let number = parseInt(input);
    let approximationOfE = 1;

   
    for (let count = 1; count <= number; count++) {
        approximationOfE += 1/ factorialEquation(count);
    }

    console.log("The approximation of e using ",  number, "terms is", approximationOfE);

    read_line.close();
});
