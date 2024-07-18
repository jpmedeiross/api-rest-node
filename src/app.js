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

//funcao p/ buscar o id
function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}

//funcao p/ pegar o index
function buscaIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id )
}

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Selecoes Copa 22!!!!!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com Sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send('Seleção excluida com sucesso!')
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app
