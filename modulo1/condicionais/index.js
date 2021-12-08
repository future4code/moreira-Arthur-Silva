/*----------------------------EXERCICIO DE INTERPRETAÇÃO ----------------------------*/

//1) 
/* 
a)O código acima recebe o numero enviado pelo usuario e com base nisso retorna se aquele numero colocado 
dividido por 2 e retornando 0 sera par ou impar.

b)Para os numeros pares.

c)Para os numeros impares.
*/

//2
/* 
a)O código serve para monstrar o valor da fruta que o cliente escolheu 

b)O valor impresso será: "O preço da fruta, Maçã é R$ 2.25"

C)O resultado seria: "O preço da fruta, Pêra é R$ 5.55"

*/

//3
/*
a)Recebendo um valor pelo prompt e mudando o tipo, de string para number com a funcao Number.

b)A mensagem sera "Esse numero passou no teste", mais o erro de esta chamando uma variavel de escopo local
num escopo global. Se o numero fosse só -10, apareceria somente a mensagem de erro, que é fazer a chamada de uma variavel
de escopo local sendo global. 

c)Haverá erro, pois a variavel mensagem foi declarada dentro do escopo local da condicional, e esta sendo chamada
fora dela.

*/ 

/*----------------------------EXERCICIO DE ESCRITA ----------------------------*/ 

//1)

const idadeUsuario = Number(prompt("Digite aqui sua idade: "))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir.")
} else{
    console.log("Você não pode dirigir.")
}

//2)

const turnoDoDia = prompt("Digite aqui qual turno você estuda: M = Matutino, V = Vespertino e N = Noturno")

if (turnoDoDia === "M"){
    console.log("Bom dia!")
}
else if(turnoDoDia === "V"){
    console.log("Boa Tarde!")
}
else if(turnoDoDia === "N"){
    console.log("Boa Noite!")
}


//3

const turnoDoDia2 = prompt("Digite aqui qual turno você estuda: M = Matutino, V = Vespertino e N = Noturno")

switch(turnoDoDia2){
    case 'M':
        console.log("Bom Dia, querido aluno!")
    break;
    case 'V':
        console.log("Boa Tarde, siga firme!")
    break;
    case 'N':
        console.log("Boa Noite, vamos juntos nessa!")
    break;                                               
}


//4

const generoFilme = prompt("Qual genero de filme iremos assistir? ")
const precoIngresso = prompt("Qual é o preço do ingresso? ")

if(generoFilme === 'fantasia' && precoIngresso < 15){
    console.log("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
}