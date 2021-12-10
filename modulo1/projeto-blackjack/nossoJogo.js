/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

const startGame = confirm("Gostaria de iniciar uma nova rodada?")

const primeiraNovaCarta = comprarCarta()
const segundaNovaCarta = comprarCarta()
const terceiraNovaCarta = comprarCarta()
const quartaNovaCarta = comprarCarta()

const somaDoUsuario = primeiraNovaCarta.valor + segundaNovaCarta.valor
const somaDoComputador = terceiraNovaCarta.valor + quartaNovaCarta.valor



if(startGame === false){
   console.log("O jogo acabou!")
} else{ 

   console.log("Usuario - cartas: ", primeiraNovaCarta.texto, segundaNovaCarta.texto, " - pontuação", somaDoUsuario) 
   console.log("Computador - cartas: ", terceiraNovaCarta.texto, quartaNovaCarta.texto, " - pontuação", somaDoComputador)
    
}



if (somaDoUsuario > somaDoComputador){
   console.log("O usuario ganhou!")
}else if (somaDoUsuario === somaDoComputador){
   console.log("Empate!")
}
 else{
   console.log("O computador ganhou ")
}
































