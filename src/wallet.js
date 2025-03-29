class Wallet {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    createWallet() {
        // Logic to create a new wallet
        console.log("Wallet created.");
    }

    checkBalance() {
        return this.balance;
    }

    sendTransaction(amount, recipient) {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }

        const transaction = {
            amount: amount,
            recipient: recipient,
            timestamp: new Date().toISOString()
        };

        this.transactions.push(transaction);
        this.balance -= amount;
        console.log(`Transaction sent: ${amount} BCH to ${recipient}`);
    }

    receiveTransaction(amount) {
        this.balance += amount;
        console.log(`Received: ${amount} BCH`);
    }

    getTransactionHistory() {
        return this.transactions;
    }
}

export default Wallet;