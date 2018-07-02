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
var userInputChk = document.querySelector('.chk-input')
var savingsBalance = document.querySelector('#sav-bal')
var checkingBalance = document.querySelector('#chk-bal')
var withdrawButton = document.querySelector('.wd-btn')
var depositButton = document.querySelector('.dp-btn')
var savingsBackground = document.querySelector('.savings')
var checkingBackground = document.querySelector('.checking')
var withdrawChkButton = document.querySelector('.wdchk-btn')
var depositChkButton = document.querySelector('.dpchk-btn')

// var updateBalance = function() {
//     if(savBalance === 0) {
//         savingsBackground.style.backgroundColor = "salmon"
//     } else {
//         savingsBackground.style.backgroundColor = "lightgrey";
//     }
//     savingsBalance.textContent = new Intl.NumberFormat().format(savBalance.toFixed(2))
// }

var updateBalance = function(accountBal,whichBG,text) {
    if(accountBal === 0) {
        whichBG.style.backgroundColor = "salmon"
    } else {
        whichBG.style.backgroundColor = "lightgrey";
    }
    text.textContent = new Intl.NumberFormat().format(accountBal.toFixed(2))
}

var savDeposit = function() {
    savBalance = Number(userInputSav.value) + savBalance
    updateBalance(savBalance,savingsBackground,savingsBalance)
}

var chkDeposit = function() {
    chkBalance = Number(userInputChk.value) + chkBalance
    updateBalance(chkBalance,checkingBackground,checkingBalance)
}

var savWithdraw = function() {
    if (Number(userInputSav.value) > Number(savingsBalance.textContent)){
        alert("You can't withdraw more than your available balance")
        return savBalance
    }
    savBalance = savBalance - Number(userInputSav.value)
    updateBalance(savBalance,savingsBackground,savingsBalance)
}

var chkWithdraw = function() {
    if (Number(userInputChk.value) > Number(checkingBalance.textContent)){
        alert("You can't withdraw more than your available balance")
        return chkBalance
    }
    chkBalance = chkBalance - Number(userInputChk.value)
    updateBalance(chkBalance,checkingBackground,checkingBalance)
}

var savBalance = 0;
updateBalance(savBalance,savingsBackground,savingsBalance)

var chkBalance = 0;
updateBalance(chkBalance,checkingBackground,checkingBalance)

withdrawButton.addEventListener('click', savWithdraw)
depositButton.addEventListener('click', savDeposit)
withdrawChkButton.addEventListener('click', chkWithdraw)
depositChkButton.addEventListener('click', chkDeposit)

