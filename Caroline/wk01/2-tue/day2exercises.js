// var d = new Date();
// var currentYear = d.getFullYear();

// if (currentYear === 2018){
//     console.log("I'm in the present!");
// } else if (currentYear < 2018) {
//     console.log("Whoa! Blast from the past!");
// } else {
//     console.log("Greetings from the future!");
// };

// write a program that will ask for your name
// it will then display "hello name" where 'name' is the name you entered


// ---------

// var userName = prompt('What is your name?');
// var userAge = prompt('How old are you?');

// console.log('Hello ' + userName);


//     if (Number(userAge) === 60) {
//         console.log("Hey you're half way there");
//     } else if (Number(userAge) < 60){
//         console.log("Young and beautiful");
//     } else {
//         console.log("Somehow still alive and kicking");
//     };




// ------The fortune teller

// var noOfChildren = 3;
// var nameOfPartner = "Blah";
// var geoLocation = "Melbourne";
// var jobTitle = "Software Developer";

// var message = "You will be a "+ jobTitle + " in " + geoLocation + ", and married to " + nameOfPartner + " with " + noOfChildren + " kids."

// console.log(message);




// -------The age calculator

// var d = new Date ();
// currentYear = d.getFullYear();
// var birthYear = 1944;

// possibleAge = currentYear - birthYear;
// ageBeforeBirthday = possibleAge - 1;
// console.log("They are either " + ageBeforeBirthday + " or " + possibleAge);




// --------Lifetime supply calculator

// var currentAge = 12;
// var maxAge = 80;
// var amountPerDay = 5;

// lifetimeSupply = (maxAge - currentAge) * amountPerDay * 365;
// console.log("You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge + ".");

// ^ You could also create variables for: maxAge - currentAge and for amountPerDay * 365 so that it's shorter and more readable.




// ----------The even/odd reporter


// for (var i=0; i<21; i++) {
//     if (i%2===0){
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// };





// ----------Multiplication tables

// for (var i=0; i<11; i++){
//     for (var a=0; a<11; a++){
//         console.log(i + " * " + a + " = " + (i * a));
//     };   
// }





// ------------Your top choices


// var topColor = ["Green", "Purple", "Pink", "Yellow"];


// for (var i=0; i<topColor.length; i++){
//     if (i===0){
//         console.log("My " + (i+1) + "st choice is " + topColor[i] + ".");    
//     } else if (i===1){
//         console.log("My " + (i+1) + "nd choice is " + topColor[i] + ".");
//     } else if (i===2){
//         console.log("My " + (i+1) + "rd choice is " + topColor[i] + ".");
//     } else {
//         console.log("My " + (i+1) + "th choice is " + topColor[i] + ".");
//     }
// }

// ^ what would be even better is to have a variable for the suffix. var suffix = ['st', 'nd', 'rd', 'th'];
// and for inside the for loop statement
// console.log('my ' + (i+1) + suffix[i] + ' choice is ' + topColor[i]);