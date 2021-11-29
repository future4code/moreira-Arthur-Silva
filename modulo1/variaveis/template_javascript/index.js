// Exercicio de interpretação 

/*Resposta 1a questão

primeira resposta: 10
segunda resposta: 10,5

*/

/*Resposta 2a questão

primeira resposta: 10,20, (acredito que irá gerar um erro)

*/

/*Resposta 3a questão

primeira resposta: let horasDiaria = prompt("Quantas horas você trabalha por dia?")
segunda resposta: let remuneracaoDiaria = prompt("Quanto você recebe por dia?")

(nao entendi muito bem a terceira, mas irei corrigir da forma que acho que esteja correto)
terceira respota: console.log("Você recebe", remuneracaoDiaria, "/", horasDiaria, "por hora")

*/ 

// Exercicio de escrita


let nome = undefined; 
let idade = undefined;

console.log(typeof nome, typeof idade); //Resposta Undefined para ambas, porque nenhuma variavel contém valor, ou seja, esta indefinido.

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome, typeof idade); //Notei que ao receber os valores ele imprime para mim o tipo deles, sendo string(até este momento).

console.log("Olá", nome, "você tem", idade, "anos");


let macarrao = prompt("Você gosta de macarrão?");
let feijao = prompt("Você gosta de feijao?");
let arroz = prompt("Você gosta de arroz?");

console.log("Você gosta de macarrão? -", macarrao);
console.log("Você gosta de feijao? -", feijao);
console.log("Você gosta de arroz? -", arroz);


let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

//Aqui abaixo está minha resposta.
c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
