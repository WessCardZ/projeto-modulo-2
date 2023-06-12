const express = require('express');
const perfilRouter = require('./perfilRouter');

const app = express();
app.use(express.json());

app.use('/perfil', perfilRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado')
});