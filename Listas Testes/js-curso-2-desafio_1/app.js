/*let nome = prompt("Qual seu nome?")
let cidade = prompt("Qual sua cidade?")

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function VerificarConsole() {
     console.log("clicou")
}

function VerificarAlerta() {
    alert("Amo Js")
}

function VerificarPrompt() {
       alert("Oi " + nome + " Você é da cidade " + cidade + "?")
}

function VerificarSoma(){ 
    let n1 = prompt("digite um numero inteiro!")
    let n2 = prompt("digite outro numero inteiro!")
    alert(`A soma dos seus numeros é: ${parseInt(n1) + parseInt(n2)}`)}*/


/*function exibirMensagem(){
    console.log("Olá mundo!");
}

function ExibirNome(nome){
    console.log("olá, " + nome)
}

function MostraNumero(numero){
    console.log(numero * 2)
}

function ExibirNumeros(...numeros){
    const soma = numeros.reduce((acc, num) => acc + num, 0)
    const media = soma / numeros.length;
    console.log(media)
}

ExibirNome('Pedro');
ExibirNumeros(6,6,6,)
exibirMensagem();
MostraNumero(25);*/

function CalculoIMC(kg,M) {
            let  IMC =  kg / (M*M);
            let Classificação = IMC < 25 && IMC > 18.5  ? 'Saudavel' : 'Fora da Classificação'
            console.log("Seu IMC é:" + IMC + ". classificação: " + Classificação)
}
CalculoIMC(70,1.70)


function CalculoFatorial(n1){
       if (n1 < 0){
         return 'o fatorial não é definifo para números negativos'
       }
       if ( n1 === 0 || n1 === 1){
        return 1;
       }
       let fatorial = 1;
       for (let i = 2; i <= n1; i++) {
         fatorial *=i;
       }
       return fatorial;
}

console.log(CalculoFatorial(6))

function Conversao(ValorDollar){
    let dollar = 4.80
    console.log("Você tem: " + ValorDollar * dollar + " Reais!");
}
Conversao(10)

function CalcPeri(larg, altura, id, texto){
     let peri = larg * altura
     let campo = document.querySelector(`#${id}`);
     campo.innerHTML = texto + " " + peri + "m² de perimetro";
}
CalcPeri(10,10,'sala', "A sala tem:");

function CalcRad(raio, id, texto){ 
    let Area = Math.PI * (raio*raio)
    let peri = Math.PI * 2 * 5
    let campo = document.querySelector(`#${id}`);
    campo.innerHTML = texto + " " + Area.toFixed(2) + "m2 de area e " + peri.toFixed(2)  + "m2 de perimetro";
}
CalcRad(5,'circulo', "O circulo tem:");

function Tabuada (n1, id,){
    let i= 1;
    let resultado = "";

    while (i <= 10){
       
        let mult = n1 * i;
        resultado += n1 + "x" + i + "=" + mult + "<br>";
        i++;
    }

    let campo = document.querySelector(`#${id}`);
    campo.innerHTML = resultado
}
Tabuada(5,'Tabuada');