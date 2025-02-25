function salvarTarefa() {
    var tarefa = document.getElementById('inputTarefa').value;  // A variável correta é "tarefa"
    localStorage.setItem('tarefa', tarefa);  // Agora estamos usando a variável correta
}

function mostrarTarefa() {
    var tarefa = localStorage.getItem('tarefa');  // Certifique-se de pegar o valor de "tarefa"
    if (tarefa) {
        document.getElementById('resultado').textContent = `Tarefa salva: ${tarefa}`;
    } else {
        document.getElementById('resultado').textContent = "Nenhuma tarefa salva";
    }
}

function limparTarefa() {
    localStorage.removeItem('tarefa');
    document.getElementById('resultado').textContent = "Tarefa removida";
}
