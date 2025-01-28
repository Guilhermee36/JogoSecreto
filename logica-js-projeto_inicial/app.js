alert('Secret numbers!');
let NumeroMax = 1000;
let NumeroSecreto = parseInt(Math.random() * NumeroMax + 1) ;
console.log(NumeroSecreto);
let Chute;
let Tentativas = 1;


while(Chute != NumeroSecreto) {
    Chute = prompt('choose a number between 1 and ' + NumeroMax);

    if (NumeroSecreto == Chute) {
        break;
        
        } else {
            if  (NumeroSecreto > Chute){
                alert('O numero secreto é maior que ' + Chute);
            } else{ 
                alert('O numero secreto é menor que ' + Chute);
            }
            Tentativas++;

        }
}
let palavratent = Tentativas > 1 ? ' tentativas ' : ' tentativa '
alert("Voce acertou o numero secreto " + NumeroSecreto + " com " + Tentativas + palavratent);



    
