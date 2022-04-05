import express, {Express, Request, Response} from "express";
import cors from "cors"
import { users, UserEnum } from "./data";

const app: Express = express()
let codeError:number = 400

app.use(express.json())
app.use(cors())

/*----------------------------------------------------------------------------------------- */
//ENDPOINT QUE BUSCA USUARIOS
app.get("/users", (req:Request, res:Response) => {
   
   try {
      if(!users){
         codeError = 404
         throw new Error("Não foi encontrado nenhum usuario");
      }
      res.status(200).send(users)  
   } catch (error:any) {
      res.status(codeError).send({message:error.message})
   }
})
//ENDPOINT QUE BUSCA O TIPO DOS USUARIOS
app.get("/search", (req:Request, res:Response) => {

   const search = req.query.type
   
   try {
      let retornaUsuarios = users.filter((item) => {
         return item.type === search 
      })
      if(!search){
         codeError = 400
         throw new Error("O parâmetro de pesquisa nao foi passado");
      } else if(search === ""){
         codeError = 422
         throw new Error("O parâmetro de pesquisa precisa ser uma string válida");
      } else if(retornaUsuarios.length === 0){
         codeError = 422
         throw new Error("O parâmetro passado não é válido")
      }
      
      res.status(200).send(retornaUsuarios)
   } catch (error:any) {
      res.status(codeError).send({message:error.message})
   }
   
})
//ENDPOINT QUE RETORNA INFORMAÇÕES DE UM NOME ESPECIFICO
app.get("/buscar/:nome", (req:Request, res:Response) => {

   let nome = req.params.nome
   try {
      let encontraNome = users.find((item) => {
         return item.name === nome
      })
      if(!encontraNome){
         codeError = 422
         throw new Error("O parâmetro passado é invalido"); 
      }

      res.status(200).send(encontraNome)
   } catch (error:any) {
      res.status(codeError).send({message:error.message})
   }
}) 
//ENDPOINT QUE ADICIONA UM ITEM
app.post("/add", (req:Request, res:Response) => {

   const id = Date.now() 
   const name = req.body.name
   const email = req.body.email
   const type = req.body.type
   const age = req.body.age

   try {
      if(!name || !email || !type || !age){
         throw new Error("Os parâmetros nao foram preenchidos corretamente");
      } else if(typeof name !== "string"){
         codeError = 422
         throw new Error("O parâmetro 'name' foi preenchido errado, espera-se uma string");
      } else if(typeof email !== "string"){
         codeError = 422
         throw new Error("O parâmetro 'email' foi preenchido errado, espera-se uma string");
      }else if(typeof type !== "string"){
         codeError = 422
         throw new Error("O parâmetro 'type' foi preenchido errado, espera-se uma string podendo ser 'ADMIN' OU 'NORMAL'");
      }else if(typeof age !== "number"){
         codeError = 422
         throw new Error("O parâmetro 'age' foi preenchido errado, espera-se uma number");
      }
      
      type addUsers = {
         id:Number,
         name:String,
         email:string,
         type:string
         age:number
      }
      
      let newUser:addUsers = {
         id,
         name,
         email,
         type,
         age,
      }
   
      let novoArr = [...users, newUser]
   
      res.status(201).send(novoArr)
   } catch (erro:any) {
      res.status(codeError).send({message:erro.message})
   }
})





/* ---------------------------------------------------------------------------------------- */
//CRIAÇÃO DO SERVIDOR
import { AddressInfo } from "net";


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
