let formulario = document.querySelector('#formulario')
let nome = document.querySelector('#nome')
let quantidade = document.querySelector('#quantidade')
let preco = document.querySelector('#preco')
let codigo = document.querySelector('#codigo')
let tabela = document.querySelector('#tabela-produto')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    tabela.innerHTML += `
                <tr>
                    <td scope="row">${nome.value}</td>
                    <td>R$ ${preco.value}</td>
                    <td>${quantidade.value}</td>
                    <td>${codigo.value}</td>                   
                </tr>
    `
    let produtos = []
    let produto = {
        nome:  nome.value,
        quantidade: quantidade.value,
        preco: preco.value,
        codigo: codigo.value
    }

    localStorage.setItem('produto', JSON.stringify(produto))
    // console.log(localStorage.getItem('produto'))
    // console.log(produtos)


    nome.value = '';
    quantidade.value = '';
    preco.value = '';
    codigo.value = '';

    


}, false)