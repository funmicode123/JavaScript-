let number =1;

console.log("N\tN^2\tN^3\tN^4");
console.log();

while (number < 6) {

	let square = Math.pow(number, 2);
	let cube = Math.pow(number, 3);
	let quad = Math.pow(number, 4);

	console.log(number + "\t" + square + "\t" + cube + "\t" + quad);

	number += 1;

}
