# Projeto CRUD com Node.js, Express, Mongoose e Swagger

Este projeto é um exemplo de API RESTful criada com Node.js, Express e MongoDB (via Mongoose). Ele possui duas entidades principais: Usuário (Usuario)Perfil (Perfil), associado a um usuário.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- swagger-jsdoc
- swagger-ui-express
---
## Como rodar o projeto

1. Clone o repositório

```bash
https://github.com/mateuskfortes/swagger_programacao_2.git
cd swagger_programacao_2
```

2. Instale as dependências

```bash
npm install
```
3. Configure o banco de dados

Crie um arquivo .env com a variável:
```bash
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.ifjt3b2.mongodb.net/
```
Substitua <db_username> pelo seu usuário atlas e o <db_password> pela sua senha do usuário atlas.

4. Inicie o servidor

```bash
node app.js
```
A API será iniciada em [http://localhost:3000](http://localhost:3000). 
O Swagger será visível em [http://localhost:3000/api-docs](http://localhost:3000/api-docs/).

---
## Rotas disponíveis

Usuários (/usuarios)

GET /usuarios – Lista todos os usuários

GET /usuarios/:id – Retorna um usuário pelo ID

POST /usuarios – Cria um novo usuário

PUT /usuarios/:id – Atualiza um usuário

DELETE /usuarios/:id – Remove um usuário

Perfis (/perfis)

GET /perfis – Lista todos os perfis (com usuário populado)

GET /perfis/:id – Retorna um perfil pelo ID

POST /perfis – Cria um novo perfil vinculado a um usuário

PUT /perfis/:id – Atualiza um perfil

DELETE /perfis/:id – Remove um perfil
