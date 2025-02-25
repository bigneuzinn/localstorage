function salvarNome() {
    var nome = document.getElementById('inputNome').value;
    localStorage.setItem('nome', nome);

}

function mostraNome() {
    var nome = localStorage.getItem('nome');
    if (nome) {
        document.getElementById('resultado').textContent = `Nome salvo: ${nome}`;
    } else {
        document.getElementById('resultado').textContent = "Nenhum valor de nome";
    }
}

function limparNome() {
    localStorage.removeItem('nome');
    document.getElementById('resultado').textContent = "Nome removido"
}
