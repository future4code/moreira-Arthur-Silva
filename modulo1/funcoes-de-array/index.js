//--------------------------------------------------------------------------------------------------------------------

//EXERCICIO DE INTERPRETAÇÃO 

//1)Será impresso o item(objeto) com nome e apelido, seguido do index: 0, 1 e 2 e o array por completo. Repetindo isso 3 vez.

//2)Irá imprimir somente o nome de cada item.

//3)Irá imprimir tudo que seja diferente de "Chijo", como ele usou filter, o nome tambem irá aparecer.


//--------------------------------------------------------------------------------------------------------------------
//EXERCICIOS DE ESCRITA 1
//--------------------------------------------------------------------------------------------------------------------

//ARRAY PRINCIPAL

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
 //1)
 //a) RESPOSTA ABAIXO:

  const apenasNomeDosDoguinhos = (item) =>{
     return item.nome
 }

 const nomeDoguinhos = pets.map(apenasNomeDosDoguinhos)

 console.log(nomeDoguinhos) 

 //b) RESPOSTA ABAIXO:

  const doguinhosSalsichas = (item) =>{
     if(item.raca === "Salsicha"){
         return item.nome
     }
 }

 const quaisDoguinhosSaoSalsichas = pets.filter(doguinhosSalsichas);

 console.log(quaisDoguinhosSaoSalsichas) 

 //c) RESPOSTA ABAIXO:

  const cumpomDeDesconto = (item) =>{
     if(item.raca === "Poodle"){
        console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", item.nome, "!")
     }
 }

 const cumpomParaDesconto = pets.filter(cumpomDeDesconto); 

//-------------------------------------------------------------------------------------------------------------------- 
//EXERCICIOS DE ESCRITA 2
//--------------------------------------------------------------------------------------------------------------------

//ARRAY PRINCIPAL
  //2)
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 

 //a) RESPOSTA ABAIXO:

  const nomeProdutos = (item) =>{
     return item.nome
 } 

 const novoNomeProdutos = produtos.map(nomeProdutos)

 console.log(novoNomeProdutos) 
   
 //b) NAO FIZ, POIS NAO CONSEGUI.

 //c) RESPOSTA ABAIXO:

 const objetosCategoria = (item) =>{
     return item.categoria === "Bebidas"
 }

 const apenasObjetosBebiveis = produtos.filter(objetosCategoria)

 console.log(apenasObjetosBebiveis) 

 //d) RESPOSTA ABAIXO:

 const apenasPalavrasYpe = (item) =>{
     return item.nome.includes("Ypê")
 }

 const palavrasComYpe = produtos.filter(apenasPalavrasYpe)

 console.log(palavrasComYpe) 

 //e) RESPOSTA ABAIXO:

  const arrayFrases = (item) => {

    return item.nome.includes("Ypê")
 }

 const arrayFraseComYpe = (item) =>{
    return `Compre ${item.nome} por ${item.preco}`
}

 const arrayComPalavraYpe = produtos.filter(arrayFrases)
 const arrayFraseCompleta = arrayComPalavraYpe.map(arrayFraseComYpe) 

 console.log(arrayFraseCompleta)
 console.log(arrayComPalavraYpe) 
