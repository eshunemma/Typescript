class Account {
    nickname?: string;

    constructor(public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error ('Invalid amount')
        this._balance += amount;
    }

    // accesing the balance from the function directly outside the class
    get balance(): number {
        return this._balance
    }

   // to be able to set values to the function outside the class 
    // set balance(value: number){
    //     if (value < 0)
    //        throw new Error('Invalid Value')
    //     this._balance = value 
    // }
}

let account = new Account(1, 'Emma', 0)
console.log(account.balance);
// account.balance = 1 //setters caller
