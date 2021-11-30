//EXERCICIO DE INTERPRETAÇÃO

/*                    1o Exercicio                           */

/* const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // boolean

/*                    2o Exercicio                           */

/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!") 

const soma = primeiroNumero + segundoNumero

console.log(soma) */

/* Por padrão o Prompt só irá ter como saída strings. Então deveriamos fazer a conversão de tipo neste caso. Para que 
possamos fazer esta soma, Veja abaixo:  */

/* let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) 

const soma = primeiroNumero + segundoNumero

console.log("O resultado é",soma) */

/*                    3o Exercicio                           */


/* Por padrão o Prompt só irá ter como saída strings, amigo. Então vamos adicionar algo para fazer a conversão de
tipo neste caso, que o a função Number(), ficando assim, abaixo.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) 

const soma = primeiroNumero + segundoNumero

console.log("O resultado é",soma) */











//EXERCICIO DE ESCRITA

/*                    1o Exercicio                           */

const idadeUsuario = Number(prompt("Qual a sua idade?"));
const idadeAmigo = Number(prompt("Qual é a idade do seu best friend?"));

const resultado = idadeUsuario > idadeAmigo;
const idadeDiferenca = idadeUsuario - idadeAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado);
console.log("A diferença de idade é?", idadeDiferenca);

/*                    2o Exercicio                           */

const numeroPar = Number(prompt("Insira um numero par: "));

const restoDivisao = numeroPar % 2;

console.log(restoDivisao);  /* Os números pares que são colocados sempre retornam zero. */

// Consequentemente os número ímpares retornam um. 


/*                    3o Exercicio                           */

const idade = Number(prompt("Qual a sua idade?"));

const idadeMeses = idade * 12;
const idadeDias = idade * 365;
const idadeHoras = idade * 8.760;

console.log("Sua idade em Meses é:",idadeMeses, "Já em dias é:",idadeDias, "e em horas:",idadeHoras); 


/*                    4o Exercicio                           */
 
const firstNumber = Number(prompt("Digite seu primeiro número: "));
const secondNumber = Number(prompt("Digite seu segundo número: "));

const calcOne = firstNumber % 2;
const calcTwo = secondNumber % 2;
  
const resultadoOne = calcOne === 0;
const resultadoTwo = calcTwo === 1;

console.log("O primeiro numero é maior que segundo?", firstNumber > secondNumber);
console.log("O primeiro numero é igual ao segundo? ", firstNumber === secondNumber );
console.log("O primeiro numero é divisível pelo segundo?", resultadoOne);
console.log("O segundo numero é divisível pelo primeiro?", resultadoTwo);

// Então, eu testei a está funcionando tudo certo, porém acredito que o código esteja muito grande. 












