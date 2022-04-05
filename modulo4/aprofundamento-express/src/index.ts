import express from 'express'
import cors from 'cors'
import { send } from 'process'

const app = express()

app.use(express.json())
app.use(cors())

type Afazer = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
const aFazeres:Afazer[] = [
    {userId:1, id:1, title:"lavar louça", completed:true},
    {userId:1, id:2, title:"capinar mato", completed:false},
    {userId:2, id:1, title:"jogar bola", completed:false},
    {userId:3, id:1, title:"fazer sopa", completed:true},
    {userId:3, id:2, title:"ir almoçar", completed:false},
    {userId:4, id:1, title:"dar comida aos porcos", completed:true},
    {userId:5, id:1, title:"dar agua para os passaros", completed:true},
]

/* --------------------------------------------------------------------------------------------- */
//REQUISIÇÃO DE TESTE
app.get("/ping", (req, res) => {
    res.status(200).send("pong")
})
//REQUISIÇÃO QUE VERIFICA A FAZERES CONCLUIDOS
app.get("/completados/:terminado", (req, res) => {
    if(req.params.terminado === "true"){
        let copiaAfazeresTerminados = aFazeres.filter((item) => {
            return item.completed === true
        })
        res.status(200).send(copiaAfazeresTerminados)
    } else if(req.params.terminado === "false"){
        let copiaAfazeresNaoTerminados = aFazeres.filter((item) => {
            return item.completed === false
        })
        res.status(200).send(copiaAfazeresNaoTerminados)
    } else {
        res.status(400).send("Não foi encontrado um parâmetro válido. (só aceitamos 'true' ou 'false')")
    }
})
//REQUISIÇÃO QUE ADCIONA UM AFAZER 

app.put("/addafazer", (req, res) => {

    const idUsuario = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const completed = req.body.completed

    let addAFazer:{userId:number,id:number,title:string,completed:boolean} = {
        userId: idUsuario,
        id: id,
        title: title,
        completed: completed
    } 
    let aFazeresAtt = [...aFazeres, addAFazer]
    res.status(200).send(aFazeresAtt)
})

//TENTATIVA DE FAZER O END-POINT DE EDITAR STATUS TA TAREFA(NÃO CONSEGUI)
/* app.put("/editarstatus", (req, res) => {
    const body = {
        idUser: Number(req.body.userId),
        idTarefa: Number(req.body.idTarefa)
    }

    const editarCompleted = aFazeres.filter((item) => {
        if(item.id === body.idTarefa && item.userId === body.idUser){
            item.completed = !item.completed
            return item
        }
    })

    return editarCompleted.length === 0 ? res.status(400).send("id ou idUser está errado") : res.status(200).send(editarCompleted)

}) */ 
app.delete("/deletar", (req, res) => {
    const idTarefa = Number(req.body.id)
    const idUser = Number(req.body.idUser)

    let nute = aFazeres.filter((item) => {
        if(idTarefa === item.id && idUser === item.userId){
            return aFazeres.splice(idTarefa,1)
        }
    })
    res.status(200).send(nute)
    
    //let novoArray = aFazeres.filter((item) => {
        //return aFazeres[idTarefa].
    //})
})


/* --------------------------------------------------------------------------------------------- */

app.listen (3003, () => {
    console.log("O serve esta rodando na porta 3003")
})

