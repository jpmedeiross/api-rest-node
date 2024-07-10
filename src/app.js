import express from 'express' //importando express
const app = express() //cirar umas instancia express 

app.use(express.json()) //indicar para o express ler body com json

//mock ou esconder dados
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Sérvia', grupo: 'G'},
    {id:4, selecao: 'Camarões', grupo: 'G'},
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Selecoes Copa 22!!!!!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com Sucesso!')
})

export default app
