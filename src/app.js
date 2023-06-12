const express = require('express');
const perfilRouter = require('./perfilRouter');
const database = require('./db')

const app = express();
app.use(express.json());

app.use('/perfil', perfilRouter);

app.listen(3000, async () => {
    const resultDb = await database.sync({ alter: true })
    console.log('Servidor iniciado')
});