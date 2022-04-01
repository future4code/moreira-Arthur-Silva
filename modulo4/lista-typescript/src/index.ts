//ATENÇÃO: ESTOU COM DIFICULDADE EM TIPAR AS SAIDAS DAS FUNÇÕES ENTÃO COLOQUEI TODAS DO TIPO VOID.



//1)
/* function recebeString(nome:string, data:string):string{
    let nute:string[] = data.split("/", 3)
    let resposta:string = `olá me chamo ${nome}, nasci no dia ${nute[0]} do mês ${nute[1]} do ano ${nute[2]}`
    return resposta
}
recebeString("arthur", "24/04/1993") */

//2)
/* function paramentoQualquer(nome:string){
    console.log(typeof nome)
}
paramentoQualquer("arthur") */

//3)
/* function cinema(nome:String, ano:number, genero:String, pontuacao?:number):void{
    const infoFilme:Info = {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    }
    console.log(infoFilme)
}
cinema("a cabana", 2012, "drama", 10)

type Info = {
    nome:String,
    ano:Number,
    genero:String,
    pontuacao?:number
} */

//4)

/* const arr: Pessoas[] = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]
enum Setores {
    MARKETING = "marketing",
    VENDAS = "venda",
    FINANCEIRO = "financeiro"
}
type Pessoas = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

function recebeArray(arr:Pessoas[]):void{
    let marktPeople = arr.filter((pessoas) => {
        return pessoas.setor === Setores.MARKETING
    })
    console.log(marktPeople)
    
}
recebeArray(arr) */
//5)
const usuarios:informas[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
type informas = {
    name: string,
    email: string,
    role: string
}
function admins(usuarios: informas[]):void{
    let returnEmaUser = usuarios.map((user) => {
        if(user.role === "admin"){
            return user.email
        }
    })
    console.log(returnEmaUser)
}
admins(usuarios)
//6)
//7)
//8)
//9)
//10)
//11)