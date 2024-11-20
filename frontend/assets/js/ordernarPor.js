let selectOrdenar = document.getElementById('selectOrdenar')

function ordenar() {
    selectOrdenar.onchange = function () {
        let container = document.querySelector('.produtos')
        let produtos = Array.from(container.children)
        let ordem = selectOrdenar.value

        if (ordem === 'az') {
            produtos.sort((a, b) => a.querySelector('h2').textContent > b.querySelector('h2').textContent ? 1 : -1)
        } else if (ordem === 'za') {
            produtos.sort((a, b) => a.querySelector('h2').textContent < b.querySelector('h2').textContent ? 1 : -1)
        } else if (ordem === 'maiorPreco') {
            produtos.sort((a, b) => parseFloat(b.querySelector('.preco').textContent.replace('R$', '').replace(',', '.')) -
                                   parseFloat(a.querySelector('.preco').textContent.replace('R$', '').replace(',', '.')))
        } else if (ordem === 'menorPreco') {
            produtos.sort((a, b) => parseFloat(a.querySelector('.preco').textContent.replace('R$', '').replace(',', '.')) -
                                   parseFloat(b.querySelector('.preco').textContent.replace('R$', '').replace(',', '.')))
        }

        produtos.forEach(produto => container.appendChild(produto))
    }
}

ordenar()