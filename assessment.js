/*
Indepedent Studio Services
https://issprops.com

Software Developer Candidate Assessment
*/

// #1
// Q: What is the difference between let and var
// A: Var has function scope while let has block scope 
// function() {
//	for ( var/let i = 0; i < 10; i++) {
//	}
//	If var was used i is accesible here
//	If let was used i is NOT accesible here
//}



// #2
// Q: Write a function that takes 2 arguments, first one is an array, second one is a string. loop through the array and find a matching result of the second argument. return the matched index of the array, if there is any
function findString(arr, target) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == target) {
			return i;
		} 
	}
	return "Not found";
}


// #3
// Q: Fix the bug
function average(a, b) {
//	return a + b / 2;
//	Wrong order of operations parentesis required
	return (a + b) / 2;
}

console.log(average(2, 1));


// #4
// Q: What is the output?
let a = 22;
let b = 'abc';
let c = 51;
let d = a + b + c;

console.log(d);
// "22abc51"


// #5
// Q: Call the function in Q #2 with the following data and what is the output?
let animals = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Turtle', 'Bear'];
let find = 'Whale';
// NOT FOUND
