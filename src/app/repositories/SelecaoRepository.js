import conexao from "../database/conexao.js"

class SelecaoRepository {
    //CRUD
    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao,(error, resultado) => {
                if(error) return reject('Não foi possível cadastrar')

                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }

    findAll() {
        const sql = 'SELECT * FROM selecoes;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resultado) => {
                if(error) return reject('Não foi possível localizar')

                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,(error, resultado) => {
                if(error) return reject('Não foi possível localizar')

                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id],(error, resultado) => {
                if(error) return reject('Não foi possível localizar')

                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })  
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,(error, resultado) => {
                if(error) return reject('Não foi possível deletar')

                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })  
    }
}
export default new SelecaoRepository()

