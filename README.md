# Carteira Bitcoin Cash - NeoWallet

Este projeto é uma carteira simples de Bitcoin Cash implementada em JavaScript. Ele permite que os usuários gerenciem seus fundos de Bitcoin Cash (BCH), incluindo a criação de uma carteira, verificação de saldos e envio de transações.

## Funcionalidades

- Criar uma nova carteira de Bitcoin Cash
- Verificar o saldo da carteira
- Enviar transações de Bitcoin Cash
- Recuperar o histórico de transações
- Validar transações

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
const Wallet = require('./src/wallet');

const minhaCarteira = new Wallet();
minhaCarteira.createWallet();
console.log(`Endereço da Carteira: ${minhaCarteira.getAddress()}`);
console.log(`Saldo: ${minhaCarteira.checkBalance()}`);
```

## Metas do Projeto

- [ ] **Geração de Pares de Chaves (Pública e Privada)**  
  Implementar um sistema seguro para gerar chaves criptográficas usando bibliotecas como `crypto` ou `bitcoin-cash-lib`.

- [ ] **Suporte a Endereços Formatados (CashAddr)**  
  Adicionar suporte ao formato de endereços padrão do Bitcoin Cash (CashAddr) para garantir compatibilidade com a rede BCH.

- [ ] **Criação de Carteiras**  
  Permitir que o usuário crie uma nova carteira diretamente pela interface web, exibindo o endereço público e armazenando a chave privada de forma segura.

- [ ] **Consulta de Saldo**  
  Implementar uma funcionalidade para consultar o saldo da carteira e exibi-lo na interface web, utilizando APIs externas como a [Blockchair API](https://blockchair.com/api/docs) ou [Bitcoin.com API](https://developers.bitcoin.com/).

- [ ] **Envio de Transações**  
  Criar um formulário na interface web para que o usuário insira o endereço do destinatário e o valor a ser enviado. A transação deve ser assinada com a chave privada da carteira.

- [ ] **Recebimento de Transações**  
  Exibir o endereço público da carteira na interface web para que o usuário possa receber BCH. Opcionalmente, monitorar a blockchain para confirmar transações recebidas.

- [ ] **Histórico de Transações**  
  Exibir o histórico de transações da carteira em uma página dedicada, utilizando APIs externas para buscar os dados.

- [ ] **Validação de Transações**  
  Garantir que todas as transações sejam validadas antes de serem enviadas, verificando assinaturas, valores e taxas.

- [ ] **Integração com APIs Externas para Preço do BCH**  
  Adicionar uma funcionalidade para consultar o preço atual do BCH em tempo real e exibi-lo na interface web.

- [ ] **Sistema de Logs**  
  Implementar um sistema de logs para registrar todas as operações realizadas pela carteira (criação, envio, recebimento, etc.).

- [ ] **Testes Unitários**  
  Escrever testes para validar todas as funcionalidades principais, garantindo a confiabilidade do sistema.

- [ ] **Criação de Páginas HTML**  
  Desenvolver páginas HTML para:
  - Criar e gerenciar carteiras
  - Consultar saldo
  - Enviar e receber transações
  - Exibir histórico de transações
  - Mostrar o preço do BCH em tempo real

- [ ] **Estilização com CSS**  
  Criar um design simples e responsivo para as páginas HTML, utilizando **CSS puro** ou frameworks como **Bootstrap** ou **Tailwind CSS**.

- [ ] **Interatividade com JavaScript**  
  Adicionar interatividade às páginas HTML usando JavaScript para manipular dados e interagir com o backend.

- [ ] **Documentação de Uso**  
  Criar uma documentação clara para que os usuários saibam como usar a interface web e suas funcionalidades.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões ou melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.