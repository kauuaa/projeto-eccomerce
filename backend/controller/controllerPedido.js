const Pedido = require('../model/Pedido')

const cadastrarPedido = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Pedido.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarPedido = async (req, res) => {
    try {
        const listar = await Pedido.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarPedido = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Pedido.destroy({ where: { codPedido: valores.id } })
        res.status(201).json({ message: `Pedido apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarPedido = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Pedido.update(valores, { where: { codPedido: valores.codPedido } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarPedido, listarPedido, apagarPedido, atualizarPedido }