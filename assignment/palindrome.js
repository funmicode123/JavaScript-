const readline = require('readline');

const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


read_line.question('Enter the 5-digit number: ', (palindrome) => {
    let number = palindrome.toString();

    if (number.length === 5 && number[0] === number[4] && number[1] === number[3]) {
        console.log(number + " is a palindrome");
    } 
    else {
        console.log(number + " is not a palindrome");
    }

    read_line.close();
});
