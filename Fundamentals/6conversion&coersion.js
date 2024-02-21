// type conversion is manually converting datatypes one to another
// type coersion is the JS automatically converts datatypes from one to another

// TYPE CONVERSION
const year = "1991";
console.log(year + 45); // it will not add 45 to 1991 rather concatenate both strings

// to add both we need to change type of year
console.log(Number(year) + 45);
console.log(String(5672)); // number can also be converted to string

//but we can't do this
console.log(Number("Akanksha"));

//TYPE COERSION
console.log("I am Akanksha " + 23 + " years old"); // JS already converted number to string for concatenation


// IMPORTANT NOTE !!!!
console.log('67' - '24') // but the output of this is 44 , because '-' operator doesnot do number to string rather it converts string to numbers
console.log('45' * '2') // output is 90
