let arr = [10, 8, 5, 4, 7];

function SumOfArray(arr) {
    
    let sum = 0; 
    for (let index = 0; index < arr.length; index++) { 
        sum += arr[index];
    }
    console.log("Sum:", sum);
}

SumOfArray(arr); 
