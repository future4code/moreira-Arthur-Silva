//EXERCICIO 1 
//a) podemos atribuir sua entrada a uma variavel. Ex: const var1 = (process.argv[2]) e const var2 = (process.argv[3])
//b)abaixo:
const nome = (process.argv[2])
const idade = (process.argv[3])

console.log(`Olá, ${nome} Você tem ${idade} anos.`)

const daquiSeteAnos = idade + 7

//c) 
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${daquiSeteAnos}`)
//EXERCICIO 2
console.log(process.argv[2])