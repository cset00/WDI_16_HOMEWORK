var startBtn = document.querySelector('#start')
var pauseBtn = document.querySelector('#pause')
var resetBtn = document.querySelector('#reset')

var seconds = 0
var intervalID



var updateTime = function() {
    seconds++
    document.querySelector('#timer').textContent = seconds
}

var startTimer = function() {
    if (intervalID > 0) {
        return
        // ^ but this causes start after pause button to not run,
        // clear interval doesn't clear the id :/ 
    }

    intervalID = setInterval(updateTime,1000) 
}

var stopTimer = function() {
    clearInterval(intervalID)
    intervalID = 0
}

var resetTimer = function() {
    clearInterval(intervalID)
    seconds = 0
    intervalID = 0
    document.querySelector('#timer').textContent = 'Stop Watch'
}

startBtn.addEventListener('click',startTimer)
pauseBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
