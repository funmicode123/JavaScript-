for(let counter = 1; counter <= 6; counter++){
	let row = '';
	for(let inner = 0; inner < counter; inner++){
		row += "*";
	}
	console.log(row);

}


console.log();

for(let counter = 6; counter > 0; counter--){
	let row = "";
	for(let inner = 0; inner < counter; inner++){
		row += "*";
	}
	console.log(row);

}


for(let counter = 6; counter >= 1; counter--){
	let row = '';
	for(let space = 0; space < 6 - counter; space++){
		row += "  ";
	}

	for(let inner = 1; inner <= counter; inner++){
		row += "* ";
		

	}

		console.log(row);

}


console.log();

for(let counter = 6; counter >= 1; counter--){
	let row = '';
	for(let space = 0; space < counter-1; space++){
		row += "  ";

	}

	for(let inner = 1; inner <= 6- counter + 1; inner++){
		row += "* ";

	}
			
		console.log(row);

}

