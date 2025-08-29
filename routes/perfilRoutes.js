const express = require('express');
const Perfil = require('../models/perfil');
const mongoose = require('mongoose');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Perfis
 *   description: Operações com perfis de usuários
 */

/**
 * @swagger
 * /perfis:
 *   get:
 *     summary: Lista todos os perfis
 *     tags: [Perfis]
 *     responses:
 *       200:
 *         description: Lista de perfis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 *       500:
 *         description: Erro interno
 */
router.get('/', async (req, res) => {
  try {
    const perfis = await Perfil.find().populate('usuario');
    res.json(perfis);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar perfis' });
  }
});























router.post('/', async (req, res) => {
  try {
    const perfil = new Perfil(req.body);
    await perfil.save();
    res.status(201).json(perfil);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar perfil' });
  }
});

























router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const perfil = await Perfil.findById(id).populate('usuario');
  if (!perfil) return res.status(404).json({ error: 'Perfil não encontrado' });

  res.json(perfil);
});



























router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const perfil = await Perfil.findByIdAndUpdate(id, req.body, { new: true });
  if (!perfil) return res.status(404).json({ error: 'Perfil não encontrado' });

  res.json(perfil);
});





















router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const perfil = await Perfil.findByIdAndDelete(id);
  if (!perfil) return res.status(404).json({ error: 'Perfil não encontrado' });

  res.status(204).send();
});

module.exports = router;
