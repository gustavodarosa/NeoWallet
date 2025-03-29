import BCHJS from '@psf/bch-js';
import axios from 'axios'; // Importar Axios


const bchjs = new BCHJS({ restURL: 'https://testnet3.fullstack.cash/v3/' });


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

    async getBCHPrice(currency = 'usd') {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
                params: {
                    ids: 'bitcoin-cash', // ID do Bitcoin Cash na CoinGecko
                    vs_currencies: currency // Moeda de referência (USD ou BRL)
                }
            });

            const price = response.data['bitcoin-cash'][currency];
            return price;
        } catch (error) {
            console.error('Erro ao consultar o preço do Bitcoin Cash:', error);
            throw error;
        }
    }
}

export default Wallet;