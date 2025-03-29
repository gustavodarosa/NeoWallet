import BCHJS from '@psf/bch-js';

const bchjs = new BCHJS();

class Wallet {
    constructor() {
        this.privateKey = null;
        this.publicKey = null;
        this.address = null;
        this.balance = 0; // Inicializando o saldo
        this.transactions = []; // Inicializando o histórico de transações
    }

    // Método para gerar o par de chaves
    async generateKeyPair() {
        // Gerar uma frase mnemônica
        const mnemonic = bchjs.Mnemonic.generate(128); // 128 bits de entropia
        console.log(`Frase Mnemônica: ${mnemonic}`);
    
        // Gerar a chave privada e o endereço a partir da frase mnemônica
        const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic); // Adicionado await
        const hdNode = bchjs.HDNode.fromSeed(rootSeed);
    
        this.privateKey = bchjs.HDNode.toWIF(hdNode); // Exporta a chave privada
        this.publicKey = bchjs.HDNode.toPublicKey(hdNode).toString('hex');
        this.address = bchjs.HDNode.toCashAddress(hdNode); // Gera o endereço no formato CashAddr
    
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