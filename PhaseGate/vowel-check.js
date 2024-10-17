let letters = "hello world";
let counter = 0;
vowels = ["a","e","i", "o", "u"];

for(let index = 0; index <= letters.length; index++){
    for(let count = 0; count <= vowels.length; count++){
        if (letters.charAt(index) == vowels[count]){
            counter ++;
        }
    }

}


console.log(counter);