const Estoque = require('../model/Estoque')

const cadastrarEstoque = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Estoque.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarEstoque = async (req, res) => {
    try {
        const listar = await Estoque.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarEstoque = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Estoque.destroy({ where: { codEstoque: valores.id } })
        res.status(201).json({ message: `Estoque apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarEstoque = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Estoque.update(valores, { where: { codEstoque: valores.codEstoque } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarEstoque, listarEstoque, apagarEstoque, atualizarEstoque }