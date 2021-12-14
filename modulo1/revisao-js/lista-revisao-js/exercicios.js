// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

console.log(retornaTamanhoArray["Arthur", "Kelvim", "Marcio", "Joao"])

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
console.log(retornaArrayInvertido["Arthur", "Kelvim", "Marcio", "Joao"])
// EXERCÍCIO 03
let numerosSortidos = [3, 2, 1, 4, 7];

function retornaNumerosPares(array) {
   const numerosCrescente = numerosSortidos.sort()
   console.log(numerosCrescente)
}

retornaNumerosPares(numerosSortidos)

// EXERCÍCIO 04
const numeroAleatorios = [1, 2, 3, 4, 5, 6];
let numerosPares = [];

function retornaNumerosPares(array) {
    for(let i = 0; i <= numeroAleatorios.length; i++){
        if(numeroAleatorios[i] % 2 === 0){
            numerosPares.push(numeroAleatorios[i])
        } 
    }
    
    console.log(numerosPares)
    return numerosPares 
}

retornaNumerosPares(numeroAleatorios)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
const arrayNumeros = [2,6,8,7,9,3,150]
function retornaMaiorNumero(array) {
    let i = 0;
    let maiorNumero = 0 

    while(i < arrayNumeros.length){
    if(arrayNumeros[i] > maiorNumero){
        maiorNumero = arrayNumeros[i]
    }

    i++
}
    console.log(maiorNumero) 

}
retornaMaiorNumero() 
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
const filme = {
    nome: 'O Diabo Veste Prada',
    ano:  2008,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

function retornaChamadaDeFilme(filme) {
    const fraseParaSerRetornada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]} e ${filme.atores[3]} `
    
    console.log(fraseParaSerRetornada)
}
retornaChamadaDeFilme(filme)

// EXERCÍCIO 12
const dadosDoUsuario = {
    nome: 'Arthur',
    idade:  23,
    endereco: 'CNB 7',
    email: 'kelvim@gmail.com'
}

function retornaPessoaAnonimizada(pessoa) {
    const novoUsuario = {
       ...dadosDoUsuario,
       nome: 'ANONIMO'
   }
   console.log(novoUsuario)
   return novoUsuario
}

retornaPessoaAnonimizada()

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
