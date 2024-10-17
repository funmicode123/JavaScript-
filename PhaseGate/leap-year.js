function isLeapYear(yearInputted) {
    if (yearInputted % 4 === 0 && yearInputted % 100 !== 0 || yearInputted % 400 === 0) {
        return "True";
    } else {
        return "False";
    }
}

console.log(isLeapYear(2024));  
console.log(isLeapYear(1900));  
console.log(isLeapYear(2000)); 
