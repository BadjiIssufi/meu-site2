valoresCarrinho = JSON.parse(localStorage.getItem('carrinho'))

var ul =  document.querySelector('ul')

for(i = 0; i < valoresCarrinho.length; i++) {
    var conteudo = valoresCarrinho[i]
    var texto = document.createTextNode(conteudo)
    var li = document.createElement('li')
    li.appendChild(texto)
    ul.appendChild(li)
}

