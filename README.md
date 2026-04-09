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




## Video Explicativo do Sistema e Código

**https://www.youtube.com/watch?v=uSoSmi_Mnlk**