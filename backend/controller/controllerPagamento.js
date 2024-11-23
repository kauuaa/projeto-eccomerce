const Pagamento = require('../model/Pagamento')

const cadastrarPagamento = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Pagamento.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarPagamento = async (req, res) => {
    try {
        const listar = await Pagamento.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarPagamento = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Pagamento.destroy({ where: { codPagamento: valores.id } })
        res.status(201).json({ message: `Pagamento apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarPagamento = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Pagamento.update(valores, { where: { codPagamento: valores.codPagamento } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarPagamento, listarPagamento, apagarPagamento, atualizarPagamento }