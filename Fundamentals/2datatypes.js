// 7 primitive datatypes are there = number,string boolean, null, undefined ,symbol, bigint


let a; // undefined datatype
let isFun = true;
console.log(isFun);
// TYPEOF OPERATOR
console.log(typeof isFun);
console.log(typeof 23);
console.log(typeof "hey");
console.log(typeof true);

isFun = "YES";
console.log(isFun, typeof isFun);
console.log(typeof (a));  //type of return a string whose value is type of the given variable 
console.log(a); // return undefined datatype

// LET, VAR and CONST -method of declaring variables 


// LET can be used when we want to reassign value to a variable
let sum = 0;
sum = 45;
console.log(sum);

let year;
year = 2024;
console.log(year);

//it is also possible to declare a variable but not assign any value to it using let, but this not possible for const, if we use const ,the the variable shouldn't be empty. 

// CONST doesnot allow to reassign any value to the variable, and should also not left empty

const at = "home";
//at = "office";    // THIS WILL GIVE ERROR AS REASSIGNMENT TO CONST VARIABLE IS NOT ALLOWED

//const result;     // this will also give error as variable declared using const can't be empty

// VAR is similar to that of let , but used before ES6
var vehicle = "bike";
vehicle = "car";
console.log(vehicle);

// NOTE
totalFruits = 5; // This also works fine i.e. without using let,var or const,but should be highly avoided
console.log(totalFruits);