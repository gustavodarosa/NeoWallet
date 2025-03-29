# Carteira Bitcoin Cash - NeoWallet

Este projeto é uma carteira simples de Bitcoin Cash implementada em JavaScript. Ele permite que os usuários gerenciem seus fundos de Bitcoin Cash (BCH), incluindo a criação de uma carteira, envio de transações e consulta de histórico.

## Funcionalidades

- **Geração de Pares de Chaves (Pública e Privada)**  
  Gere uma frase mnemônica, chave privada, chave pública e endereço no formato CashAddr.

- **Criação de Carteiras**  
  Crie uma nova carteira com suporte para geração de chaves e endereço.

- **Envio de Transações (Simulação)**  
  Simule o envio de BCH para outros endereços, com validação de saldo e registro no histórico.

- **Recebimento de Transações (Simulação)**  
  Simule o recebimento de BCH, atualizando o saldo da carteira.

- **Histórico de Transações**  
  Consulte o histórico de transações realizadas pela carteira.

## Estrutura do Projeto

```
bitcoin-cash-wallet
├── src
│   ├── wallet.js          # Gerenciamento da carteira
│   ├── transaction.js     # Manipulação de transações
│   ├── blockchain.js      # Interação com o blockchain
│   └── utils
│       └── helpers.js     # Funções utilitárias
├── package.json           # Dependências e scripts do projeto
├── .gitignore             # Arquivos a serem ignorados no Git
└── README.md              # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd bitcoin-cash-wallet
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para usar a carteira, você pode importar a classe `Wallet` de `src/wallet.js` e criar uma instância dela. Aqui está um exemplo simples:

```javascript
import Wallet from './src/wallet.js';

(async () => {
    const minhaCarteira = new Wallet();

    // Gerar o par de chaves
    await minhaCarteira.generateKeyPair();

    // Simular envio de transação
    minhaCarteira.receiveTransaction(10); // Adiciona 10 BCH ao saldo
    minhaCarteira.sendTransaction(5, 'endereco-do-recipiente'); // Envia 5 BCH

    // Consultar histórico de transações
    console.log(minhaCarteira.getTransactionHistory());
})();
```

## Metas do Projeto

- [x] **Geração de Pares de Chaves (Pública e Privada)**  
  Gere chaves criptográficas usando bibliotecas como `@psf/bch-js`.

- [x] **Criação de Carteiras**  
  Permitir que o usuário crie uma nova carteira com geração de chaves e endereço.

- [x] **Envio de Transações (Simulação)**  
  Simular o envio de BCH para outros endereços.

- [x] **Recebimento de Transações (Simulação)**  
  Simular o recebimento de BCH.

- [x] **Histórico de Transações**  
  Exibir o histórico de transações realizadas pela carteira.

- [ ] **Consulta de Saldo**  
  Implementar uma funcionalidade para consultar o saldo da carteira utilizando APIs externas.

- [ ] **Envio Real de Transações**  
  Criar uma funcionalidade para enviar transações reais na rede Bitcoin Cash.

- [ ] **Integração com APIs Externas para Preço do BCH**  
  Adicionar uma funcionalidade para consultar o preço atual do BCH em tempo real.

- [ ] **Validação de Transações**  
  Garantir que todas as transações sejam validadas antes de serem enviadas.

- [ ] **Testes Unitários**  
  Escrever testes para validar todas as funcionalidades principais.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões ou melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.