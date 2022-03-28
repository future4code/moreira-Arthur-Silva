//const minhaString:string = 4565

//EXERCICIO 1
//A)Ele diz que um numero nao pode ser atribuido a um tipo string.
//B)Podemos usar o "union type", pois ele irá permitir que aquela variavel recebar ou string ou number como valor;
//C)
enum coresArcoIres {
    azul = "azul",
    rosa = "rosa",
    verde = "verde",
    amarela = "amarela"
}

type pessoa ={
    nome: string,
    idade: number,
    corFavorita: string
}


let info: pessoa = {
    nome: "arthur",
    idade: 56,
    corFavorita: coresArcoIres.azul
}