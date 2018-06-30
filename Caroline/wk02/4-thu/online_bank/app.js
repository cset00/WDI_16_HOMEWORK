console.log('online bank')

// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account

//Note: only savings work for now...

var userInputSav = document.querySelector('.sav-input')
var savingsBalance = document.querySelector('#sav-bal')
var checkingBalance = document.querySelector('#chk-bal')
var withdrawButton = document.querySelector('.wd-btn')
var depositButton = document.querySelector('.dp-btn')
var savingsBackground = document.querySelector('.savings')
var checkingBackground = document.querySelector('.checking')

var balance = 0;
if(balance === 0) {
    savingsBackground.style.backgroundColor = "salmon"
} else {
    savingsBackground.style.backgroundColor = "lightgrey";
}

var deposit = function() {
    balance = Number(userInputSav.value) + balance
    updateBalance()
    if(balance === 0) {
        savingsBackground.style.backgroundColor = "salmon"
    } else {
        savingsBackground.style.backgroundColor = "lightgrey";
    }
}

var withdraw = function() {
    if (Number(userInputSav.value) > Number(savingsBalance.textContent)){
        alert("You can't withdraw more than your available balance")
        return balance
    }
    balance = balance - Number(userInputSav.value)
    updateBalance()
    if(balance === 0) {
        savingsBackground.style.backgroundColor = "salmon"
    } else {
        savingsBackground.style.backgroundColor = "lightgrey";
    }
}


var updateBalance = function() {
    savingsBalance.textContent = new Intl.NumberFormat().format(balance.toFixed(2))
}

//for some reason this function is error-ing... 

// var checkBalance = function() {
//     if(balance === 0) {
//         savingsBackground.style.backgroundColor = "salmon"
//     } else {
//         savingsBackground.style.backgroundColor = "grey";
//     }
// }


withdrawButton.addEventListener('click', withdraw)
depositButton.addEventListener('click', deposit)

