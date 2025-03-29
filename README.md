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

- [ ] Implementar geração de pares de chaves (pública e privada) para a carteira
- [ ] Adicionar suporte para endereços formatados de Bitcoin Cash
- [ ] Criar validação robusta para transações
- [ ] Integrar com APIs externas para consultar o preço do Bitcoin Cash em tempo real
- [ ] Adicionar testes unitários para todas as funcionalidades principais
- [ ] Criar uma interface gráfica simples para interação com a carteira

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões ou melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.