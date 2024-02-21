const now = 2024;
const byear = 2008;
if ((now - byear) >= 18)
    console.log("You are eligible to vote😄");
else
    console.log(`Wait for another ${18 - (now - byear)} years`);

// THE BELOW CODE WILL GIVE ERROR AS LET KEYWORD HAS BLOCK LEVEL SCOPE , SO IF century is accessed BEYOND THAT BLOCK ,it will show century is not defined

/*const birthYear = 2001;
if (birthYear >= 2000) {
    let century = 21;
}
else {
    let century = 20;
}
console.log(century);
*/

//CORRECTED CODE
const birthYear = 2001;
let century;
if (birthYear > 2000) {
    century = 21;
}
else {
    century = 20;
}
console.log(century);