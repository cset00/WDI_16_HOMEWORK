console.log('Timers Research')

// setTimeout
// allows a function to run once after the interval of time
// how to use it:
// var timeoutID;
// function delayedAlert() {
//     timeoutID = window.setTimeout(function, 2000);
//   }
// need to have the function create here.
// Parameters: function and timer (in milliseconds)
// Return value: The returned timeoutID is a positive integer value 
// which identifies the timer created by the call to setTimeout(); 
// this value can be passed to clearTimeout() to cancel the timeout.

// setInterval
// allows a function to run several times every interval of time
// how to use it: 
// var intervalID = window.setInterval(function, 500);
// need to have the function created here, too. 
// Parameters: function and timer.
// Return value: The returned intervalID is a numeric, 
// non-zero value which identifies the timer created by the call to setInterval(); 
// this value can be passed to WindowOrWorkerGlobalScope.clearInterval() to cancel the timeout.

var num = 10;

var countdown = function() {
        console.log(num)
        num--
        
        if (num === 0){
            window.clearInterval(intervalID)
            console.log('BOOM! Timer stopped.')
        }
    }

var intervalID = window.setInterval(countdown,1000)

