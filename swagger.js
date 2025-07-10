const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Usuario: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'ID do usuário' },
            nome: { type: 'string', description: 'Nome do usuário' },
            email: { type: 'string', description: 'Email do usuário' },
          },
        },
        UsuarioInput: {
          type: 'object',
          properties: {
            nome: { type: 'string', example: 'João da Silva' },
            email: { type: 'string', example: 'joao@email.com' },
          },
          required: ['nome', 'email']
        }
      }
    }
  },
  apis: ['./usuarioRoutes.js'], // Caminho para onde estão os JSDoc das rotas
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
