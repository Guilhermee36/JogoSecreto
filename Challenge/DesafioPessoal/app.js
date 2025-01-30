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
    document.getElementById('amigo').value = ''; // Limpar o input...
}

function atualizarLista() {
    let p = document.getElementById('listaAmigos');
    p.innerHTML = ListaNomes.join('<br>'); 
}

function sortearAmigo() {
    
    if (ListaSorteados.length === ListaNomes.length && ListaNomes.length > 0) {
        alert('Todos os amigos já foram sorteados! Reiniciando a lista.');
        ListaSorteados = []; 
        return;
    }

    
    if (ListaNomes.length === 0) {
        alert('Erro: Nenhum nome foi adicionado para o sorteio.');
        return;
    }

    let nomeSorteado;

    
    do {
        let index = Math.floor(Math.random() * ListaNomes.length);
        nomeSorteado = ListaNomes[index];
    } while (ListaSorteados.includes(nomeSorteado));

    ListaSorteados.push(nomeSorteado);
    alert(`Nome sorteado: ${nomeSorteado}`);
}

