const Cliente = require('../model/Cliente')
const bcrypt = require('bcrypt')

const cadastrarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        if (!valores.senha) {
            return res.status(400).json({ message: `A senha é obrigatória!` })
        }

        const nivelSeguranca = 10
        const senhaCriptografada = await bcrypt.hash(valores.senha, nivelSeguranca)

        valores.senha = senhaCriptografada

        const cadastrar = await Cliente.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro ao cadastrar cliente.` })
        console.error(`Erro: ${error}`)
    }
}

const listarCliente = async (req, res) => {
    try {
        const listar = await Cliente.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarCliente = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Cliente.destroy({ where: { id_Cliente: valores.id } })
        res.status(201).json({ message: `Cliente apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Cliente.update(valores, { where: { id_Cliente: valores.id_Cliente } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarCliente, listarCliente, apagarCliente, atualizarCliente }