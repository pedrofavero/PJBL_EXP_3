# CRUD de Carros

Sistema web de gerenciamento de carros com React, Node.js/Express e MySQL.

**Desenvolvido por Pedro Henrique Valente Favero**

---

## O que você precisa ter instalado

- [Node.js](https://nodejs.org)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

---

## 1. Banco de Dados

1. Abra o **MySQL Workbench** e conecte na sua instância local
2. Vá em **File > Open SQL Script** e selecione o arquivo `carros.sql`
3. Execute com **Ctrl + Shift + Enter**

> Isso cria o banco `crud_carros`, a tabela `carros` e insere alguns registros de exemplo.

---

## 2. Backend

Abra um terminal e entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Abra o arquivo `db.js` e troque a senha pela sua senha do MySQL:

```js
password: "SUA_SENHA_AQUI",
```

Rode o servidor:

```bash
node index.js
```

> Saída esperada: `Servidor rodando na porta 3001`  
> Deixe esse terminal aberto.

---

## 3. Frontend

Abra **outro terminal** e entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm start
```

> O sistema abrirá automaticamente em **http://localhost:3000**

---

## Resumo rápido

| Terminal | Comandos |
|---|---|
| Terminal 1 (backend) | `cd backend` → `npm install` → `node index.js` |
| Terminal 2 (frontend) | `cd frontend` → `npm install` → `npm start` |

---

## Como o sistema funciona

### Tela de Listagem de Veículos
Tela inicial do sistema. Exibe todos os veículos cadastrados no banco de dados em uma tabela com as colunas ID, Marca, Modelo, Ano, Cor e Preço. Cada linha possui três botões de ação: **Ver**, **Editar** e **Excluir**. No topo da tela possui um botao para ir para tela de **Cadastrar**.

---

### Tela de Visualização de Veículo
Acessada ao clicar em **Ver** na listagem. Exibe todas as informações detalhadas do veículo selecionado em formato de tabela. Possui botões para **Editar** o veículo ou **Voltar** para a listagem.

---
### Adicionar Veículo
Acessada pelo botão **Cadastrar** no menu superior. Exibe um formulário com os campos Marca, Modelo, Ano, Cor e Preço. Após preencher e confirmar, o veículo é salvo no banco de dados e o sistema redireciona para a listagem.

---

### Editar Veículo
Acessada ao clicar em **Editar** na listagem ou na tela de detalhes. O formulário é carregado já preenchido com os dados atuais do veículo. Após salvar, as alterações são atualizadas no banco de dados.

---

### Excluir Veículo
Ao clicar em **Excluir** na listagem, uma janela de confirmação é exibida perguntando se deseja realmente excluir o veículo. Ao confirmar, o registro é removido do banco de dados e a listagem é atualizada automaticamente.

---

## Vídeo Explicativo do Sistema e Código

**https://www.youtube.com/watch?v=uSoSmi_Mnlk**