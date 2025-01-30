let ListaNomes = [];
let ListaSorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === '') {
        alert('Erro: O campo está vazio! Digite um nome antes de adicionar.');
        return;
    }
    if (ListaNomes.includes(nome)) {
        alert('Erro: Esse nome já foi adicionado!');
        return;
    }
    ListaNomes.push(nome);
    atualizarLista();
    document.getElementById('amigo').value = ''; // Limpa o input
}

function atualizarLista() {
    let p = document.getElementById('listaAmigos');
    p.innerHTML = ListaNomes.join('<br>'); // Exibe os nomes um abaixo do outro
}

function sortearAmigo() {
    // Se todos já foram sorteados, exibe um alerta e reseta a lista
    if (ListaSorteados.length === ListaNomes.length && ListaNomes.length > 0) {
        alert('Todos os amigos já foram sorteados! Reiniciando a lista.');
        ListaSorteados = []; // Reinicia a lista de sorteados
        return;
    }

    // Se a lista estiver vazia, exibe um erro
    if (ListaNomes.length === 0) {
        alert('Erro: Nenhum nome foi adicionado para o sorteio.');
        return;
    }

    let nomeSorteado;

    // Sorteia um nome que ainda não foi sorteado
    do {
        let index = Math.floor(Math.random() * ListaNomes.length);
        nomeSorteado = ListaNomes[index];
    } while (ListaSorteados.includes(nomeSorteado));

    ListaSorteados.push(nomeSorteado); // Adiciona o nome à lista de sorteados
    alert(`Nome sorteado: ${nomeSorteado}`);
}

