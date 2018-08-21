const BankAccount = require('./bankAccount')

var checkAcc = new BankAccount("checking")
console.log(checkAcc)
checkAcc.deposit(50)
checkAcc.withdraw(60)
checkAcc.showBalance()
console.log(checkAcc)

var savAcc = new BankAccount("savings")
console.log(savAcc)
savAcc.deposit(150)
savAcc.withdraw(5)
savAcc.withdraw(40)
savAcc.showBalance()
console.log(savAcc)

