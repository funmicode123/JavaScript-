let number = 8;
let factorial = 1;
let count = 1;

if (number < 0) {
    console.log("Negative integers are not valid.");
} else {
    while (count <= number) {
        factorial *= count;

        if (factorial >= 1000) {
            console.log("Factorial exceeded 1000 at step:", count);
            break; 
        }

        count++;
    }

    if (factorial < 1000) {
        console.log("Factorial of", number, "is", factorial);
    }
}
