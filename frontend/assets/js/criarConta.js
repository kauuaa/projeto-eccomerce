let resposta = document.getElementById('resposta')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const cpf = document.getElementById('cpf').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const logradouro = document.getElementById('logradouro').value
    const numero = document.getElementById('numero').value
    const bairro = document.getElementById('bairro').value
    const complemento = document.getElementById('complemento').value
    const localidade = document.getElementById('localidade').value
    const uf = document.getElementById('uf').value
    const cep = document.getElementById('cep').value
    const status = document.getElementById('status').value

    const valores = {
        nomeCliente: nome,
        sobrenomeCliente: sobrenome,
        cpfCliente: cpf,
        telefoneCliente: telefone,
        emailCliente: email,
        senha: senha,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        complemento: complemento,
        localidade: localidade,
        uf: uf,
        cep: cep,
        statusCliente: status,
    }

    fetch(`http://localhost:3000/cadastrarCliente`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dadosBackend => {
        console.log(dadosBackend)
        resposta.innerHTML = `Usuário cadastrado com sucesso!`
    })
    .catch((error) => {
        console.log(`Erro. ${error}`)
        resposta.innerHTML = `Erro`
    })
})