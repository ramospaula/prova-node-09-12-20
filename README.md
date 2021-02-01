## desafio helpper - backend

desafio feito pela empresa helpper durante o processo seletivo da vaga de desenvolvimento back-end

## Instalações

```bash
npm install express
npm install @types/express -D
npm install typescript -D
npm install ts-node -D
npm install ts-node-dev -D
npm install knex 
npm install sqlite3@4.2.0
npm i —save-dev @types/https-errors
npm install --save-dev jest
```

## Run Project

```bash
npm run dev
```

## Run banco

```bash
npm run knex:migrate
```
Para visualizar o banco deve ter a extenção sqlite no VSCODE e com o botão CTRL + SHIFT + P => open database → database.sqlite. No canto inferior esquerdo estará o sqlite explorer e com o botão direito no nome da tabela selecionar para visualizar.

## Run test

```bash
npm run test
```

## Endpoints:

### todos os Endpoints foram feitos utilizando a plataforma insomnia para fazer as requisições.

## Cadastro de usuarios

## Criar users
Exemplo para o body da requisição
```bash
POST http://localhost:3333/users
{
  "name": "paula",
  "email": "paula@hotmail.com",
  "username": "paula"
}
```
os campos email e username são unicos na tabela

## Apagar users

```bash
DELETE http://localhost:3333/users/:id
```

## Listar users

```bash
GET http://localhost:3333/users
```

## Update users

```bash
PUT http://localhost:3333/users/:id
deve poder atualizar o username
```
