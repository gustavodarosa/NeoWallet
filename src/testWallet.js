const Wallet = require('./wallet');

// Criar uma nova instância da carteira
const minhaCarteira = new Wallet();

// Gerar o par de chaves
minhaCarteira.generateKeyPair();