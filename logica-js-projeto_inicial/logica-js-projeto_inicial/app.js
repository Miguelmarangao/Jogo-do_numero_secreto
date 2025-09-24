//Dando boas vindas na tela principal

alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000
//Definir o número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let tentativas = 1
let chute;
//Enquanto o chute não for igual ao número secreto 
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Caso o chute for igual ao número secreto
    if (chute == numeroSecreto) {

        //parar o while 
        break;

    } 
//Caso o número não for igual ao número secreto
    else { 
        if (chute > numeroSecreto){
// Use ${} e substitua as ' por ` para colocar strings e variaveis juntas
            alert(`O número secreto é menor que o ${chute}`);
        } else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativa = tentativa +1 
//Mesma coisa escrita de uma forma mais simples e fácil.
        tentativas++;
    }
}

// if (tentativas > 1){:
//     alert (`isso ai! Você descobriu o número secreto! (${numeroSecreto}) com ${tentativas} tentativas!`);
// }
// else alert(`isso ai! Você descobriu o número secreto! (${numeroSecreto}) com ${tentativas} tentativa!`);

//Mesma coisa escrita de uma forma mais simples e fácil.
let palavraTentativa = tentativas > 1 ? 'tentaivas':'tentativa';
alert (`Você acertou o número secreto! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);