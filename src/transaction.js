class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now();
        this.signature = null;
    }

    signTransaction(signingKey) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error('You cannot sign transactions for other wallets!');
        }
        const txHash = this.calculateHash();
        this.signature = signingKey.sign(txHash, 'base64').toDER('hex');
    }

    calculateHash() {
        return `${this.fromAddress}${this.toAddress}${this.amount}${this.timestamp}`;
    }

    static isValidTransaction(transaction) {
        if (transaction.amount <= 0) {
            return false;
        }
        if (!transaction.fromAddress || !transaction.toAddress) {
            return false;
        }
        return true;
    }
}

module.exports = Transaction;