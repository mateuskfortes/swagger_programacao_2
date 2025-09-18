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





const Usuario = require('./models/usuario');
const Perfil = require('./models/perfil');

async function inserirUsuariosPerfis() {
  try {
    const usuariosPerfis = [
      {
        usuario: { nome: 'Alice', email: 'alice@example.com' },
        perfil: { bio: 'Desenvolvedora full-stack', idade: 28 },
      },
      {
        usuario: { nome: 'Bruno', email: 'bruno@example.com' },
        perfil: { bio: 'Designer de interfaces', idade: 30 },
      },
    ];

    const resultados = [];
    for (const up of usuariosPerfis) {
      // Tenta criar o usuário, se já existir baseado no email, ignora
      const usuarioCriado = await Usuario.findOneAndUpdate(
        { email: up.usuario.email }, // filtro único
        { $setOnInsert: up.usuario }, // insere apenas se não existir
        { new: true, upsert: true }   // retorna o doc criado ou existente
      );

      // Tenta criar o perfil, se já existir para esse usuário, ignora
      const perfilCriado = await Perfil.findOneAndUpdate(
        { usuario: usuarioCriado._id },
        { $setOnInsert: { ...up.perfil, usuario: usuarioCriado._id } },
        { new: true, upsert: true }
      );

      resultados.push({ usuario: usuarioCriado, perfil: perfilCriado });
    }

    console.log('Inseridos ou existentes:', resultados);
  } catch (err) {
    console.error('Erro ao inserir:', err);
  }
}

inserirUsuariosPerfis();

