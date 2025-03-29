class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
    }

    createBlock(previousHash) {
        const block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            previousHash: previousHash || this.getLastBlock().hash,
        };

        this.pendingTransactions = [];
        this.chain.push(block);
        return block;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
        return this.getLastBlock().index + 1;
    }

    getTransactionHistory() {
        return this.chain;
    }

    validateTransaction(transaction) {
        // Implement validation logic here
        return true;
    }
}

module.exports = Blockchain;