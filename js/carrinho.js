function adicinarAoCarrinho(item) {
    if (localStorage.getItem('carrinho') === null) {
        localStorage.setItem('carrinho', JSON.stringify([]))  
    }

    var items = JSON.parse(localStorage.getItem('carrinho'));
    items.push(item);
    localStorage.setItem('carrinho', JSON.stringify(items))
    document.location.reload(true)
}

var btn = document.getElementsByClassName('btn-danger');
btn[0].addEventListener('click', function() {
    adicinarAoCarrinho('Camiseta Azul camuflada GRANDE')
})

var bagde = document.getElementsByClassName('badge-danger');
valor = JSON.parse(localStorage.getItem('carrinho'))
bagde[0].innerText = valor.length