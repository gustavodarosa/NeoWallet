import bitcore from 'bitcoin-cash-lib'; // Certifique-se de que a biblioteca está instalada

class Wallet {
    constructor() {
        this.privateKey = null;
        this.publicKey = null;
        this.address = null;
        this.balance = 0; // Inicializando o saldo
        this.transactions = []; // Inicializando o histórico de transações
    }

    // Método para gerar o par de chaves
    generateKeyPair() {
        // Gerar uma chave privada
        const privateKey = new bitcore.PrivateKey();
        this.privateKey = privateKey.toString();

        // Gerar a chave pública correspondente
        const publicKey = privateKey.toPublicKey();
        this.publicKey = publicKey.toString();

        // Gerar o endereço Bitcoin Cash (formato CashAddr)
        const address = privateKey.toAddress();
        this.address = address.toString();

        console.log('Chaves geradas com sucesso!');
        console.log(`Chave Privada: ${this.privateKey}`);
        console.log(`Chave Pública: ${this.publicKey}`);
        console.log(`Endereço: ${this.address}`);
    }

    createWallet() {
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