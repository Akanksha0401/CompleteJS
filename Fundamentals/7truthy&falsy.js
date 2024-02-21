// 5 falsy values 0, ' ', NaN, undefined , null
console.log(Boolean(0));
console.log(Boolean(''), Boolean(' ')); //false, true coz first one is empty string and second one is a string that has a space
console.log(Boolean({}));

const a = 0;
if (a) {                     // it means if(false)
    console.log("a is non-zero");
}
else {
    console.log("a is 0");
}