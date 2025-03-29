import Wallet from './wallet.js';

(async () => {
    // Criar uma nova instância da carteira
    const minhaCarteira = new Wallet();

    // Gerar o par de chaves
    await minhaCarteira.generateKeyPair(); // Adicionado await
})();