// ----------The even/odd reporter


for (i=0; i<21; i++) {
    if (i%2===0){
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
};

// ----------Multiplication tables

for (i=0; i<11; i++){
    for (a=0; a<11; a++){
        console.log(i + " * " + a + " = " + (i * a));
    };   
}



// ------------Your top choices


var topColor = ["Green", "Purple", "Pink", "Yellow"];
var suffix = ['st','nd', 'rd', 'th'];

for (i=0; i<topColor.length; i++){
    console.log("My " + (i+1) + suffix[i] + ' choice is ' + topColor[i] + "."); 
}


// for (i=0; i<topColor.length; i++){
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


