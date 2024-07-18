import app from "./src/app.js"

import conexao from './infra/conexao.js'

const PORT = 3000 //definir a PORTa

// fazer a conexao
conexao.connect((error) =>{
    if(error) {
        console.log(error)
    } else {
        console.log('Conexão realizada com sucesso!')
        //escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
    }
})

