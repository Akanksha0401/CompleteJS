// == loose euality, === strict equality
const age = "18";
if (age === 18)
    console.log("You became adult");
else
    console.log("datatypes are different for two 18s");

if (age == 18)
    console.log("Using loose equality, you became adult");
else
    console.log("Not became adult");

// in strict equality both sides of comaprison should be exactly same including the datatype, it doesnot perform type coersion

// in loose equality both side should be equal but not strictly , it performs type coersion

const fav = prompt("Enter your fav number");
console.log(typeof (fav));

if (fav == 45)// '45'==45
{
    console.log("using loose equality");
}
if (fav === 45) // '45'===45 not equal as datatype is different
{
    console.log("using strict equality");
}

// SOLUTION
const favo = Number(prompt("What is ur fav no."));
console.log(typeof (fav));
if (favo === 45) //45===45
{
    console.log("worked");
}

// we also have(!=) loose not equal, (!==) strict not equal


