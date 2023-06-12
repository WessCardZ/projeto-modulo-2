const express = require('express');
const Perfil = require('./perfilModel');
const Local = require('./localModel')

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const perfil = await Perfil.findAll({ include: 'localizacao' });
    res.send(perfil);
});

router.get('/:id', async (req, res) => {
    const perfil = await Perfil.findByPk(req.params.id);
    res.send(perfil);
});

router.get('/matricula/:matricula', async (req, res) => {
    const perfil = await Perfil.findOne({
        where: {
            matricula: req.params.matricula
        }
    })
    res.send(perfil)
});

router.get('/cpf/:cpf', async (req, res) => {
    const perfil = await Perfil.findOne({
        where: {
            cpf: req.params.cpf
        }
    })
    res.send(perfil)
});
router.post('/', async (req, res) => {
    const perfil = await Perfil.create(req.body);
    res.send(perfil)
});

router.put('/:id', async (req, res) => {
    let perfil = await Perfil.findByPk(req.params.id);
    perfil.tipo = req.body.tipo;
    perfil = await perfil.save(perfil)
    res.send(perfil)
});

router.delete('/:id', async (req, res) => {
    let perfil = await Perfil.findByPk(req.params.id);
    perfil.destroy();
    res.status(204).send();
});

router.post('/:id/local', async (req, res) => {
    let perfil = await Perfil.findByPk(req.params.id, { include: 'localizacao' });
    const local = await Local.build(req.body);
    local.perfil_id = perfil.id

    const result = await local.save();
    perfil.localizacao_id = result.id;

    perfil = await perfil.save();
    res.send(perfil)
});

module.exports = router;