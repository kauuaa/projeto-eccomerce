function adicionarNoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    carrinho.push(produto)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

document.querySelectorAll('.addCarrinho').forEach((button, index) => {
    button.addEventListener('click', () => {
        const produto = {
            nome: document.querySelectorAll('h2')[index].innerText,
            preco: document.querySelectorAll('.preco')[index].innerText,
            image: document.querySelectorAll('.produtoConteudo img')[index].src
        }

        adicionarNoCarrinho(produto)
        alert(`${produto.nome}, foi adicionado ao carrinho!`)
    })
})

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    const carrinhoContainer = document.querySelector('.containerCarrinho')

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<h1>Seu carrinho de compras está vazio!</h1><p>Adicione produtos ao carrinho para continuar.</p>'
    } else {
        carrinhoContainer.innerHTML = `
            <table class="tabelaCarrinho">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço Unitário</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div class="subtotal"></div>
            <div class="botoesCarrinho">
                <button class="botaoContinuar" onclick="window.location.href='acessorios.html'">Continuar comprando</button>
                <button class="botaoFinalizar">Finalizar compra</button>
            </div>
        `

        const tbody = carrinhoContainer.querySelector('.tabelaCarrinho tbody')
        let total = 0

        carrinho.forEach(produto => {
            const produtoRow = `
                <tr>
                    <td class="produtoImagem">
                        <img src="${produto.image}" alt="${produto.nome}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;">
                    </td>
                    <td class="produtoNome">${produto.nome}</td>
                    <td class="precoUnitario">${produto.preco}</td>
                    <td class="quantidade">1</td>
                </tr>
            `
            tbody.innerHTML += produtoRow

            total += parseFloat(produto.preco.replace('R$', '').replace(',', '.'))
        })

        const subtotal = carrinhoContainer.querySelector('.subtotal')
        subtotal.innerHTML = `<strong>Subtotal: R$ ${total.toFixed(2).replace('.', ',')}</strong>`
    }
}

if (document.querySelector('.containerCarrinho')) {
    carregarCarrinho()
}