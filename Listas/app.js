let listaSort = [];
let numLimite = 150
let numeroSecreto = gerarNum();
let tentativas = 1

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p',  'Escolha um numero entre 1 e 150');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTexto('h1', 'acertou!');
        let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = "você descobriu o número com " + tentativas + " " + palavraTent;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
            exibirTexto('p', 'O numero Secreto é menor');
        }
        else if (chute < numeroSecreto) {
            exibirTexto('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo()
    }

function gerarNum() {
 let NumeroEscolhido = parseInt(Math.random() * numLimite + 1);
 let qtdElementosLista = listaSort.length

 if (qtdElementosLista == numLimite) {
    listaSort = []
 }

 if (listaSort.includes(NumeroEscolhido)){
    return gerarNum();
 }
 else{
    listaSort.push(NumeroEscolhido)
    console.log(listaSort)
    return NumeroEscolhido;
 }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
numeroSecreto = gerarNum();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true)

}