const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({
  bio: { type: String },
  idade: { type: Number },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Perfil', perfilSchema);
