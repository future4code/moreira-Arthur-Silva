import express from 'express'
import cors from 'cors'

const app = express()

type users = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website: string
}
type posts = {
    id:number,
    title:string,
    body:string,
    userId:number
}
const postados:posts[] = [
    {id: 1, title:"games", body:"muito bom jogar dark souls", userId:1},
    {id: 2, title:"futebol", body:"joguei muito futebol ontem", userId:1},
    {id: 2, title:"viagens", body:"estou nas ilhas canarias rsrs", userId:2},
    {id: 3, title:"trabalho", body:"mds como estou cansado de trabalhar", userId:3},
    {id: 4, title:"comercio", body:"o comercio hoje esta com bastante movimento", userId:4},
    {id: 5, title:"loucuras", body:"eu adoro fazer loucuras hhaha", userId:5},
]
// RESPSOTA EXERCICIO 6 - acredito que seja melhor criar fora do array de usuarios, pois ficará mais organizado e de fácil acesso.
const usuarios:users[] = [
    {id:1, name:"Arthur", phone:"6188889999", email:"kelvimarthur@gmail.com", website:"arthur.com"},
    {id:2, name:"Lucas", phone:"5677776666", email:"lukinhas@gmail.com", website:"lucas.com"},
    {id:3, name:"Joana", phone:"4522223333", email:"joaninha@gmail.com", website:"lucas.com"},
    {id:4, name:"Maria", phone:"7811112222", email:"maria@gmail.com", website:"maria.com"},
    {id:5, name:"Leia", phone:"33337777", email:"leia@gmail.com", website:"leia.com"}
]

app.use(express.json())
app.use(cors())



/* ------------------------------------------------------------------------------------------ */

//REQUISIÇÃO TESTE
app.get("/", (req, res) => {
    console.log("endpoint acessado")

    res.status(200).send("Parabéns usuario, você criou o seu primeiro endpoint :)")
})
//REQUISAO QUE PEGAR USUARIOS
app.get(`/users`, (req, res) => {
    console.log("endpoint que retorna usuarios está ok!")

    res.status(200).send(usuarios)
})
//REQUISIÇÃO QUE PEGA OS POSTS
app.get("/posts", (req, res) => {
    console.log("aqui esta seus posts")

    res.status(200).send(postados)
})
//REQUISIÇÃO QUE PEGAR POSTS PARTICULAR
app.get("/postUser/:id", (req, res) => {
        let postsEspecificos = postados.filter((post) => {
            return Number(req.params.id) === post.userId
        })
        .map((postDoUsuario) => {
            return postDoUsuario
        })
        res.status(200).send(postsEspecificos)
})

/* ------------------------------------------------------------------------------------------ */
app.listen(3003, () => {
    console.log("o servidor está rodando na porta 3003")
})