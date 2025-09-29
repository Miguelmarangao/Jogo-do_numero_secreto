var listaNumerosJaEscolidos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto)
//selecionar uma aréa/tag no HTML = document.querySelector
//escrever dentro da aréa selecionada = váriavel.innerHTML = 'Texto'

function limparTexto(){
    let campo = document.querySelector('input');
    campo.value = ''
};


function exibirTextoNaTela(tag,texto){
    let variavel = document.querySelector(tag);
    variavel.innerHTML = texto;
};
function exibirMensagemIncial(){
    //Texto inicial
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número de 1 a ${numeroLimite}`);

}

exibirMensagemIncial()


//Botão 'chutar'
function botaoChutar(){
    let chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
            //Caso ele acerte:
            exibirTextoNaTela('h1','Acertou!');
            let palavraTentiva = tentativas > 1 ? 'tentativas':'tentiva';
            let mensagemDeVitoria = (`Você adivinhou o número secreto! com ${tentativas} ${palavraTentiva}!`);
            exibirTextoNaTela('p', mensagemDeVitoria);
            limparTexto('input')
        //habilitar o botao novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor do que o ${chute}`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior do que o ${chute}`);
            
        };
        tentativas ++;
        //Caso erre:
        limparTexto();
        
    };
};
function gerarNumeroAleatorio(){
    let quantidadeDeElementosNaLista = listaNumerosJaEscolidos.length;
    let numeroEscolido = parseInt(Math.random() * numeroLimite +1);
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosJaEscolidos = []
    };
    if (listaNumerosJaEscolidos.includes(numeroEscolido)){
    return gerarNumeroAleatorio();
    } else{
        listaNumerosJaEscolidos.push(numeroEscolido)
        return numeroEscolido;
    };
};



//Botão 'Novo jogo'
function botaoNovoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTexto('input');
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
    tentativas = 1;
    console.log(numeroSecreto)
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(listaNumerosJaEscolidos.length - 1);
    console.log(listaNumerosJaEscolidos);
};
