const Fname = "Akanksha";
const Lname = "Mishra";
const byear = 2001;

const result = "I'm " + Fname + Lname + " age " + (2024 - byear) + " years old";
console.log(result);

// WE CAN DO THE ABOVE SAME THING BY SIMPLY USING A Template literals

//Templates literals are better ways to concatenate strings and insert variables/ numbers in between them

const ans = `I'm ${Fname} ${Lname} age ${2024 - byear} years old`;
console.log(ans);

// normal string can also be written using template literals
console.log(`Hey! This is Akanksha`);

// we can use template literals is we want to write multi line string
console.log(`Hey!
I am here!
THis is amazing!`)

