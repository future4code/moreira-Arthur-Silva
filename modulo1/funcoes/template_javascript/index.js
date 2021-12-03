//EXERCICIO DE INTERPRETACAO 

/* -------------------------------- EXERCICIO 1  ------------------------------*/

//Será impresso no console 10 e 50.

//Não haveria return e nao apareceria nada no console.

/* -------------------------------- EXERCICIO 2  ------------------------------*/


/* Esta função dara como retono um boolean sendo true ou false, a utilidade dela é para saber
se tem escrito "cenoura" no texto inserido.
*/

//true 
//true
//false

//EXERCICIO DE ESCRITA 

/* -------------------------------- EXERCICIO 1  ------------------------------*/
//a) 
 function dadosPessoais1(){
    console.log("Eu sou Arthur, tenho 23 anos, moro em Brasilia e sou estudante.");
}
dadosPessoais1()  

//b)

 function dadosPessoais2(nome, idade, cidade, profisssao){
    const todosDados = `Eu sou, ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profisssao}`
    console.log(todosDados)
}


dadosPessoais2("arthur", 23 ,"brasilia", "estudante")

/* -------------------------------- EXERCICIO 2  ------------------------------*/
//a)

function somaNumeros(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
}
console.log(somaNumeros(8,15))

//b)

const primeiroNumero = Number(prompt("Digite aqui o 1o numero: "))
const segundoNumero = Number(prompt("Digite aqui o 2o numero: "))

function maiorQue(primeiroNumero, segundoNumero){
    return primeiroNumero >= segundoNumero
}

console.log(maiorQue(primeiroNumero, segundoNumero))


//c)

const numeroColocado = Number(prompt("Digite um numero aqui: "))

const verificacao = numeroColocado % 2

function verificacaoDeNumero(numeroColocado){
    return verificacao === 0
}
console.log(verificacaoDeNumero(numeroColocado))


//d)

const mensagemRecebida = prompt("Digite aqui uma mensagem: ")

function mensagemImpressa(mensagemRecebida){

    const mensagem1 = mensagemRecebida.length
    const mensagem2 = mensagemRecebida.toUpperCase()
    const mensagemJuntas = `${mensagem1} ${mensagem2}`    

    console.log(mensagemJuntas)
}


mensagemImpressa(mensagemRecebida)



/* -------------------------------- EXERCICIO 3  ------------------------------*/

function soma(seuNumero1, seuNumero2){
    const somandoNumero = seuNumero1 + seuNumero2
    return somandoNumero
}
function subtracao(seuNumero1, seuNumero2){
    const subtraindoNumero = seuNumero1 - seuNumero2
    return subtraindoNumero
}
function multiplicacao(seuNumero1, seuNumero2){
    const multiplicandoNumero = seuNumero1 * seuNumero2
    return multiplicandoNumero
}
function divisao(seuNumero1, seuNumero2){
    const dividindoNumero = seuNumero1 / seuNumero2
    return dividindoNumero
}

const seuNumero1 = Number(prompt("Digite seu primeiro numero, aqui: "))
const seuNumero2 = Number(prompt("Digite seu segundo numero, aqui: "))

const numerosInseridos = `${seuNumero1} e ${seuNumero2}`

console.log(numerosInseridos)
console.log("Soma: ",soma(seuNumero1, seuNumero2))
console.log("Diferença",subtracao(seuNumero1, seuNumero2))
console.log("Multiplicação",multiplicacao(seuNumero1, seuNumero2))
console.log("Divisão",divisao(seuNumero1, seuNumero2))




