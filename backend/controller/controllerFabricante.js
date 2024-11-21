const Fabricante = require('../model/Fabricante')

const cadastrarFabricante = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const cadastrar = await Fabricante.create(valores)
        res.status(201).json(cadastrar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const listarFabricante = async (req, res) => {
    try {
        const listar = await Fabricante.findAll()
        res.status(201).json(listar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const apagarFabricante = async (req, res) => {
    const valores = req.params
    console.log(valores)

    try {
        const apagar = Fabricante.destroy({ where: { id_Fabricante: valores.id } })
        res.status(201).json({ message: `Fabricante apagada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

const atualizarFabricante = async (req, res) => {
    const valores = req.body
    console.log(valores)

    try {
        const atualizar = await Fabricante.update(valores, { where: { id_Fabricante: valores.id_Fabricante } })
        console.log(atualizar)
        res.status(201).json(atualizar)
    } catch (error) {
        res.status(500).json({ message: `Erro!` })
        console.log(`Erro, ${error}`)
    }
}

module.exports = { cadastrarFabricante, listarFabricante, apagarFabricante, atualizarFabricante }