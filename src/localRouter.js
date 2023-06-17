const express = require('express');
const Local = require('./localModel')

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const local = await Local.findAll();
    res.send(local);
});

module.exports = router;