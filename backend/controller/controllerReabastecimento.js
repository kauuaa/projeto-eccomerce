const Reabastecimento = require('../model/Reabastecimento')

const cadastrarReabastecimento = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Reabastecimento.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarReabastecimento = async (req, res) => {
    try {
        const listar = await Reabastecimento.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarReabastecimento = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Reabastecimento.destroy({ where: { codReabastecimento: valores.id } })
        res.status(201).json({ message: `Reabastecimento apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarReabastecimento = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Reabastecimento.update(valores, { where: { codReabastecimento: valores.codReabastecimento } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarReabastecimento, listarReabastecimento, apagarReabastecimento, atualizarReabastecimento }