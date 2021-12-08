// -------------------------------------- EXERCICIO DE INTERPRETACAO ---------------------------------------

//EXERCICIO 1

//Será impresso:

//"Matheus Nachtergaele"
//"Virginia Cavendish"
//{canal: "Globo", horario: "14h"}


//EXERCICIO 2

//a)

//Será impresso no console: e no final a ultima vogal do nome foi trocada pelo método ReplaceAll("a","") 

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
} 

const gato = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}

const tartaruga = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}


//b) A sintaxe dos tres pontos é responsável por obter uma cópia do objeto.


//EXERCICIO 3

*/
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/

//Não sei responder esta questão, nao sei responder pq retornou false e undefined.








// -------------------------------------- EXERCICIO DE ESCRITA ---------------------------------------

//1 - a

    const nickUser = {
    nome: "Arthur",
    apelidos:["thuthu","nene","campeao"]
}

function objetoDeEntrada(){

    const nickUser = {
        nome: "Arthur",
        apelidos:["thuthu","nene","campeao"]
    }

    console.log(`Eu sou ${nickUser.nome}, mas pode me chamar de: ${nickUser.apelidos[0]}, ${nickUser.apelidos[1]} ou ${nickUser.apelidos[2]}  `)

}
objetoDeEntrada()

//1 - b
const newObject = {
    ...nickUser,
    nome: "Arthur",
    apelidos:["tutu","tuts tuts","thuzin"]
}

objetoDeEntrada(newObject)
 
//2 - a)


const objeto1 = {
    nome: "Arthur",
    idade: 19,
    profissao: "Dev front-end"
}

const objeto2 = {
    nome: "Klevim",
    idade: 23,
    profissao: "Dev Back-end" 
}

function receber(){
    const receberObjeto1 = {
        ...objeto1
    }

    const receberObjeto2 = {
        ...objeto2
    } 
    console.log(objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length)
    console.log(objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length)
}

receber()

     


//3-a)

let carrinho = []

const banana = {
    nome: "Banana",
    disponibilidade: true
}
const uva = {
    nome: "Uva",
    disponibilidade: true
}
const maca = {
    nome: "Maca",
    disponibilidade: true
}


function feira() {
    const bananaFruta = {
        ...banana
    }
    const uvaFruta = {
        ...uva
    }
    const macaFruta = {
        ...maca
    }
    
    
    let adicaoBanana = carrinho.push(bananaFruta)
    let adicaoUva = carrinho.push(uvaFruta)
    let adicaoMaca = carrinho.push(macaFruta)

    console.log(carrinho)


}

feira()
