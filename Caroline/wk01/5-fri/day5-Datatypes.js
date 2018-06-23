//DATA TYPES


typeof 15
// Prediction: number
// Actual:

typeof 5.5
// Prediction: number
// Actual:

typeof NaN
// Prediction: number
// Actual:

typeof "hello"
// Prediction: string
// Actual:

typeof true
// Prediction: boolean
// Actual:

typeof 1 != 2
// Prediction: undefined 
// Actual: true
// ^ Should put brackets around what you want to typeof to.
// if you put brackets around it, it will return boolean (because it's true and true is a boolean) 


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual:

"hamburgers" - "s"
// Prediction: ?
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual:

"1" - "3"
// Prediction: NaN
// Actual: -2
// ^ Check out "equality table javascript"

"johnny" + 5
// Prediction: "johnny5"
// Actual:

"johnny" - 5
// Prediction: NaN
// Actual:

99 * "luftbaloons"
// Prediction: NaN
// Actual:


//-------------

// ARRAYS

// Add an element to the back of an array: 
// push

// Remove an element from the back of an array:
// pop

// Add an element to the front of an array:
// unshift

// Remove an element from the front of an array:
// shift

// Concatenates all the elements in an array into a string:
// join

// Separates the characters of a string into an array. This one is a string method:
// split



//-------------

//What will the contents of the below arrays be after the code samples are executed? 
//Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop()
// [2,4,6]
numbers.push(10)
// [2,4,6,10]
numbers.unshift(3)
// [3,2,4,6,10]



//--------------

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ") // "dot dash pause dash dot"
moreMorse.split(" ") // ["dot","dash","pause","dash","dot"]



//--------------

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // bands = [["Paul", "John", "George", "Pete"]] 
bands.unshift(stones) // bands = [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Pete"]]
//^ So it looks like pushing, and unshifting an array to another array creates an array inside of that array
// So to access "Brian" for example, I'd have to type in bands[0][0]
bands[bands.length - 1].pop() // bands[1].pop() --> bands = [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
bands[0].shift() // bands = [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
bands[1][3] = "Ringo" // bands = [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]



//----------------
//Booleans & Comparison Operators

// a	    b	    a && b
// true	    true	true
// true	    false	false
// false	true	false
// false	false	false

// a	    b	    a OR b
// true	    true	true
// true	    false	true
// false	true	true
// false	false	false

// a	b	a != b
// 3	3	false
// 1	5	true
// 2	"2"	false

// a	    b	    !a      (a OR b)     !a AND (a OR b)
// true	    true	false   true         false
// true	    false	false   true         false
// false	true	true    true         true
// false	false	true    false        false



//-----------

// Conditionals
// You're a bouncer at a bar. 
// Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

var age = 25;
var hasID = true;

if (hasID === true){
    if (age>75){
        console.log("Are you sure you want to be here?")
    } else if (age>21){
        console.log("Come on in!")
    } else if (age>=8 && age <= 21){
        console.log("Come on in (but no drinking)!")
    } else {
        console.log("You're too young to be in here!")
    }
} else {
    console.log("No ID, no entry.")
}

// Fizz-Buzz
// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.

for (var i=1;i<101;i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    } else if (i%3===0){
        console.log("Fizz")
    } else if (i%5===0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

//put the above into a function

var fizzBuzz = function(num){
    if (num%3===0 && num%5===0){
        console.log("FizzBuzz")
    } else if (num%3===0){
        console.log("Fizz")
    } else if (num%5===0){
        console.log("Buzz")
    } else {
        console.log(num)
    }
}
