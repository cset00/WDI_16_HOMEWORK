function scoreToStrength(num){
  if (num > 0 && num < 3){
    return 'Weak'
  } else if (num === 3){
    return 'Medium'
  } else if (num > 3 && num < 5){
    return 'Strong'
  } else if (num === 5) {
    return 'Super Strong!'
  } else {
    return ''
  }
}

module.exports = scoreToStrength