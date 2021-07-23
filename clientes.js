let formulario = document.querySelector('#formulario')
let nome = document.querySelector('#nome')
let telefone = document.querySelector('#telefone')
let email = document.querySelector('#email')
let endereco = document.querySelector('#endereco')
let tabela = document.querySelector('#tabela-cliente')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    tabela.innerHTML += `
                <tr>
                    <td scope="row">${nome.value}</td>
                    <td>${endereco.value}</td>
                    <td>${email.value}</td>
                    <td>${telefone.value}</td>
                </tr>
    `
    let clientes = []
    let cliente = {
        nome:  nome.value,
        telefone: telefone.value,
        email: email.value,
        endereco: endereco.value
    }

    localStorage.setItem('cliente', JSON.stringify(cliente))
    // console.log(localStorage.getItem('cliente'))
    // console.log(clientes)


    nome.value = '';
    telefone.value = '';
    email.value = '';
    endereco.value = '';

    


}, false)