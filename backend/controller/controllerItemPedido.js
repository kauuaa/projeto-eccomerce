const itemPedido = require('../model/itemPedido')

const cadastrarItemPedido = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await itemPedido.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarItemPedido = async (req, res) => {
    try {
        const listar = await itemPedido.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarItemPedido = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = itemPedido.destroy({ where: { id_itemPedido: valores.id } })
        res.status(201).json({ message: `itemPedido apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarItemPedido = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await itemPedido.update(valores, { where: { id_itemPedido: valores.id_itemPedido } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarItemPedido, listarItemPedido, apagarItemPedido, atualizarItemPedido }