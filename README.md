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

- Baixar o mongodb: https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.2.0-signed.msi

- Abrir o cmd e executar os seguintes comandos:
```bash
msiexec /a "C:\Users\Alunos\Downloads\mongodb-windows-x86_64-8.2.0-signed.msi" /qb TARGETDIR="C:\MongoDB"
mkdir C:\data\db
C:\MongoDB\MongoDB\Server\8.2\bin\mongod --dbpath C:\data\db
```

1. Clone o repositório

```bash
git clone https://github.com/mateuskfortes/swagger_programacao_2.git
cd swagger_programacao_2
```

2. Instale as dependências

```bash
npm install
```
3. Configure o banco de dados

Crie um arquivo .env com a variável:
```bash
MONGODB_URI=mongodb://localhost:27017
```
Substitua <db_username> pelo seu usuário atlas e o <db_password> pela sua senha do usuário atlas.

4. Inicie o servidor

```bash
npm start
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

GET /perfis – Lista todos os perfis

GET /perfis/:id – Retorna um perfil pelo ID

POST /perfis – Cria um novo perfil vinculado a um usuário

PUT /perfis/:id – Atualiza um perfil

DELETE /perfis/:id – Remove um perfil

# Explicação do Trecho de Código Swagger

Esse trecho de código faz a documentação da rota de atualização de perfis no **Swagger**.  
Ele **não executa a atualização do perfil**, mas descreve como essa rota da API deve funcionar.  
O Swagger usa essas informações para gerar automaticamente uma página de **documentação interativa**, onde os desenvolvedores conseguem entender e testar a API.

---

## Linha por Linha

### Linha 108
```js
/**
```

Indica o início do bloco de comentários em **JSDoc**.
Dentro desse bloco é escrita a documentação Swagger.

### Linha 109

```js
 * @swagger
```

Diz ao Swagger que o conteúdo dentro desse bloco será lido para gerar a documentação da API.

### Linha 110

```js
 * /perfis/{id}:
```

Define o **endpoint da rota**.
`/perfis/{id}` significa que a rota vai esperar um **id** como parâmetro.

### Linha 111

```js
 *   put:
```

Diz qual o **método HTTP** usado nessa rota.

### Linha 112

```js
 *     summary: Atualiza um perfil
```

Uma **descrição curta** que aparece na documentação.

### Linha 113

```js
 *     tags: [Perfis]
```

Agrupa rotas semelhantes em uma categoria chamada **tag**.
Aqui, todas as rotas de **"Perfis"** ficam juntas.

> Sempre coloque o nome do grupo entre **colchetes**.

### Linha 114

```js
 *     parameters:
```

Declara os **parâmetros da rota**.

### Linha 115

```js
 *       - in: path
```

Define **onde o parâmetro aparece**.

### Linha 116

```js
 *         name: id
```

Nome do parâmetro no path.
Tem que ser o mesmo `{id}` da URL.

### Linha 117

```js
 *         required: true
```

Indica que esse parâmetro é **obrigatório**.

### Linha 118

```js
 *         schema:
```

Define o **tipo de dado esperado**.

### Linha 119

```js
 *           type: string
```

Indica que o **id deve ser uma string**.

### Linha 120

```js
 *     requestBody:
```

Indica que o **corpo da requisição (body)** é necessário.

### Linha 121

```js
 *       required: true
```

Diz que o corpo da requisição é **obrigatório**.

### Linha 122

```js
 *       content:
```

Especifica o **formato dos dados enviados**.

### Linha 123

```js
 *         application/json:
```

Diz que o corpo da requisição deve estar no formato **JSON**.

### Linha 124

```js
 *           schema:
```

Define como será a **estrutura do JSON esperado**.

### Linha 125

```js
 *             $ref: '#/components/schemas/Perfil'
```

Faz referência a um **schema já definido no Swagger**.

### Linha 126

```js
 *     responses:
```

Define as **respostas possíveis** que a rota pode retornar.

### Linha 127

```js
 *       200:
```

Código de resposta **200 OK** → Requisição deu certo.

### Linha 128

```js
 *         description: Perfil atualizado com sucesso
```

Texto que descreve o que significa esse status.

### Linha 129

```js
 *       400:
```

Código **400 Bad Request** → Erro na requisição.

### Linha 130

```js
 *         description: Requisição inválida
```

Explica o que significa o erro **400**.

### Linha 131

```js
 *       404:
```

Código **404 Not Found** → Perfil não encontrado.

### Linha 132

```js
 *         description: Perfil não encontrado
```

Explica o que significa o erro **404**.

### Linha 133

```js
 */
```

Fecha o bloco de documentação Swagger.


