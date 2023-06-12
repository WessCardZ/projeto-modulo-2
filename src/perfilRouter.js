const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
    res.send('GET USER')
});

router.get('/:id', async (req, res) => {
    res.send(req.params.id)
});

router.get('/email/:email', async (req, res) => {
    res.send(req.params.email)
});

router.get('/cpf/:cpf', async (req, res) => {
    res.send(req.params.cpf)
});
router.post('/', async (req, res) => {
    const aluno = await Aluno.create(req.body);
    res.send(aluno)
});

router.put('/:id', async (req, res) => {
    res.send(req.params.id)
});

router.delete('/:id', async (req, res) => {
    res.send(req.params.id)
});

module.exports = router;