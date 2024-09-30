/*
const library = {
	ID: 426,
	Available: true,
	Count : 10,
	Name: "Secret To Success",
	Author : "Kayle Doe"
}

library.Available = false
console.log(library)


let balance = 200;
let amount = 1000;
let result = (balance < amount) ? "Insufficient fund" : "You can withdraw"

console.log(result)

//LOOP

let number =10;
let count = 1;

while(count <= number) {
	console.log(count)
	count++
}


let number =10;
let count = 1;

do{
	console.log(count)
	count++
}
while(count <= number)



let array = [6, 10, 22, "boy"]

for (let index in array){
	//index
	console.log(index)

	//element
	console.log(array[index])
}


//user is an object.
let user = {
	age: 12,
	sex: "male"

}

for(let count in user)
	//console.log(user[count]);


//for(let count of user) //of is used for iterable object(i.e array)




let word = "funmilola"

for(let char of word){
	console.log(char);

};



let array = [1, 2, "dog", "cat"];

for (let element of array){
	console.log(element);

}
*/

//Task 1
let number =20;
let count = 1;

while(count <= number) {
	multiple = count * 2;
	console.log(multiple);
	count++;
}


//Task 2
console.log();


let balance = 500;
let withdrawal = 50;

do{
	balance -= withdrawal;
	console.log("Balance: ", balance);
	count++;
}
while(withdrawal <= balance);


//Task 3
console.log();


let start = 10;
let stop = 1;

while(start >= stop){
	console.log("Liftoff! ", start);
	start--;
		if(start === 0)
			console.log("Liftoff!!!");
}














