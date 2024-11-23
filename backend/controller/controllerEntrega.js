const Entrega = require('../model/Entrega')

const cadastrarEntrega = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Entrega.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarEntrega = async (req, res) => {
    try {
        const listar = await Entrega.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarEntrega = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Entrega.destroy({ where: { codEntrega: valores.id } })
        res.status(201).json({ message: `Entrega apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarEntrega = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Entrega.update(valores, { where: { codEntrega: valores.codEntrega } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarEntrega, listarEntrega, apagarEntrega, atualizarEntrega }