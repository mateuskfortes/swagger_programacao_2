const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/mainRoutes')
const usuarioRoutes = require('./routes/usuarioRoutes');
const perfilRoutes = require('./routes/perfilRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Rota padrão
app.use('/', mainRoutes)

// Rotas de usuários
app.use('/usuarios', usuarioRoutes);

// Rotas de perfis
app.use('/perfis', perfilRoutes);

// Rota Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
