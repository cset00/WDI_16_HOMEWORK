const BankAccount = require('./bankAccount')



test('deposit 15',() => {
    let chkAcc = new BankAccount('checking')
    // chkAcc.deposit(15)

    expect(chkAcc.deposit(15)).toBe()
})

test('withdraw more than amt', () => {
    let chkAcc = new BankAccount('checking')
    // chkAcc.withdraw(15)

    expect(chkAcc.withdraw(15)).toBe('nope')
})