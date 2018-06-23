// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

var combineWords = function(word1,word2) {
    return word1 + word2;
    }
    
    var newWord = combineWords('bo','jack');
    console.log(newWord);
    
    
    // 2. Write a function named calculateAge that:
    // - takes 2 arguments: birth year, current year.
    // - calculates the 2 possible ages based on those years.
    // outputs the result to the screen like so: "You are either 100 or 101"
    // - Call the function three times with different sets of values.
    
    var calculateAge = function(birthYear,currentYear) {
        var age1 = currentYear-birthYear;
        var age2 = age1-1;
        console.log('You are either ' + age2 + ' or ' + age1);
    }
    
    calculateAge(1989,2018);
    calculateAge(1983,2018);
    calculateAge(1944,2018);
    
    
    //  3. Write a function `lengths` that accepts a single parameter as an argument, namely
    // an array of strings. The function should return an array of numbers where each
    // number is the length of the corresponding string.
    
    
    
    //arrOfStrings = the thing you want to push to the newArray?
    
    var lengths = function (arrOfStrings) {
        var newArray = [];
    
        for (var i=0; i<arrOfStrings.length; i++) {
            newArray.push(arrOfStrings[i].length); 
        }
    
        console.log (newArray);  
    }
    
    lengths(['dogs','cat','flower']); //the function is expecting an array, so make sure to use square brackets when calling it
    
    
    
    
    // 4. Write a Javascript function called `transmogrifier`
    // This function should accept three arguments, which you can assume will be numbers.
    // Your function should return the "transmogrified" result
    //
    // The transmogrified result of three numbers is the product of the first two numbers,
    // raised to the power of the third number.

    //product of - multiplication?
    // raised to the power of - another multiplication?
    
    var transmogrifier = function (number1,number2,number3) {
        return (number1 * number2)*number3; 
    }
    
    transmogrifier(5,3,2);
    
    
    // 5. Write a function `wordReverse` that accepts a single argument, a string. The
    // method should return a string with the order of the words reversed. Don't worry
    // about punctuation.
    // Example: wordReverse('we are good friends') => 'friends good are we'
    
    
    var wordReverse = function(word) {
        return word.split(' ').reverse().join(' ');
    }
    
    wordReverse('hello sunshine');