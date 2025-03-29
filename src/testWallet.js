import Wallet from './wallet.js';
import promptSync from 'prompt-sync';

const prompt = promptSync(); // Inicializa o prompt

(async () => {
    const minhaCarteira = new Wallet();

    console.log("Bem-vindo à NeoWallet!");
    console.log("Escolha uma opção:");
    console.log("1 - Gerar uma nova carteira de Bitcoin Cash");
    console.log("2 - Consultar o preço atual do Bitcoin Cash");

    const opcao = prompt("Digite o número da opção desejada: ");

    if (opcao === "1") {
        // Gerar uma nova carteira
        await minhaCarteira.generateKeyPair();
        console.log("Carteira gerada com sucesso!");
        console.log(`Endereço: ${minhaCarteira.address}`);
        console.log(`Chave Privada: ${minhaCarteira.privateKey}`);
    } else if (opcao === "2") {
        // Consultar o preço do Bitcoin Cash
        console.log("Escolha a moeda:");
        console.log("1 - USD (Dólar)");
        console.log("2 - BRL (Real)");

        const moedaOpcao = prompt("Digite o número da moeda desejada: ");
        let moeda = "usd"; // Padrão para USD

        if (moedaOpcao === "2") {
            moeda = "brl"; // Altera para BRL
        }

        const price = await minhaCarteira.getBCHPrice(moeda);
        console.log(`Preço do Bitcoin Cash em ${moeda.toUpperCase()}: ${price}`);
    } else {
        console.log("Opção inválida. Saindo...");
    }
})();