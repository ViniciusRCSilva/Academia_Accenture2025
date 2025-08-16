# Academia Accenture 2025 - DemoQA Web Tables Cypress Test Automation

Este projeto contém o teste automatizado usando Cypress com Cucumber para validar operações CRUD na página Web Tables do site DemoQA.

## Estrutura do Projeto

```
├── cypress/
│   ├── e2e/                                # Arquivos de especificação Cucumber (.feature)
│   │   └── webtables_crud.feature          # Cenários de teste para Web Tables
│   ├── fixtures/                           # Dados de teste
│   │   └── example.json                    # Dados de exemplo (Não utilizado)
│   └── support/                            # Código de suporte para os testes
│       ├── pages/                          # Page Objects
│       │   ├── table_actions.page.js       # Ações na tabela (adicionar, editar, excluir)
│       │   ├── table_validations.page.js   # Validações na tabela
│       │   ├── table_add_user.page.js      # Ações para preencher campos do usuário
│       │   └── table_edit_user.page.js     # Ações para editar campos do usuário
│       ├── step_definitions/               # Implementações dos passos do Cucumber
│       │   ├── add.cy.js                   # Passos para adicionar usuário
│       │   ├── delete.cy.js                # Passos para excluir usuário
│       │   ├── edit.cy.js                  # Passos para editar usuário
│       │   └── main_steps.cy.js            # Passos gerais para Web Tables
│       ├── commands.js                     # Comandos personalizados do Cypress
│       └── e2e.js                          # Configuração para testes e2e
├── cypress.config.js                       # Configuração do Cypress
├── cypress.env.json                        # Variáveis de ambiente (dados de teste)
├── package.json                            # Dependências do projeto
└── README.md                               # Este arquivo
```

## Funcionalidades Testadas

O projeto testa as seguintes funcionalidades na página Web Tables:

1. **Adicionar** um novo registro na tabela
2. **Editar** um registro existente
3. **Excluir** um registro
4. **Validar** que os dados aparecem corretamente na tabela após cada operação

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (versão 6 ou superior)

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd academia_accenture2025
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

O arquivo `cypress.env.json` contém os dados de teste utilizados no cenário.
O campo `user_id` é preenchido dinamicamente durante a execução do teste, a partir do ID extraído da tabela após a validação do usuário.
Exemplo de estrutura:

```json
{
  "user.example": {
    "user_id": "",
    "first_name": "Nome",
    "last_name": "Sobrenome",
    "email": "email@example.com",
    "age": 30,
    "salary": 5000,
    "department": "Departamento"
  },
  "user.edited": {
    "user_id": "",
    "first_name": "Nome Editado",
    "last_name": "Sobrenome Editado",
    "email": "email@example.com",
    "age": 25,
    "salary": 6000,
    "department": "Departamento Editado"
  }
}
```

## Executando o Teste

### Interface Gráfica do Cypress

```bash
npx cypress open
```

### Linha de Comando

```bash
npx cypress run
```

## Detalhes da Implementação

### Page Objects

O projeto utiliza o padrão Page Object Model (POM) para organizar o código:

- **table_actions.page.js**: Contém comandos para interagir com a tabela (abrir formulários, excluir registros).
- **table_validations.page.js**: Contém comandos para validar dados na tabela.
- **table_add_user.page.js**: Contém comandos para preencher o formulário de adição.
- **table_edit_user.page.js**: Contém comandos para preencher o formulário de edição.

### Step Definitions

As definições de passos do Cucumber estão organizadas por funcionalidade:

- **add.cy.js**: Passos para adicionar usuário.
- **delete.cy.js**: Passos para excluir usuário.
- **edit.cy.js**: Passos para editar usuário.
- **webtables.cy.js**: Passos gerais e validações.

### Tratamento de Erros

O projeto inclui tratamento para erros de script cross-origin (CORS), comuns no site DemoQA:

```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log('Uncaught exception:', err.message)
  return false
})
```

### Autor
**Vinicius Rodrigues**