// EXERCICIO DE INTERPRETAÇÃO 

/*---------------------------------------- EXERCICIO 1 DE INTERPRETACAO ---------------------------------------- */
//resposta: 'a. ' undefined

//resposta: 'b. ' null

//resposta: 'c. ' 11

//resposta: 'd. ' 3

//resposta: 'e. ' [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//resposta: 8

/*---------------------------------------- EXERCICIO 2 DE INTERPRETACAO ---------------------------------------- */

//resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27 








// EXERCICIO DE ESCRITA 

/*---------------------------------------- EXERCICIO 1 DE ESCRITA  ---------------------------------------- */

const nomeCliente = prompt("Qual o seu nome?");
const emailCliente = prompt("Qual é o seu e-mail?");

console.log("O e-mail: "+ emailCliente+ " foi cadastrado com sucesso. Seja bem-vindo(a), "+nomeCliente+"!");

/*---------------------------------------- EXERCICIO 2 DE ESCRITA  ---------------------------------------- */

const comidasFavoritas = ["cachorro-quente", "refrigerante", "arroz-com-calabresa", "doces", "bolo"];

console.log(comidasFavoritas);
console.log("Essas são as minhas comidas favoritas: ");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

const comidaFavDoUsuario = prompt("Qual é a sua comida favorita?");

comidasFavoritas[1] = comidaFavDoUsuario; 

console.log(comidasFavoritas);

/*---------------------------------------- EXERCICIO 3 DE ESCRITA  ---------------------------------------- */

const listaDeTarefas = [1,2,3];

const tarefasDiarias1 = prompt("Diga 3 tarefas que você precisa fazer no seu dia, a primeira: ");
const tarefasDiarias2 = prompt("Diga aqui a segunda: ");
const tarefasDiarias3 = prompt("Diga aqui a terceira: ");

listaDeTarefas[0] = tarefasDiarias1;
listaDeTarefas[1] = tarefasDiarias2;
listaDeTarefas[2] = tarefasDiarias3;

console.log(listaDeTarefas);

const escolhaUsuario = prompt("Agora digite o numero de uma tarefa que você ja realizou hoje, sendo primeira tarefa do dia = 0 e assim por diante.");

listaDeTarefas.splice(escolhaUsuario,1);

console.log(listaDeTarefas);

