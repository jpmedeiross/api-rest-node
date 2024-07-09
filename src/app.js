import express from 'express' //importando express
const app = express() //cirar umas instancia express 

//mock ou esconder dados
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Sérvia', grupo: 'G'},
    {id:4, selecao: 'Camarões', grupo: 'G'},
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('OOla mundo000!!!!!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app
