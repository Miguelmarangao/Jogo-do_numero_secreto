let listaDeProgamação = ['JavaScript','C','C++', 'Kotlin','Python']
listaDeProgamação.push('Java', 'Ruby','GoLang')
let numeroEscolido = prompt('Digite um número que deseja confirmar')
function mostarNoConsole(){
    console.log(listaDeProgamação[numeroEscolido +1])
};
