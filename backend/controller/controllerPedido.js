const Produto = require('../model/Produto')

const cadastrarProduto = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Produto.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarProduto = async (req, res) => {
    try {
        const listar = await Produto.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarProduto = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Produto.destroy({ where: { id_Produto: valores.id } })
        res.status(201).json({ message: `Produto apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarProduto = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Produto.update(valores, { where: { id_Produto: valores.id_Produto } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarProduto, listarProduto, apagarProduto, atualizarProduto }