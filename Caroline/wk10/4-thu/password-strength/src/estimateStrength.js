function estimateStrength(string){
  var toReturn = {
    score: 0
  }

  if (/[a-z]/.test(string)){
    toReturn.score += 1,
    toReturn.hasLowerCase = true
  }

  if (/\W/.test(string)){
    toReturn.score += 1,
    toReturn.hasSpecialChar = true
  } 

  if (/[A-Z]/.test(string)){
    toReturn.score += 1,
    toReturn.hasUpperCase = true
  }

  if(/[0-9]/.test(string)){
    toReturn.score += 1,
    toReturn.hasNumber = true
  }

  if (string.length > 8){
    toReturn.score += 1,
    toReturn.isOver8Char = true
  }

  return toReturn
  
}

module.exports = estimateStrength

// 1 point for lower case letters
// 1 point for upper case letters
// 1 point for 8 characters or more
// 1 point for numbers
// 1 point for non alpha numeric characters

// { 
//   score: 4, 
//   hasLowerCase: true, 
//   hasUpperCase: true,
//   hasNumber: true,
//   isOver8Char: true
// }

