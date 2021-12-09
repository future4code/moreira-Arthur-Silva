/*-------------------------EXERCICIO DE INTERPRETACAO-------------------------*/ 


//1. A variavél "i" que é o contador irá sempre incrementar a variavel "valor", enquanto "i" for menor que 5. 

//2. a)Todos os numeros acima de 18. b)Entao eu acredito que poderia sim, teria que usar o nome do array criado dentro da
//variavel no for-of seguida do ponto  Ex: nome-da-variavel-criada-dentro-do-for-of[posição-no-index]

//3. o resultado seria: 
/* 
Primeiro laço: "*"
Segundo laço: "**"
Terceiro laço: "***"
Quarto laço: "****"

*/

/*-------------------------EXERCICIO DE ESCRITA-------------------------*/ 

//1)
/* const quantidadeDeBichinhos = Number(prompt("Quantos bichonhos você tem?"))

if(quantidadeDeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")

}

else if(quantidadeDeBichinhos > 0){


     let contador = 0
     const nomes = []

     while(contador < quantidadeDeBichinhos){
        const nomeDosBichinhos = prompt("Digite aqui o nome dos bichinhos: ")
         
        nomes.push(nomeDosBichinhos)

        contador++ 
     }
    
    console.log(nomes)
} 
 */
//2)


const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
function imprimindoNumerosDoArray(){

 for(let numerosDoArray of arrayOriginal){

    console.log(numerosDoArray)
    
} 
}
imprimindoNumerosDoArray() 

//b)
 function dividindoNumerosdoArray(){
    for(let divindoOsNumeros of arrayOriginal){

        const resultado = divindoOsNumeros / 10
        console.log(resultado)
    }
}
dividindoNumerosdoArray()
 
//c)

//d)

//e)
