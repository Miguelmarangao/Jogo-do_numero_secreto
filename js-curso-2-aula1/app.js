let listaNumerosSorteados = []
let numeroMaximo = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let mensagemNumeroMaximo =`Escolha o número entre 1 e ${numeroMaximo}`
//Case sensitive : Diferencia maiúsculas e minúsculas = querySelector
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagensIniciais(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',mensagemNumeroMaximo);
}
mensagensIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemVitoria = `Você descobriu o número secreto! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p',mensagemVitoria);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    verificarChute();
    mensagensIniciais();
    tentativas = 1;
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

//parseInt = transformar em número inteiro.
function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNalista = listaNumerosSorteados.length
    if (quantidadeDeElementosNalista == numeroMaximo){
        listaNumerosSorteados = []
    }
    if (listaNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } 
    else {
    listaNumerosSorteados.push(numeroEscolido);
    console.log(listaNumerosSorteados);
    return numeroEscolido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//return = retorna um resultado ou número.
console.log(numeroSecreto);
