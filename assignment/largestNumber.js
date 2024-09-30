let counter = 10;
let count = 1;
let largest = 0;
const readline = require('readline');

const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForAmount() {
    if (count <= counter) {
        read_line.question('Enter the amount sold: ', (amount) => {
            amount = parseFloat(amount); 
           
            if (amount > largest) {
                largest = amount;
            }

            count++; 
            
            askForAmount();
        });
    } 
    else {
        console.log("The largest amount is: " + largest);

        read_line.close();
    }
}

askForAmount();