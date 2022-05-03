// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:
// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description

class Account {
    constructor(accountHolder){
        this.name = accountHolder
        this.balance = 0
    }

    credit(amount) {
        this.balance += amount

    }

    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`

    }
}

//Three accounts that are stored in an array
const accountList = [new Account('Sean'), new Account('Brad'), new Account('Georges')]

//Credits 1000 to each account (item) (object)
accountList.forEach(item => {
    item.credit(1000)
    console.log(item.describe())
})
