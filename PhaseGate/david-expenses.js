let sum = 0;
let david = {
        "groceries": 150,
	"dining out": 100,
	"transportation": 50,
        "entertainment": 80

}
let davidExpenses =[150, 100, 50,80];
console.log(david);
for(let count in davidExpenses)
      sum += davidExpenses[count];;
     console.log(sum);

