const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')
const controllerCliente = require('./controller/controllerCliente')
const controllerEntrega = require('./controller/controllerEntrega')
const controllerEstoque = require('./controller/controllerEstoque')
const controllerFabricante = require('./controller/controllerFabricante')
const controllerItemPedido = require('./controller/controllerItemPedido')
const controllerPagamento = require('./controller/controllerPagamento')
const controllerPedido = require('./controller/controllerPedido')
const controllerReabastecimento = require('./controller/controllerReabastecimento')
const controllerProduto = require('./controller/controllerProduto')
const app = express()

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/cadastrarCliente', controllerCliente.cadastrarCliente)
app.get('/listarCliente', controllerCliente.listarCliente)
app.delete('/apagarCliente/:id', controllerCliente.apagarCliente)
app.put('/atualizarCliente', controllerCliente.atualizarCliente)

app.post('/cadastrarEntrega', controllerEntrega.cadastrarEntrega)
app.get('/listarEntrega', controllerEntrega.listarEntrega)
app.delete('/apagarEntrega/:id', controllerEntrega.apagarEntrega)
app.put('/atualizarEntrega', controllerEntrega.atualizarEntrega)

app.post('/cadastrarEstoque', controllerEstoque.cadastrarEstoque)
app.get('/listarEstoque', controllerEstoque.listarEstoque)
app.delete('/apagarEstoque/:id', controllerEstoque.apagarEstoque)
app.put('/atualizarEstoque', controllerEstoque.atualizarEstoque)

app.post('/cadastrarFabricante', controllerFabricante.cadastrarFabricante)
app.get('/listarFabricante', controllerFabricante.listarFabricante)
app.delete('/apagarFabricante/:id', controllerFabricante.apagarFabricante)
app.put('/atualizarFabricante', controllerFabricante.atualizarFabricante)

app.post('/cadastrarItemPedido', controllerItemPedido.cadastrarItemPedido)
app.get('/listarItemPedido', controllerItemPedido.listarItemPedido)
app.delete('/apagarItemPedido/:id', controllerItemPedido.apagarItemPedido)
app.put('/atualizarItemPedido', controllerItemPedido.atualizarItemPedido)

app.post('/cadastrarPagamento', controllerPagamento.cadastrarPagamento)
app.get('/listarPagamento', controllerPagamento.listarPagamento)
app.delete('/apagarPagamento/:id', controllerPagamento.apagarPagamento)
app.put('/atualizarPagamento', controllerPagamento.atualizarPagamento)

app.post('/cadastrarPedido', controllerPedido.cadastrarPedido)
app.get('/listarPedido', controllerPedido.listarPedido)
app.delete('/apagarPedido/:id', controllerPedido.apagarPedido)
app.put('/atualizarPedido', controllerPedido.atualizarPedido)

app.post('/cadastrarReabastecimento', controllerReabastecimento.cadastrarReabastecimento)
app.get('/listarReabastecimento', controllerReabastecimento.listarReabastecimento)
app.delete('/apagarReabastecimento/:id', controllerReabastecimento.apagarReabastecimento)
app.put('/atualizarReabastecimento', controllerReabastecimento.atualizarReabastecimento)

app.post('/cadastrarProduto', controllerProduto.cadastrarProduto)
app.get('/listarProduto', controllerProduto.listarProduto)
app.delete('/apagarProduto/:id', controllerProduto.apagarProduto)
app.put('/atualizarProduto', controllerProduto.atualizarProduto)


app.get('/', (req, res) => {
    res.status(201).json({message: `Servidor ativo!`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((error) => {
    console.error(`Erro, ${error}`)
})