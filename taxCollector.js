let percentage1 = 0.15;
let percentage2 = 0.20;

const readline = require('readline');

const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read_line.question('Enter the Tax customer name ', (name) => {
    read_line.question('Enter the yearly earning ', (earnings) => {
    earning = parseFloat(earnings);

    console.log(`Hello ${name}, your earning is ${earnings}.`);
        
    let tax = 0;
	
    if (earnings <= 30000){
        tax =(percentage1) * earnings;
        console.log("The annual tax for you is: ", tax);  
    }
    else{
        tax = (percentage2) * earnings;
        console.log("The annual tax for you is: ", tax);
    }
	
    read_line.close();
    });
});
