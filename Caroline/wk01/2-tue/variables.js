// ------The fortune teller

var noOfChildren = 3;
var nameOfPartner = "Blah";
var geoLocation = "Melbourne";
var jobTitle = "Software Developer";

var message = "You will be a "+ jobTitle + " in " + geoLocation + ", and married to " + nameOfPartner + " with " + noOfChildren + " kids."

console.log(message);




// -------The age calculator

var d = new Date ();
currentYear = d.getFullYear();
var birthYear = 1944;

possibleAge = currentYear - birthYear;
ageBeforeBirthday = possibleAge - 1;
console.log("They are either " + ageBeforeBirthday + " or " + possibleAge);




// --------Lifetime supply calculator

var currentAge = 12;
var maxAge = 80;
var amountPerDay = 5;

lifetimeSupply = (maxAge - currentAge) * amountPerDay * 365;
console.log("You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge + ".");

// ^ You could also create variables for: maxAge - currentAge and for amountPerDay * 365 so that it's shorter and more readable.