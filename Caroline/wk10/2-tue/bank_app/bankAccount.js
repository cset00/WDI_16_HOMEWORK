class BankAccount {
    constructor(type, balance=0 ){
        
        this.type = type
        this.bal = balance
        this.transactionHistory = [] 
    }

    withdraw(amt){
        if (amt <= this.bal) {
            this.transactionHistory.push(`-${amt}, bal: ${this.bal}`)
            return this.bal = this.bal - amt
        } else {
            return 'nope'
        }
    }

    deposit(amt){
        this.transactionHistory.push(`+${amt}, bal: ${this.bal}`)
        return this.bal = this.bal + amt
    }

    showBalance(){
        return this.bal
    }
}

module.exports = BankAccount


